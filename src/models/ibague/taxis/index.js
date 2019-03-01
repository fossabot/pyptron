const { datesDiff } = require('../../../helpers/dateHelpers')
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
      return String(
        (datesDiff({ startDate, endDate: date, period: 'days' }) + 1) % 10
      )
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
