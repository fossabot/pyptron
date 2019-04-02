const { licensePlateScheme } = require('../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')

module.exports = {
  decrees: [
    { name: 'Decreto 222 del 25 de julio de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 245 del 26 de julio de 2017', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['6:30', '19:30']], days: [] }],
  maps: [{ name: 'Mapa pico y placa Villavicencio', url: 'cdn:jpg' }],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2017-08-01'
    const pypNums = [[9, 0], [1, 2], [3, 4], [5, 6], [7, 8]]
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'years',
      reverse: true,
    })
  },
}
