const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['06:00', '05:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis.',
  ],
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2018-01-01'
    const pypNums = [
      [7, 8],
      [9, 0],
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'days',
      daysOfWeekToSkip: [],
    })
  },
})
