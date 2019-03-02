const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')
const info = require('./info')

module.exports = {
  name: 'Ambiental',
  info,
  excludedDays: [0],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2018-01-01'
    const pypNums = ['9', '8', '0', '1', '2', '3', '4', '5', '6', '7']
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'days',
    })
  },
}
