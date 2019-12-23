const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Transporte Público de servicio de carga con capacidad menor a una y media toneladas',
  ],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction() {
    return []
  },
})
