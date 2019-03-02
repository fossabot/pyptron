const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Particulares',
  info,
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = ['0-2-4-6-8', '1-3-5-7-9']
    return pyp[newISODate(date).getDate() % 2]
  },
}
