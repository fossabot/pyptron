const info = require('./info')

module.exports = {
  name: 'Motos',
  info,
  excludedDays: [],
  skipHolidays: true,
  pypFunction() {
    return 'NA'
  },
}
