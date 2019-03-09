const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Lunes a viernes hábiles'],
  decrees: [],
  exceptions,
  hours: [{ comment: '', hours: [['8:00', '18:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos de toda clase de servicio particular y público (excepto servicio tipo taxi)',
  ],
}
