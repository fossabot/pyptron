const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme: '',
  vehicleClasses: ['Vehículos de carga'],
  excludedDays: [],
  skipHolidays: true,
  pypFunction() {
    return []
  },
})
