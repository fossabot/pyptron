const pypFuncs = require('../../../helpers/globalHelpers')
const info = require('./info')

module.exports = {
  info,
  name: 'Transporte de Carga',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: false,
    }
    const pypFunction = () => '0-1-2-3-4-5-6-7-8-9'
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
