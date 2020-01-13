const PypData = require('../../../../classes/pyp-data')
const exceptions = require('../../particulares/200114/exceptions.md')
const observations = require('../../particulares/200114/observations.md')
const { datesDiff, formatDate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2020-01-01',
  exceptions,
  observations,
  hours: [
    {
      comment: '',
      hours: [['7:00', '20:00']],
      days: [],
    },
  ],
  maps: [],
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos automotores de Transporte Público vinculados a las modalidades de servicio de carga con capacidad menor a uno y medio (1.5) toneladas',
  ],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2020-01-14'
    if (formatDate(date) < startDate) {
      return []
    }
    return [
      datesDiff({
        startDate,
        endDate: date,
        period: 'days',
        skipHolidays: true,
        daysOfWeekToSkip: [0, 6],
      }) % 10,
    ]
  },
})
