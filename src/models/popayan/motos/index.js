const Category = require('../../../classes/category')
const { licensePlateScheme } = require('../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = new Category({
  decrees: [
    {
      name: 'Decreto 20181000000015 del 2 de enero de 2018',
      url:
        'https://www.popayan.gov.co/sites/default/files/decreto_20181000000015_02012018.pdf',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Motocicletas particulares'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction() {
    return []
  },
})
