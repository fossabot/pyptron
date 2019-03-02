const medellinParticulares = require('../../medellin/particulares')
const info = require('./info')

module.exports = {
  skipHolidays: medellinParticulares.skipHolidays,
  excludedDays: medellinParticulares.excludedDays,
  name: medellinParticulares.name,
  info,
  pypFunction: medellinParticulares.pypFunction,
}
