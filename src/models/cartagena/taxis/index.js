const { newISODate } = require('../../../helpers/dateHelpers')
const { getNthDayOfMonth } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Taxis',
  info,
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const dateObject = newISODate(date)
    const datesDate = dateObject.getDate()
    if (datesDate === 31) {
      return 'NA'
    }
    if (dateObject.getDay() === 5) {
      const year = dateObject.getFullYear()
      const month = dateObject.getMonth()
      const secondFriday = getNthDayOfMonth(year, month, 5, 1)
      if (
        dateObject.setHours(0, 0, 0, 0) === secondFriday.setHours(0, 0, 0, 0)
      ) {
        return 'NA'
      }
      const lastFriday = getNthDayOfMonth(year, month, 5, -1)
      if (dateObject.setHours(0, 0, 0, 0) === lastFriday.setHours(0, 0, 0, 0)) {
        return 'NA'
      }
    }
    return (datesDate % 10).toString(10)
  },
}
