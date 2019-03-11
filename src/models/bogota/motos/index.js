const info = require('./info')

module.exports = {
  info,
  excludedDays: [],
  skipHolidays: true,
  pypFunction() {
    return 'NA'
  },
}
