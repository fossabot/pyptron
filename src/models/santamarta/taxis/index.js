const Category = require('../../../classes/category')
const { licensePlateScheme } = require('../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/array-helpers')

module.exports = new Category({
  ...Category.getCategoryMetainfo('taxis'),
  decrees: [
    { name: 'Decreto 043 de 2019', url: 'cdn:pdf' },
    { name: 'decreto 068 de 2018', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '23:59']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2018-03-05'
    const pypNums = [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]
    return getArrayElementAfterRotating({
      date,
      startDate,
      period: 'weeks',
      array: pypNums,
    })
  },
})
