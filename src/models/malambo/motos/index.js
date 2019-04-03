const Category = require('../../../classes/category')
const { licensePlateScheme } = require('../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../helpers/dateHelpers')

module.exports = new Category({
  decrees: [{ name: 'Decreto 257 de 2017', url: '' }],
  exceptions,
  hours: [{ comment: '', hours: [['5:00', '22:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
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
