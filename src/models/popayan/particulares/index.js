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

module.exports = {
  name: 'Particulares',
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
      const semester = newISODate(date).getMonth() < 6 ? 0 : 1
      const pyp = [
        [
          '3-4', // lunes
          '5-6', // martes
          '7-8', // miércoles
          '9-0', // jueves
          '1-2', // viernes
        ],
        [
          '1-2', // lunes
          '3-4', // martes
          '5-6', // miércoles
          '7-8', // jueves
          '9-0', // viernes
        ],
      ]
      return pyp[semester][newISODate(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
