const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [
    {
      comment: '',
      hours: [
        ['6:00', '8:00'],
        ['17:00', '19:30'],
      ],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos automotores con capacidad de carga de treinta (30) toneladas o superior',
  ],
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
})
