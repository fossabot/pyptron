const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['5:00', '22:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos tipo motocarros y tipo motocicletas'],
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    if (newISODate(date).getDate() === 30) {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    const pyp = [
      [1, 2], // lunes
      [3, 4], // martes
      [5, 6], // miércoles
      [7, 8], // jueves
      [9, 0], // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
