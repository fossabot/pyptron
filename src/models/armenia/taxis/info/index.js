const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: ['Lunes a viernes hábiles'],
  decrees: [{ name: 'Decreto 083 de 2016', url: 'cdn:pdf' }],
  exceptions,
  hours: [{ comment: '', hours: [['7:30', '19:30']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
}
