const pypFuncs = require('../../../helpers/globalHelpers')
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
  name: 'Ambiental',
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
      const startDate = '2018-01-01'
      const pypNums = ['9', '8', '0', '1', '2', '3', '4', '5', '6', '7']
      return rotateByDay({
        date,
        startDate,
        array: pypNums,
      })
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
