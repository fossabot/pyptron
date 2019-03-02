const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')
const info = require('./info')

module.exports = {
  info,
  name: 'Motos',
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2017-08-01'
    const pypNums = ['9-0', '1-2', '3-4', '5-6', '7-8']
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'years',
      reverse: true,
    })
  },
}
