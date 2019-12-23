const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [{ name: 'mapa pico y placa Tunja', url: 'cdn:jpg' }],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      [3, 4], // lunes
      [5, 6], // martes
      [7, 8], // miércoles
      [9, 0], // jueves
      [1, 2], // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
