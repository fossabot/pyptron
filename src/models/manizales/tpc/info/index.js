const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: [
    'Lunes a sábado (No se aplicará en los días domingos y festivos establecidos por la Ley)',
  ],
  decrees: [
    { name: 'Resolución 308 de 2019', url: 'cdn:pdf' },
    { name: 'Resolución 298 de 2017', url: '' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '23:59']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos de Transporte Público Colectivo (TPC)'],
}
