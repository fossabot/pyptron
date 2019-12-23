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
        ['6:00', '9:00'],
        ['11:30', '14:30'],
        ['17:00', '19:30'],
      ],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos particulares y oficiales'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      [0, 1], // lunes
      [2, 3], // martes
      [4, 5], // miércoles
      [6, 7], // jueves
      [8, 9], // iernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
