const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')
const { getNthDayOfMonth } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['5:00', '23:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos tipo motocicleta de cualquier modalidad y cilindraje, incluyendo cuatrimotos, tricimotos, motocarros y bicicletas con pedalea asistido con motor.',
  ],
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    const dateObject = newISODate(date)
    if (dateObject.getDay() === 5) {
      const year = dateObject.getFullYear()
      const month = dateObject.getMonth()
      const secondFriday = getNthDayOfMonth({
        year,
        month,
        dayOfWeek: 5,
        index: 1,
      })
      if (
        dateObject.setHours(0, 0, 0, 0) === secondFriday.setHours(0, 0, 0, 0)
      ) {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
      const lastFriday = getNthDayOfMonth({
        year,
        month,
        dayOfWeek: 5,
        index: -1,
      })
      if (dateObject.setHours(0, 0, 0, 0) === lastFriday.setHours(0, 0, 0, 0)) {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    }
    const pyp = [
      [1, 3, 5, 7, 9],
      [0, 2, 4, 6, 8],
    ]
    return pyp[newISODate(date).getDate() % 2]
  },
})
