const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { datesDiff } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '6:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Transporte público individual - taxis'],
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2017-12-01'
    return [(datesDiff({ startDate, endDate: date, period: 'days' }) + 1) % 10]
  },
})
