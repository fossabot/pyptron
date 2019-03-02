const { getHoliday } = require('pascua')
const { datesDiff } = require('./dateHelpers')

module.exports = {
  pypWrapper,
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
