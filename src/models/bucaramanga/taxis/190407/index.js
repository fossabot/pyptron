const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '21:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos de servicio público individual - taxis'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2018-01-08'
    const pypNums = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 0],
    ]
    return getArrayElementAfterRotating({
      date,
      startDate,
      period: 'weeks',
      array: pypNums,
      reverse: true,
    })
  },
})
