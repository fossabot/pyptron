const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')
const info = require('./info')

module.exports = {
  name: 'Taxis',
  info,
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2018-01-01'
    const pypNums = ['7-8', '9-0', '1-2', '3-4', '5-6']
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'days',
      daysOfWeekToSkip: [],
    })
  },
}
