const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  info,
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      '6-7', // lunes
      '8-9', // martes
      '0-1', // miércoles
      '2-3', // jueves
      '4-5', // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
}
