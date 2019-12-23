const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['8:00', '18:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de toda clase de servicio particular y público (excepto servicio tipo taxi)',
  ],
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
