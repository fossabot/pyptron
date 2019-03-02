const info = require('./info')

module.exports = {
  info,
  name: 'Transporte de Carga',
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction() {
    return '0-1-2-3-4-5-6-7-8-9'
  },
}
