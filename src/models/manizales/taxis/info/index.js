const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: [
    'Todos los días de la semana (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [{ name: 'Resolución 298 de 2017', url: '' }],
  exceptions,
  hours: [{ comment: '', hours: [['4:00', '4:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
}
