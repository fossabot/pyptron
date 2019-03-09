const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Lunes a viernes'],
  decrees: [{ name: 'Decreto 288 de 2017', url: 'cdn:pdf' }],
  exceptions,
  hours: [{ comment: '', hours: [['5:00', '22:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos tipo motocicletas'],
}
