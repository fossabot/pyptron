const PypData = require('../../../../classes/pyp-data')
const { licensePlateScheme } = require('../../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  moveArrayElementsToTheRight,
} = require('../../../../helpers/array-helpers')
const { datesDiff, newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [
    {
      name: 'Decreto 0116 de 2018',
      url:
        'https://www.medellin.gov.co/movilidad/jdownloads/Normas/Normatividad/Decretos%20Municipales/2018/decreto_0116_de_2018.pdf',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '20:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
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
    let pypNums = [[[5], [0]], [[6], [1]], [[7], [2]], [[3], [8]], [[4], [9]]]
    if (dateObject >= newISODate('2018-05-07')) {
      pypNums[2] = [[2], [7]]
      pypNums[3] = [[8], [3]]
    }
    if (dateObject >= newISODate('2019-01-08')) {
      pypNums[0] = [[0], [5]]
      pypNums[4] = [[9], [4]]
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
