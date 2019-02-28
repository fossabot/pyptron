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
  name: 'Motos',
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
      const startDate = '2018-01-01'
      const pypNums = ['8-9', '0-1', '2-3', '4-5', '6-7']
      return rotateByWeek({
        date,
        startDate,
        array: pypNums,
        reverse: true,
      })
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
