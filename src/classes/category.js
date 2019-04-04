const { getHoliday } = require('pascua')
const { datesDiff, newISODate } = require('../helpers/date-helpers')

module.exports = class Category {
  constructor(options) {
    this.decrees = options.decrees
    this.emoji = options.emoji
    this.exceptions = options.exceptions
    this.excludedDays = options.excludedDays
    this.getPyp = this.getPyp.bind(this)
    this.getPypNums = this.getPypNums.bind(this)
    this.hours = options.hours
    this.key = options.key
    this.maps = options.maps
    this.name = options.name
    this.observations = options.observations
    this.pypFunction = options.pypFunction
    this.scheme = options.scheme
    this.skipHolidays = options.skipHolidays
    this.vehicleClasses = options.vehicleClasses
    this.zones = options.zones
  }

  getPyp(options) {
    const { date, days } = options
    const maxDays = 30
    const currentDate = new Date(date)
    const totalDays = days > maxDays ? maxDays : days

    const pypNumbers = []

    for (let i = 0; i < totalDays; i += 1) {
      pypNumbers.push({
        date: currentDate.toISOString(),
        numbers: this.getPypNums(currentDate),
      })
      currentDate.setDate(currentDate.getDate() + 1)
    }
    return pypNumbers
  }

  getPypNums(date) {
    const dateObject = newISODate(date)
    const startDate = '2018-01-01'
    if (
      datesDiff({
        startDate,
        endDate: dateObject,
        period: 'days',
      }) <= 0
    ) {
      throw new Error('Date out of range')
    }

    if (
      datesDiff({
        startDate: new Date(),
        endDate: dateObject,
        period: 'months',
      }) >= 12
    ) {
      throw new Error('Date out of range')
    }
    if (
      this.excludedDays.includes(dateObject.getDay()) ||
      (this.skipHolidays && getHoliday(dateObject))
    ) {
      return []
    }

    return this.pypFunction(dateObject)
  }

  static getCategoryMetainfo(category) {
    const metainfo = {
      taxis: { key: 'taxis', emoji: '🚕', name: 'Taxis' },
      particulares: { key: 'particulares', emoji: '🚗', name: 'Particulares' },
      tpc: { key: 'tpc', emoji: '🚌', name: 'Transporte Público Colectivo' },
      motos: { key: 'motos', emoji: '🛵', name: 'Motos' },
      motocarros: { key: 'motocarros', emoji: '', name: 'Motocarros' },
      especial: {
        key: 'especial',
        emoji: '🚐',
        name: 'Servicio de Transporte Especial',
      },
      ambiental: { key: 'ambiental', emoji: '🌻', name: 'Ambiental' },
      carga: { key: 'carga', emoji: '🚛', name: 'Transporte de carga' },
    }
    return category ? metainfo[category] : metainfo
  }
}
