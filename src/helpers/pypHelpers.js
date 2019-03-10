const slugify = require('slugify')
const { getHoliday } = require('pascua')
const { datesDiff } = require('./dateHelpers')

module.exports = {
  pypWrapper,
  generateMap,
  getCategoryEmoji,
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
    return 'NA'
  }

  return pypFunction(date)
}

function excludeDays(date, days, holidays = true) {
  const dateObject = new Date(date)

  return (
    days.includes(dateObject.getDay()) || (holidays && getHoliday(dateObject))
  )
}

function generateMap(object, emoji = false) {
  return Object.keys(object)
    .sort()
    .reduce((map, key) => {
      const { name } = object[key]
      const slug = slugify(name, { lower: true })
      /* eslint-disable no-param-reassign */
      map[slug] = {
        name,
        key,
      }
      if (object[key].categories) {
        map[slug].categories = generateMap(object[key].categories, true)
      }
      if (emoji) {
        map[slug].emoji = getCategoryEmoji(key)
      }
      return map
    }, {})
}

function getCategoryEmoji(category) {
  const emojis = {
    taxis: '🚕',
    particulares: '🚗',
    tpc: '🚌',
    motos: '🛵',
    especial: '🚐',
    ambiental: '🌻',
    carga: '🚛',
  }
  return emojis[category] || ''
}
