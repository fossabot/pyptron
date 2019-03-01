const pypFuncs = require('../../../helpers/globalHelpers')
const { moveArrayElementsToTheRight } = require('../../../helpers/arrayHelpers')
const { datesDiff, newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Taxis',
  info,
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const dateObject = newISODate(date)
      const startDate = newISODate('2018-01-01')
      const millisecondsPerDay = 1000 * 60 * 60 * 24
      const millisecondsDiff = dateObject - startDate
      const daysDiff = millisecondsDiff / millisecondsPerDay
      const weeksOffset = Math.ceil((daysDiff + 1) / 7)
      let pypNums = [['5', '0'], ['6', '1'], ['7', '2'], ['3', '8'], ['4', '9']]
      if (dateObject >= newISODate('2018-05-07')) {
        pypNums[2] = ['2', '7']
        pypNums[3] = ['8', '3']
      }
      if (dateObject >= newISODate('2019-01-08')) {
        pypNums[0] = ['0', '5']
        pypNums[4] = ['9', '4']
      }
      const monthsDiffAccu = datesDiff({
        startDate,
        endDate: date,
        period: 'months',
      })
      const datesWeekDay = dateObject.getDay()
      const datesDate = dateObject.getDate()
      const weekOfMonth = Math.floor((datesDate - datesWeekDay) / 7)
      const offset = monthsDiffAccu - (weekOfMonth < 0 ? 1 : 0)
      pypNums = moveArrayElementsToTheRight(pypNums, offset < 0 ? 0 : offset)

      return pypNums[datesWeekDay - 1][(weeksOffset + 1) % 2]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
