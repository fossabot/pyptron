const PypData = require('../../../../classes/pyp-data')
const { licensePlateScheme } = require('../../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [{ name: '', url: '' }],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Motocicletas'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      [1, 2, 3, 4], // lunes
      [5, 6, 7, 8], // martes
      [9, 0, 1, 2], // miércoles
      [3, 4, 5, 6], // jueves
      [7, 8, 9, 0], // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
