const Category = require('../../../classes/category')
const { licensePlateScheme } = require('../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { datesDiff } = require('../../../helpers/date-helpers')

module.exports = new Category({
  decrees: [
    {
      name: 'Decreto 11-0160 del 29 de febrero de 2008',
      url:
        'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2008/DECRETO%20160.PDF',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '6:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Transporte público individual - taxis'],
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2017-12-01'
    return [(datesDiff({ startDate, endDate: date, period: 'days' }) + 1) % 10]
  },
})
