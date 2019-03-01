const pypFuncs = require('../../../helpers/globalHelpers')
const { formatDate } = require('../../../helpers/dateHelpers')
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
    const dateObject = new Date(date)
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      switch (formatDate(dateObject)) {
        case '2018-03-02':
          return '9-0'
        default:
          break
      }
      const startDate = '2017-12-02'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return getArrayElementAfterRotating({
        date,
        startDate,
        array: pypNums,
        period: 'months',
        reverse: true,
        interval: 3,
      })
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
