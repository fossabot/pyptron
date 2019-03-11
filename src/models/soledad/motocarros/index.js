const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')
const { formatDate } = require('../../../helpers/dateHelpers')

module.exports = {
  info,
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const pyp = ['0-2-4-6-8- naranja', '1-3-5-7-9- azul']
    switch (formatDate(date).substring(5, 10)) {
      case '01-31':
        return '0-2-4-6-8- naranja'
      case '03-31':
        return '1-3-5-7-9- azul'
      case '07-31':
        return '0-2-4-6-8- naranja'
      case '08-31':
        return '1-3-5-7-9- azul'
      case '10-31':
        return '0-2-4-6-8- naranja'
      case '12-31':
        return '1-3-5-7-9- azul'
      default:
        return pyp[newISODate(date).getDate() % 2]
    }
  },
}
