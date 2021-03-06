const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['05:00', '22:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos de Transporte de Servicio Público Colectivo'],
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2018-01-01'
    const pypNums = [
      [6, 7],
      [8, 9],
      [0, 1],
      [2, 3],
      [4, 5],
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
