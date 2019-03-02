const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: [
    'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [{ name: 'Decreto 222 de 2016', url: 'cdn:pdf' }],
  exceptions,
  hours: [{ comment: '', hours: [['7:30', '19:30']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
}
