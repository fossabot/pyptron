const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [
    {
      comment: '',
      hours: [
        ['6:00', '10:00'],
        ['16:00', '20:00'],
      ],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos automotores de servicio particular.'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2018-01-01'
    const pypNums = [
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 0],
      [1, 2],
    ]
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'months',
      interval: 6,
    })
  },
})
