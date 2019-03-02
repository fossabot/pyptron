const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: ['Lunes a viernes hábiles'],
  decrees: [],
  exceptions,
  hours: [{ comment: '', hours: [['8:00', '18:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos tipo motocicletas'],
}
