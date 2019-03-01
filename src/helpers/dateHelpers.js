const { getHoliday } = require('pascua')

module.exports = {
  formatDate,
  generateISOString,
  newISODate,
  getWeek,
  getNthDayOfMonth,
  datesDiff,
}

function formatDate(date) {
  const dateObject = newISODate(date)
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()
  const paddedDay = day < 10 ? `0${day}` : day
  const paddedMonth = month < 10 ? `0${month}` : month
  return `${year}-${paddedMonth}-${paddedDay}`
}

function newISODate(date, timeOffset = '-05:00') {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    // Devolvemos una copia del objecto para no modificar el original
    return new Date(date)
  }
  return new Date(generateISOString(date, timeOffset))
}

function generateISOString(date, timeOffset = '-05:00') {
  return date.length === 10 ? `${date}T00:00:00.000${timeOffset}` : date
}

function getWeek(date) {
  const millisecondsInADay = 1000 * 60 * 60 * 24
  const daysInAWeek = 7
  const currentDate = new Date(date)
  const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1)
  const daysPassFirstDayOfYear =
    (currentDate - firstDayOfYear) / millisecondsInADay
  return Math.ceil(
    (daysPassFirstDayOfYear + firstDayOfYear.getDay() + 1) / daysInAWeek
  )
}

function getNthDayOfMonth(year, month, dayOfWeek, index) {
  const backwards = index < 0
  const offset = (index + (backwards ? 1 : 0)) * 7
  const date = new Date(
    year,
    month + (backwards ? 1 : 0),
    (backwards ? 0 : 1) + offset
  )
  while (date.getDay() !== dayOfWeek) {
    date.setDate(date.getDate() + (backwards ? -1 : 1))
  }
  return date
}

function daysDiff(startDate, endDate, options = {}) {
  const {
    skipHolidays = false,
    daysOfWeekToSkip = [],
    specialDatesToSkip = [],
  } = options

  const currentDateObject = newISODate(startDate)
  const endDateObject = newISODate(endDate)

  if (
    daysOfWeekToSkip.length === 0 &&
    !skipHolidays &&
    specialDatesToSkip.length === 0
  ) {
    const millisecondsInADay = 1000 * 60 * 60 * 24
    return (
      Math.floor((endDateObject - currentDateObject) / millisecondsInADay) + 1
    )
  }

  let daysLapse = 0

  while (currentDateObject <= endDateObject) {
    if (specialDatesToSkip.includes(formatDate(currentDateObject))) {
      currentDateObject.setDate(currentDateObject.getDate() + 1)
      continue // eslint-disable-line no-continue
    }

    if (skipHolidays) {
      if (getHoliday(currentDateObject)) {
        currentDateObject.setDate(currentDateObject.getDate() + 1)
        continue // eslint-disable-line no-continue
      }
    }

    if (daysOfWeekToSkip.includes(currentDateObject.getDay())) {
      currentDateObject.setDate(currentDateObject.getDate() + 1)

      continue // eslint-disable-line no-continue
    }
    daysLapse += 1
    currentDateObject.setDate(currentDateObject.getDate() + 1)
  }

  return daysLapse
}

function weeksDiff(startDate, endDate, interval = 1) {
  const daysLapse = daysDiff(startDate, endDate)
  return Math.floor(daysLapse / 7 / interval)
}

function monthsDiff(startDate, endDate, interval = 1) {
  const d1 = newISODate(startDate)
  const d2 = newISODate(endDate)
  let monthsLapse =
    d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear())
  if (d2.getDate() < d1.getDate()) {
    monthsLapse -= 1
  }
  return Math.floor(monthsLapse / interval)
}

function yearsDiff(startDate, endDate, interval = 1) {
  return Math.floor(monthsDiff(startDate, endDate, 12) / interval)
}

function datesDiff(options) {
  const {
    startDate,
    endDate,
    period,
    interval, // applies only when period is not 'days'
    skipHolidays = false, // applies only when period is 'days'
    daysOfWeekToSkip = [], // applies only when period is 'days'
    specialDatesToSkip = [], // applies only when period is 'days'
  } = options
  switch (period) {
    case 'days':
      return daysDiff(startDate, endDate, {
        skipHolidays,
        daysOfWeekToSkip,
        specialDatesToSkip,
      })
    case 'weeks':
      return weeksDiff(startDate, endDate, interval)
    case 'months':
      return monthsDiff(startDate, endDate, interval)
    case 'years':
      return yearsDiff(startDate, endDate, interval)
    default:
      break
  }
  return undefined
}
