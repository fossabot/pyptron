const pypFuncs = require('../../../utils/funcs')
const { monthsDiff } = require('../../../helpers/dateHelpers')
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
      const startDate = '2017-01-01'
      const pypNums = ['7-8', '9-0', '1-2', '3-4', '5-6']
      const lapse = monthsDiff(startDate, date, 6)
      const newPypNums = pypFuncs.arrRotate(pypNums, lapse)
      return newPypNums[new Date(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
