const pypFuncs = require('../../../utils/funcs')
const { formatDate, getNthDayOfMonth } = require('../../../utils/dateHelpers')
const days = require('./info/days')
const decrees = require('./info/decrees')
const exceptions = require('./info/exceptions')
const hours = require('./info/hours')
const maps = require('./info/maps')
const observations = require('./info/observations')
const scheme = require('./info/scheme')
const vehicleClasses = require('./info/vehicleClasses')

module.exports = {
  name: 'Taxis',
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
      excludedDays: [],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const dateObject = new Date(date)
      const datesDate = dateObject.getDate()
      if (datesDate === 31) {
        return 'NA'
      }
      if (dateObject.getDay() === 5) {
        const year = dateObject.getFullYear()
        const month = dateObject.getMonth()
        const secondFriday = getNthDayOfMonth(year, month, 5, 1)
        if (
          formatDate(dateObject, 'YYMMDD') ===
          formatDate(secondFriday, 'YYMMDD')
        ) {
          return 'NA'
        }
        const lastFriday = getNthDayOfMonth(year, month, 5, -1)
        if (
          formatDate(dateObject, 'YYMMDD') === formatDate(lastFriday, 'YYMMDD')
        ) {
          return 'NA'
        }
      }
      return (datesDate % 10).toString(10)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
