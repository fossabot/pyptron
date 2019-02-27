const { getWeek } = require('../../../helpers/dateHelpers')
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
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const pyp = [
        [
          '0', // lunes
          '9', // martes
          '8', // miércoles
          '7', // jueves
          '6', // viernes
        ],
        [
          '1', // lunes
          '2', // martes
          '3', // miércoles
          '4', // jueves
          '5', // viernes
        ],
      ]
      const week = getWeek(date) % 2
      return pyp[week][new Date(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
