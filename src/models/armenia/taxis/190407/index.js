const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['7:30', '19:30']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.firstNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2017-12-11'
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
