const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { datesDiff } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Transporte público colectivo municipal de pasajeros'],
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2016-04-10'
    const pyp = [
      [1, 2], // lunes
      [0, 3], // martes
      [4, 9], // miércoles
      [5, 6], // jueves
      [7, 8], // viernes
    ]
    const daysLapse =
      datesDiff({ startDate, endDate: date, period: 'days' }) - 1
    return pyp[daysLapse % pyp.length]
  },
})
