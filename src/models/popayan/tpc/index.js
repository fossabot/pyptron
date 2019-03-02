const { datesDiff } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Transporte Público de Carga',
  info,
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2018-01-04'
    const daysLapse = datesDiff({
      startDate,
      endDate: date,
      period: 'days',
      daysOfWeekToSkip: this.excludedDays,
      skipHolidays: this.skipHolidays,
      specialDatesToSkip: ['2018-01-05', '2018-04-12', '2018-04-13'],
    })
    return String(daysLapse % 10)
  },
}
