const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Motos',
  info,
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
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
