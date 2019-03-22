const { licensePlateScheme } = require('../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../helpers/dateHelpers')

module.exports = {
  days: ['Lunes a viernes hábiles'],
  decrees: [],
  exceptions,
  hours: [{ comment: '', hours: [['8:00', '18:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos tipo motocicletas'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      '1-2', // lunes
      '3-4', // martes
      '5-6', // miércoles
      '7-8', // jueves
      '9-0', // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
}
