const pypFuncs = require('../../../helpers/globalHelpers')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')
const info = require('./info')

module.exports = {
  name: 'Particulares',
  info,
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2017-01-01'
      const pypNums = ['7-8', '9-0', '1-2', '3-4', '5-6']
      return getArrayElementAfterRotating({
        date,
        startDate,
        array: pypNums,
        period: 'months',
        interval: 6,
      })
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
