const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const zones = require('./zones.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['5:00', '22:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos tipo motocicletas'],
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    if (newISODate(date).getDate() === 30) {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    const pyp = [
      [1, 3],
      [2, 4],
      [5, 7],
      [6, 8],
      [9, 0],
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
  zones,
})
