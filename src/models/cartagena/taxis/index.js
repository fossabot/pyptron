const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  info,
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    const pypNums = ['3-4', '5-6', '7-8', '9-0', '1-2']
    return pypNums[newISODate(date).getDay() - 1]
  },
}
