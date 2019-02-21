const pypFuncs = require('../../../utils/funcs')
const { daysDiff } = require('../../../utils/dateHelpers')
const days = require('./info/days')
const decrees = require('./info/decrees')
const exceptions = require('./info/exceptions')
const hours = require('./info/hours')
const maps = require('./info/maps')
const observations = require('./info/observations')
const scheme = require('./info/scheme')
const vehicleClasses = require('./info/vehicleClasses')

module.exports = {
  name: 'Transporte Público Colectivo',
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
      const startDate = '2017-12-02'
      const pyp = [
        '1-2', // lunes
        '0-3', // martes
        '4-9', // miércoles
        '5-6', // jueves
        '7-8', // viernes
      ]
      const daysLapse = daysDiff(startDate, date, []) - 1
      return pyp[daysLapse % pyp.length]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
