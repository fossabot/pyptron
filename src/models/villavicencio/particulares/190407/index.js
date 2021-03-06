const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['6:30', '19:30']], days: [] }],
  maps: [{ name: 'Mapa pico y placa Villavicencio', url: 'cdn:jpg' }],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2017-08-01'
    const pypNums = [
      [9, 0],
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'years',
      reverse: true,
    })
  },
})
