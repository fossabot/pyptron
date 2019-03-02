const { newISODate } = require('../../../helpers/dateHelpers')
const { datesDiff } = require('../../../helpers/dateHelpers')
const { normalizeArrayIndex } = require('../../../helpers/arrayHelpers')
const info = require('./info')

module.exports = {
  name: 'Particulares',
  info,
  excludedDays: [0],
  skipHolidays: true,
  pypFunction(date) {
    // const startDate = '2018-02-05'
    const dow = newISODate(date).getDay()
    if (dow === 6) {
      const weeksLapse = datesDiff({
        startDate: '2019-02-23',
        endDate: date,
        period: 'weeks',
      })
      const weekendsNums = ['1-3-5-7-9', '0-2-4-6-8']
      const index = normalizeArrayIndex(weeksLapse, weekendsNums.length)
      return weekendsNums[index]
    }
    const pypNums = [
      '6-7-8-9-0-1', // '4-5-6-7', // lunes
      '0-1-2-3-4-5', // '8-9-0-1', // martes
      '4-5-6-7-8-9', // '2-3-4-5', // miércoles
      '8-9-0-1-2-3', // '6-7-8-9', // jueves
      '2-3-4-5-6-7', // '0-1-2-3', // viernes
    ]
    return pypNums[dow - 1]
    // const lapse = pypFuncs.monthsDiff(startDate, date, 6)
    // const newPypNums = pypFuncs.moveArrayElementsToTheRight(pypNums, lapse)
    // return newPypNums[newISODate(date).getDay() - 1]
  },
}
