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
    .reduce((result, elem) => {
      const elemName = object[elem].name
      const elemSlug = slugify(elemName, { lower: true })
      /* eslint-disable no-param-reassign */
      result[elemSlug] = {
        name: elemName,
        key: elem,
      }
      if (object[elem].categories) {
        result[elemSlug].categories = generateMap(object[elem].categories, true)
      }
      if (emoji) {
        result[elemSlug].emoji = getCategoryEmoji(elem)
      }
      return result
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
