const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Lunes a viernes hábiles'],
  decrees: [{ name: 'Decreto 035', url: '' }],
  exceptions,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos tipo motocicletas'],
}
