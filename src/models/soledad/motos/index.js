const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  info,
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    if (newISODate(date).getDate() === 30) {
      return '0-1-2-3-4-5-6-7-8-9'
    }
    const pyp = [
      '1-3', // lunes
      '2-4', // martes
      '5-7', // miércoles
      '6-8', // jueves
      '9-0', // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
}
