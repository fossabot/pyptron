const Category = require('../../../classes/category')
const { licensePlateScheme } = require('../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../helpers/dateHelpers')
const { getNthDayOfMonth } = require('../../../helpers/dateHelpers')

module.exports = new Category({
  decrees: [
    { name: 'Decreto 1035 del 5 de septiembre de 2018', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['5:00', '23:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
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
    const pyp = [[1, 3, 5, 7, 9], [0, 2, 4, 6, 8]]
    return pyp[newISODate(date).getDate() % 2]
  },
})
