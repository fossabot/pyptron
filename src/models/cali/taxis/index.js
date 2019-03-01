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
      excludedDays: [],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const startDate = '2018-01-01'
      const pypNums = ['7-8', '9-0', '1-2', '3-4', '5-6']
      return getArrayElementAfterRotating({
        date,
        startDate,
        array: pypNums,
        period: 'days',
        skip: [],
      })
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
