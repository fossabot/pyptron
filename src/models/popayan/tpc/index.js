const pypFuncs = require('../../../helpers/globalHelpers')
const { daysDiff } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Transporte Público de Carga',
  info,
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2018-01-04'
      const specialDates = ['2018-01-05', '2018-04-12', '2018-04-13']
      const daysLapse = daysDiff(startDate, date, {
        skip: [0, 6],
        skipHolidays: true,
        specialDates,
      })
      return String(daysLapse % 10)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
