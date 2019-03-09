const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: [
    'Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    { name: 'Decreto 1361 del 29 de noviembre de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 1550 del 30 de noviembre de 2017', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [
    {
      comment: '',
      hours: [['7:00', '10:00'], ['17:00', '20:00']],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
}
