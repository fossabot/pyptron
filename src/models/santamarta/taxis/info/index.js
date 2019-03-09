const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Lunes a sábado'],
  decrees: [{ name: 'decreto 068 de 2018', url: 'cdn:pdf' }],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '21:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
}
