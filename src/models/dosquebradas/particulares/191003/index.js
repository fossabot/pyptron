const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-10-13',
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '20:00']], days: [] }],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      [0, 1], // lunes
      [2, 3], // martes
      [4, 5], // miércoles
      [6, 7], // jueves
      [8, 9], // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
