const { newISODate } = require('../../../helpers/dateHelpers')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')
const info = require('./info')

module.exports = {
  info,
  excludedDays: [0],
  skipHolidays: true,
  pypFunction(date) {
    if (newISODate(date).getDay() === 6) {
      const pypNums = ['3-4', '5-6', '7-8', '9-0', '1-2']
      const startDate = '2018-01-06'
      return getArrayElementAfterRotating({
        date,
        startDate,
        array: pypNums,
        period: 'weeks',
        reverse: true,
      })
    }
    const pypNums = ['3-4', '5-6', '7-8', '9-0', '1-2']
    const startDate = '2018-01-01'
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'months',
      reverse: true,
      interval: 3,
    })
  },
}
