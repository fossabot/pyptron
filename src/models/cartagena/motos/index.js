const pypFuncs = require('../../../helpers/globalHelpers')
const { newISODate } = require('../../../helpers/dateHelpers')
const { getNthDayOfMonth } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Motos',
  info,
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const dateObject = newISODate(date)
      if (dateObject.getDay() === 5) {
        const year = dateObject.getFullYear()
        const month = dateObject.getMonth()
        const secondFriday = getNthDayOfMonth(year, month, 5, 1)
        if (
          dateObject.setHours(0, 0, 0, 0) === secondFriday.setHours(0, 0, 0, 0)
        ) {
          return '0-1-2-3-4-5-6-7-8-9'
        }
        const lastFriday = getNthDayOfMonth(year, month, 5, -1)
        if (
          dateObject.setHours(0, 0, 0, 0) === lastFriday.setHours(0, 0, 0, 0)
        ) {
          return '0-1-2-3-4-5-6-7-8-9'
        }
      }
      const pyp = ['1-3-5-7-9', '0-2-4-6-8']
      return pyp[newISODate(date).getDate() % 2]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
