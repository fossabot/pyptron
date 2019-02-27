const pypFuncs = require('../../../helpers/globalHelpers')
const { rotateByWeek } = require('../../../helpers/arrayHelpers')
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
  name: 'Particulares',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2018-01-01'
      const startNums = '8-9'
      const pypNums = ['0-1', '2-3', '4-5', '6-7', '8-9']
      return rotateByWeek(date, startDate, startNums, pypNums, true)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
