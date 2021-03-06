const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  moveArrayElementsToTheRight,
} = require('../../../../helpers/array-helpers')
const { datesDiff, newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2018-01-01',
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '20:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Transporte público individual - taxis'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const dateObject = newISODate(date)
    const startDate = newISODate('2018-01-01')
    const millisecondsPerDay = 1000 * 60 * 60 * 24
    const millisecondsDiff = dateObject - startDate
    const daysDiff = millisecondsDiff / millisecondsPerDay
    const weeksOffset = Math.ceil((daysDiff + 1) / 7)
    let pypNums = [
      [[5], [0]],
      [[6], [1]],
      [[7], [2]],
      [[3], [8]],
      [[4], [9]],
    ]
    if (dateObject >= newISODate('2018-05-07')) {
      pypNums[2] = [[2], [7]]
      pypNums[3] = [[8], [3]]
    }
    if (dateObject >= newISODate('2019-01-08')) {
      pypNums[0] = [[0], [5]]
      pypNums[4] = [[9], [4]]
    }
    if (dateObject >= newISODate('2019-05-08')) {
      pypNums[2] = [[7], [2]]
    }
    if (dateObject >= newISODate('2020-01-01')) {
      pypNums[4] = [[4], [9]]
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
  },
})
