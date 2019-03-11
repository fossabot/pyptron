const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  info,
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      '3-4', // lunes
      '5-6', // martes
      '7-8', // miércoles
      '9-0', // jueves
      '1-2', // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
}
