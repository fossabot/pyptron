const pypFuncs = require('../../../helpers/globalHelpers')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')
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
      const startDate = '2017-08-01'
      const startNums = '9-0'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return getArrayElementAfterRotating({
        date,
        startDate,
        initialElementOfArray: startNums,
        array: pypNums,
        period: 'years',
        reverse: true,
      })
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
