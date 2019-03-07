const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Particulares',
  info,
  excludedDays: [],
  skipHolidays: true,
  pypFunction(date) {
    const dateObject = newISODate(date)
    const dayOfWeek = dateObject.getDay()

    if (dayOfWeek === 6) {
      return '1-3-5-7-9'
    }

    if (dayOfWeek === 0) {
      return '0-2-4-6-8'
    }

    const pyp = ['0-2-4-6-8', '1-3-5-7-9']
    return pyp[dateObject.getDate() % 2]
  },
}
