const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

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
