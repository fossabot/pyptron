const slugify = require('slugify')
const { getHoliday } = require('pascua')
const { datesDiff } = require('./dateHelpers')

module.exports = {
  pypWrapper,
  generateMap,
  getCategoryMetainfo,
}

function pypWrapper(date, pypFunction, options) {
  const { excludedDays = [], skipHolidays = true } = options
  const startDate = '2018-01-01'
  if (
    datesDiff({
      startDate,
      endDate: date,
      period: 'days',
    }) <= 0
  ) {
    throw new Error('Date out of range')
  }

  if (
    datesDiff({
      startDate: new Date(),
      endDate: date,
      period: 'months',
    }) >= 12
  ) {
    throw new Error('Date out of range')
  }

  if (excludeDays(date, excludedDays, skipHolidays)) {
    return []
  }

  return pypFunction(date)
}

function excludeDays(date, days, holidays = true) {
  const dateObject = new Date(date)

  return (
    days.includes(dateObject.getDay()) || (holidays && getHoliday(dateObject))
  )
}

function generateMap(object) {
  return Object.keys(object)
    .sort()
    .reduce((map, key) => {
      if (object[key].categories) {
        const { name } = object[key]
        const slug = slugify(name, { lower: true })
        // eslint-disable-next-line no-param-reassign
        map[slug] = {
          key,
          name,
          categories: generateMap(object[key].categories),
        }
        return map
      }
      const { name, emoji } = getCategoryMetainfo(key)
      const slug = slugify(name, { lower: true })
      // eslint-disable-next-line no-param-reassign
      map[slug] = {
        key,
        name,
        emoji,
      }
      return map
    }, {})
}

function getCategoryMetainfo(category) {
  const metainfo = {
    taxis: { emoji: '🚕', name: 'Taxis' },
    particulares: { emoji: '🚗', name: 'Particulares' },
    tpc: { emoji: '🚌', name: 'Transporte Público Colectivo' },
    motos: { emoji: '🛵', name: 'Motos' },
    motocarros: { emoji: '', name: 'Motocarros' },
    especial: { emoji: '🚐', name: 'Servicio de Transporte Especial' },
    ambiental: { emoji: '🌻', name: 'Ambiental' },
    carga: { emoji: '🚛', name: 'Transporte de carga' },
  }
  return metainfo[category] || ''
}
