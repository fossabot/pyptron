const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const { newISODate, datesDiff } = require('../../../../helpers/date-helpers')
const { normalizeArrayIndex } = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2019-09-30',
  excludedDays: [0],
  pypFunction(date) {
    const dateObject = newISODate(date)
    const dow = dateObject.getDay()
    if (dow === 6) {
      const weeksLapse = datesDiff({
        startDate: '2019-09-30',
        endDate: date,
        period: 'weeks',
      })
      const weekendsNums = [[0, 2, 4, 6, 8], [1, 3, 5, 7, 9]]
      const index = normalizeArrayIndex(weeksLapse, weekendsNums.length)
      return weekendsNums[index]
    }
    const pyp = [
      [2, 3], // lunes
      [4, 5], // martes
      [6, 7], // miércoles
      [8, 9], // jueves
      [0, 1], // viernes
    ]
    return pyp[dow - 1]
  },
})
