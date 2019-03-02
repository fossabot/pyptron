const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  info,
  name: 'Taxis',
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    const dateObject = newISODate(date)
    const datesDate = dateObject.getDate()
    if (datesDate === 31) {
      return 'NA'
    }
    return (datesDate % 10).toString(10)
  },
}
