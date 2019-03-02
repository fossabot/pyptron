const medellinTaxis = require('../../medellin/taxis')
const info = require('./info')

module.exports = {
  skipHolidays: medellinTaxis.skipHolidays,
  excludedDays: medellinTaxis.excludedDays,
  name: medellinTaxis.name,
  info,
  pypFunction: medellinTaxis.pypFunction,
}
