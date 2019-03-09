const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Lunes a viernes'],
  decrees: [
    { name: 'Decreto 222 del 25 de julio de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 245 del 26 de julio de 2017', url: 'cdn:pdf' },
    { name: 'Decreto 010 del 24 de enero de 2017', url: 'cdn:pdf' },
    { name: 'Decreto 131 del 26 de enero de 2016', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '24:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos automotores de servicio público de transporte terrestre individual de pasajeros en vehículos tipo taxi',
  ],
}
