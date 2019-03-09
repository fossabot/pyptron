const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Lunes a viernes hábiles'],
  decrees: [
    { name: 'Decreto 0475 de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 0547 de 2017', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [
    {
      comment: '',
      hours: [['6:30', '8:30'], ['11:30', '14:30'], ['17:30', '19:30']],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
}
