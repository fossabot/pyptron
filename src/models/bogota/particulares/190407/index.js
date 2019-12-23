const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [
    {
      comment: '',
      hours: [
        ['6:00', '8:30'],
        ['15:00', '19:30'],
      ],
      days: [1, 2, 3, 4, 5],
    },
  ],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const dateObject = newISODate(date)
    const pyp = [
      [0, 2, 4, 6, 8],
      [1, 3, 5, 7, 9],
    ]
    return pyp[dateObject.getDate() % 2]
  },
})
