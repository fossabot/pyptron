const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Particulares',
  info,
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      '8-9', // lunes
      '0-1', // martes
      '2-3', // miércoles
      '4-5', // jueves
      '6-7', // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
}
