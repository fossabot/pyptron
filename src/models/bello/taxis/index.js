const medellinTaxis = require('../../medellin/taxis')
const info = require('./info')

module.exports = {
  info,
  skipHolidays: medellinTaxis.skipHolidays,
  excludedDays: medellinTaxis.excludedDays,
  name: medellinTaxis.name,
  pypFunction: medellinTaxis.pypFunction,
}
