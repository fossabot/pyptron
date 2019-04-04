const Category = require('../../../classes/category')
const { licensePlateScheme } = require('../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../helpers/date-helpers')

module.exports = new Category({
  ...Category.getCategoryMetainfo('motos'),
  decrees: [{ name: 'Decreto 222 de 2016', url: 'cdn:pdf' }],
  exceptions,
  hours: [{ comment: '', hours: [['7:30', '19:30']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Motocicletas de todo cilindraje'],
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
