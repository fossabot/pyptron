const pypFuncs = require('../../../helpers/globalHelpers')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')
const info = require('./info')

module.exports = {
  name: 'Taxis',
  info,
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2017-12-11'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return getArrayElementAfterRotating({
        date,
        startDate,
        period: 'weeks',
        array: pypNums,
        reverse: true,
      })
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
