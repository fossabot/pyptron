const pypFuncs = require('../../../helpers/globalHelpers')
const { newISODate } = require('../../../helpers/dateHelpers')
const days = require('./info/days')
const decrees = require('./info/decrees')
const exceptions = require('./info/exceptions')
const hours = require('./info/hours')
const maps = require('./info/maps')
const observations = require('./info/observations')
const scheme = require('./info/scheme')
const vehicleClasses = require('./info/vehicleClasses')
const { formatDate } = require('../../../helpers/dateHelpers')

module.exports = {
  name: 'Motocarros',
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
      const pyp = ['0-2-4-6-8- naranja', '1-3-5-7-9- azul']
      switch (formatDate(date).substring(5, 10)) {
        case '01-31':
          return '0-2-4-6-8- naranja'
        case '03-31':
          return '1-3-5-7-9- azul'
        case '07-31':
          return '0-2-4-6-8- naranja'
        case '08-31':
          return '1-3-5-7-9- azul'
        case '10-31':
          return '0-2-4-6-8- naranja'
        case '12-31':
          return '1-3-5-7-9- azul'
        default:
          return pyp[newISODate(date).getDate() % 2]
      }
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
