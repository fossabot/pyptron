const pypFuncs = require('../../../utils/funcs')
const days = require('./info/days')
const decrees = require('./info/decrees')
const exceptions = require('./info/exceptions')
const hours = require('./info/hours')
const maps = require('./info/maps')
const observations = require('./info/observations')
const scheme = require('./info/scheme')
const vehicleClasses = require('./info/vehicleClasses')

module.exports = {
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
  name: 'Motos',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: false,
    }
    const pypFunction = () => {
      if (new Date(date).getDate() === 30) {
        return '0-1-2-3-4-5-6-7-8-9'
      }
      const pyp = [
        '1-2', // lunes
        '3-4', // martes
        '5-6', // miércoles
        '7-8', // jueves
        '9-0', // viernes
      ]
      return pyp[new Date(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
