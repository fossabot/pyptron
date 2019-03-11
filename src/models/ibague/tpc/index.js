const { datesDiff } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  info,
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2017-12-02'
    const pyp = [
      '1-2', // lunes
      '0-3', // martes
      '4-9', // miércoles
      '5-6', // jueves
      '7-8', // viernes
    ]
    const daysLapse =
      datesDiff({ startDate, endDate: date, period: 'days' }) - 1
    return pyp[daysLapse % pyp.length]
  },
}
