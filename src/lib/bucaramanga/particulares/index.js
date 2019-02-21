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
      excludedDays: [0],
      skipHolidays: true,
    }
    const pypFunction = () => {
      if (new Date(date).getDay() === 6) {
        const startNums = '3-4'
        const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
        const startDate = '2018-01-06'
        return pypFuncs.rotateByWeek(date, startDate, startNums, pypNums, true)
      }
      const startNums = '3-4'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      const startDate = '2018-01-01'
      return pypFuncs.rotateByMonth(
        date,
        startDate,
        startNums,
        pypNums,
        true,
        3
      )
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
