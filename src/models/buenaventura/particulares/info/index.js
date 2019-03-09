const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: [
    'Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [{ name: 'Decreto 0019 del 09 de enero del 2018', url: '' }],
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
