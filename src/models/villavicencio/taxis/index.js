const pypFuncs = require('../../../helpers/globalHelpers')
const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  info,
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const dateObject = newISODate(date)
      const datesDate = dateObject.getDate()
      if (datesDate === 31) {
        return 'NA'
      }
      return (datesDate % 10).toString(10)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
