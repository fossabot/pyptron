const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')
const { formatDate } = require('../../../../helpers/date-helpers')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [
    { name: 'Decreto 1361 del 29 de noviembre de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 1550 del 30 de noviembre de 2017', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [
    { comment: '', hours: [['7:00', '10:00'], ['17:00', '20:00']], days: [] },
  ],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const dateObject = newISODate(date)
    switch (formatDate(dateObject)) {
      case '2018-03-02':
        return [9, 0]
      default:
        break
    }
    const startDate = '2017-12-02'
    const pypNums = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 0]]
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'months',
      reverse: true,
      interval: 3,
    })
  },
})
