const pypFuncs = require('../../../utils/funcs')
const days = require('./info/days')
const decrees = require('./info/decrees')
const exceptions = require('./info/exceptions')
const hours = require('./info/hours')
const maps = require('./info/maps')
const observations = require('./info/observations')
const scheme = require('./info/scheme')
const vehicleClasses = require('./info/vehicleClasses')
const { formatDate } = require('../../../utils/dateHelpers')

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
      switch (formatDate(date, 'MMDD')) {
        case '0131':
          return '0-2-4-6-8- naranja'
        case '0331':
          return '1-3-5-7-9- azul'
        case '0731':
          return '0-2-4-6-8- naranja'
        case '0831':
          return '1-3-5-7-9- azul'
        case '1031':
          return '0-2-4-6-8- naranja'
        case '1231':
          return '1-3-5-7-9- azul'
        default:
          return pyp[new Date(date).getDate() % 2]
      }
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
