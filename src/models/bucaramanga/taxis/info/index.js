const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: ['Lunes a sábado hábiles'],
  decrees: [
    { name: 'Resolución 277 del 27 de Abril de 2006', url: '' },
    { name: 'Resolución 475 del 23 de Junio de 2006', url: '' },
    { name: 'Resolución 487 del 30 de Junio de 2006', url: '' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '21:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos de servicio público individual - taxis'],
}
