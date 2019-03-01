const { getHoliday } = require('pascua')
const slugify = require('slugify')
const config = require('../config')
const { datesDiff } = require('./dateHelpers')

function createResponse(statusCode, body) {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode,
    body: JSON.stringify(body),
  }
}

function buildAssetPath(city, asset) {
  return `${config.cdn}/${city}/${asset}`
}

function cdnPathMaker(array, cityPath) {
  return array.map(object => {
    const slug = buildAssetPath(cityPath, slugify(object.name, { lower: true }))
    const objectExtension = object.url.split(':')[1]
    // eslint-disable-next-line no-param-reassign
    object.url = object.url.startsWith('cdn:')
      ? `${slug}.${objectExtension}`
      : object.url
    return object
  })
}

function excludeDays(date, days, holidays = true) {
  const dateObject = new Date(date)
  return (
    days.includes(dateObject.getDay()) || (holidays && getHoliday(dateObject))
  )
}

function pyp(date, pypFunction, options) {
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

module.exports = {
  excludeDays,
  pyp,
  buildAssetPath,
  cdnPathMaker,
  createResponse,
}
