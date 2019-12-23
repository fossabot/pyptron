const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    return getArrayElementAfterRotating({
      date,
      startDate: '2019-03-01',
      array: [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9, 0],
      ],
      period: 'months',
      reverse: true,
    })
  },
})
