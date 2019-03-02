const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: [
    'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    { name: 'Decreto 349 de 2017', url: 'cdn:pdf' },
    { name: 'Decreto 070 de 2018', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
}
