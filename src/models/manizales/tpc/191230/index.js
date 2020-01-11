const PypData = require('../../../../classes/pyp-data')
const pyp191224 = require('../190407')
const { datesDiff } = require('../../../../helpers/date-helpers')
const { normalizeArrayIndex } = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  ...pyp191224,
  startDate: '2019-12-30',
  pypFunction(date) {
    const { startDate } = this
    const pypNums = [
      ['A'],
      ['B'],
      ['C'],
      ['D'],
      ['E'],
      ['F'],
      ['G'],
      ['H'],
      ['I'],
      ['J'],
    ]
    const daysLapse =
      datesDiff({
        startDate,
        endDate: date,
        period: 'days',
        daysOfWeekToSkip: [0],
        skipHolidays: true,
      }) - 1
    const index = normalizeArrayIndex(daysLapse, pypNums.length)
    return pypNums[index]
  },
})
