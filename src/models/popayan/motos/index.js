const info = require('./info')

module.exports = {
  info,
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction() {
    return 'NA'
  },
}
