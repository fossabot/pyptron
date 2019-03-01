const { daysDiff } = require('../../../helpers/dateHelpers')
const pypFuncs = require('../../../helpers/globalHelpers')
const info = require('./info')

module.exports = {
  name: 'Taxis',
  info,
  pyp(date) {
    const options = {
      excludedDays: [],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const startDate = '2017-12-01'
      return String((daysDiff(startDate, date) + 1) % 10)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
