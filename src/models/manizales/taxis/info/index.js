const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: [
    'Todos los días de la semana (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    { name: 'Resolución 308 de 2019', url: 'cdn:pdf' },
    { name: 'Resolución 298 de 2017', url: '' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['4:00', '4:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
}
