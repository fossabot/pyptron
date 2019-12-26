const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')
const { getWeek } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-01-13',
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '3:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
  excludedDays: [6],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2019-01-13'
    const pypNums = [
      [[9], [1], [3], [5], [7]],
      [[8], [0], [2], [4], [6]],
    ][getWeek(date) % 2]
    return getArrayElementAfterRotating({
      date,
      startDate,
      period: 'weeks',
      array: pypNums,
      reverse: true,
      interval: 2,
    })
  },
})
