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
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2015-06-01'
      const startNums = '3-4'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return pypFuncs.rotateByMonth(date, startDate, startNums, pypNums)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
