const Category = require('../../../classes/category')
const { licensePlateScheme } = require('../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../helpers/date-helpers')

module.exports = new Category({
  ...Category.getCategoryMetainfo('particulares'),
  decrees: [
    { name: 'Decreto 0475 de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 0547 de 2017', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [
    {
      comment: '',
      hours: [['6:30', '8:30'], ['11:30', '14:30'], ['17:30', '19:30']],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
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
