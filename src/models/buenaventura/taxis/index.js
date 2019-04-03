const Category = require('../../../classes/category')
const { licensePlateScheme } = require('../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/array-helpers')

module.exports = new Category({
  decrees: [{ name: 'Decreto 0019 del 09 de enero del 2018', url: '' }],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Transporte público individual - taxis'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2017-01-01'
    const pypNums = [[7, 8], [9, 0], [1, 2], [3, 4], [5, 6]]
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'months',
      interval: 6,
    })
  },
})
