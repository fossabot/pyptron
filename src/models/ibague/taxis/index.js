const { datesDiff } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  info,
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2017-12-01'
    return String(
      (datesDiff({ startDate, endDate: date, period: 'days' }) + 1) % 10
    )
  },
}
