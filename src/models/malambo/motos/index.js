const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  info,
  name: 'Motos',
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    if (newISODate(date).getDate() === 30) {
      return '0-1-2-3-4-5-6-7-8-9'
    }
    const pyp = [
      '1-2', // lunes
      '3-4', // martes
      '5-6', // miércoles
      '7-8', // jueves
      '9-0', // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
}
