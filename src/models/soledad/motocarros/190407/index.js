const PypData = require('../../../../classes/pyp-data')
const motos = require('../../motos/190407')
const observations = require('./observations.md')
const zones = require('./zones.md')
const { newISODate } = require('../../../../helpers/date-helpers')
const { formatDate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  ...motos,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  observations,
  vehicleClasses: [
    'Restricción de circulación de motocarros, según el color del mismo',
  ],
  excludedDays: [],
  pypFunction(date) {
    const pyp = [[0, 2, 4, 6, 8], [1, 3, 5, 7, 9]]
    switch (formatDate(date).substring(5, 10)) {
      case '01-31':
        return [0, 2, 4, 6, 8]
      case '03-31':
        return [1, 3, 5, 7, 9]
      case '07-31':
        return [0, 2, 4, 6, 8]
      case '08-31':
        return [1, 3, 5, 7, 9]
      case '10-31':
        return [0, 2, 4, 6, 8]
      case '12-31':
        return [1, 3, 5, 7, 9]
      default:
        return pyp[newISODate(date).getDate() % 2]
    }
  },
  zones,
})
