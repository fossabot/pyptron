const pypFuncs = require('../../../utils/funcs')
const { rotateByDay } = require('../../../helpers/arrayHelpers')
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
      const startDate = '2018-01-01'
      const startNums = '7-8'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return rotateByDay(date, startDate, startNums, pypNums, [])
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
