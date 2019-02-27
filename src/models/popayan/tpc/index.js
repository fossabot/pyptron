const pypFuncs = require('../../../helpers/globalHelpers')
const { daysDiff } = require('../../../helpers/dateHelpers')
const days = require('./info/days')
const decrees = require('./info/decrees')
const exceptions = require('./info/exceptions')
const hours = require('./info/hours')
const maps = require('./info/maps')
const observations = require('./info/observations')
const scheme = require('./info/scheme')
const vehicleClasses = require('./info/vehicleClasses')

module.exports = {
  name: 'Transporte Público de Carga',
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
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2018-01-04'
      const specialDates = ['2018-01-05', '2018-04-12', '2018-04-13']
      const daysLapse = daysDiff(startDate, date, {
        skip: [0, 6],
        skipHolidays: true,
        specialDates,
      })
      return String(daysLapse % 10)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
