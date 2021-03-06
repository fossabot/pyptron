const slugify = require('slugify')
const { newISODate, formatDate } = require('../helpers/date-helpers')
const { cdnPathMaker } = require('../helpers/global-helpers')

module.exports = class Category {
  constructor(options) {
    this.emoji = options.emoji
    this.getPypData = this.getPypData.bind(this)
    this.messages = options.messages || []
    this.name = options.name
    this.pypData = options.pypData
    this.decrees = options.decrees
  }

  getPypData(options) {
    const { cityPath, date = new Date(), days = 1 } = options
    const maxDays = 30
    const ISODate = newISODate(date)
    const currentDate = new Date(ISODate)
    const totalDays = days > maxDays ? maxDays : days
    const sortedPypData = this.pypData.sort((a, b) => {
      if (a.startDate < b.startDate) {
        return 1
      }
      if (a.startDate > b.startDate) {
        return -1
      }
      return 0
    })
    const categoryPath = slugify(this.name, {
      lower: true,
    })

    const { emoji, key, name, messages, decrees } = this

    const result = {
      emoji,
      key,
      messages,
      name,
      decrees: decrees
        ? cdnPathMaker(decrees, cityPath)
        : [{ name: '', url: '' }],
      path: `${cityPath}/${categoryPath}`,
      data: [],
    }

    for (let i = 0; i < totalDays; i += 1) {
      const currentPypData = sortedPypData.find(
        pypData => formatDate(currentDate) >= pypData.startDate
      )
      if (!currentPypData) {
        throw new Error(
          `No tenemos información disponible antes de ${
            sortedPypData[sortedPypData.length - 1].startDate
          }.`
        )
      }
      const {
        exceptions,
        excludedDays,
        hours,
        maps,
        observations,
        scheme,
        skipHolidays,
        vehicleClasses,
      } = currentPypData

      result.data.push({
        date: currentDate.toISOString(),
        exceptions,
        excludedDays,
        hours,
        maps: maps ? cdnPathMaker(maps, cityPath) : [],
        observations,
        scheme,
        skipHolidays,
        numbers: currentPypData.getPypNumbers(currentDate),
        vehicleClasses,
      })
      currentDate.setDate(currentDate.getDate() + 1)
    }

    return result
  }

  static get metainfo() {
    return {
      taxis: { emoji: '🚕', name: 'Taxis' },
      particulares: { emoji: '🚗', name: 'Particulares' },
      tpc: { emoji: '🚌', name: 'Transporte Público Colectivo' },
      motos: { emoji: '🛵', name: 'Motos' },
      motocarros: { emoji: '', name: 'Motocarros' },
      especial: {
        emoji: '🚐',
        name: 'Servicio de Transporte Especial',
      },
      ambiental: { emoji: '🌻', name: 'Ambiental' },
      carga: { emoji: '🚛', name: 'Transporte de carga' },
    }
  }
}
