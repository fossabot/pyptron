const { licensePlateScheme } = require('../../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = {
  days: ['Lunes a sábado'],
  decrees: [
    { name: 'decreto 068 de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 043 de 2019', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '23:59']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
}
