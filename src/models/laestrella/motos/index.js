const medellinMotos = require('../../medellin/motos')
const info = require('./info')

module.exports = {
  skipHolidays: medellinMotos.skipHolidays,
  excludedDays: medellinMotos.excludedDays,
  name: medellinMotos.name,
  info,
  pypFunction: medellinMotos.pypFunction,
}
