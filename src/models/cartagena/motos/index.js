const pypFuncs = require('../../../helpers/globalHelpers')
const { newISODate } = require('../../../helpers/dateHelpers')
const { getNthDayOfMonth } = require('../../../helpers/dateHelpers')
const days = require('./info/days')
const decrees = require('./info/decrees')
const exceptions = require('./info/exceptions')
const hours = require('./info/hours')
const maps = require('./info/maps')
const observations = require('./info/observations')
const scheme = require('./info/scheme')
const vehicleClasses = require('./info/vehicleClasses')

module.exports = {
  name: 'Motos',
  info: {
    days,
    decrees,
    exceptions,
    hours,
    maps,
    observations,
    scheme,
    vehicleClasses,
  },
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const dateObject = newISODate(date)
      if (dateObject.getDay() === 5) {
        const year = dateObject.getFullYear()
        const month = dateObject.getMonth()
        const secondFriday = getNthDayOfMonth(year, month, 5, 1)
        if (
          dateObject.setHours(0, 0, 0, 0) === secondFriday.setHours(0, 0, 0, 0)
        ) {
          return '0-1-2-3-4-5-6-7-8-9'
        }
        const lastFriday = getNthDayOfMonth(year, month, 5, -1)
        if (
          dateObject.setHours(0, 0, 0, 0) === lastFriday.setHours(0, 0, 0, 0)
        ) {
          return '0-1-2-3-4-5-6-7-8-9'
        }
      }
      const pyp = ['1-3-5-7-9', '0-2-4-6-8']
      return pyp[newISODate(date).getDate() % 2]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
