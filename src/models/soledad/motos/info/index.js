const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

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
