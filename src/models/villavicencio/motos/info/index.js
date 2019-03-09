const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Lunes a viernes'],
  decrees: [
    { name: 'Decreto 222 del 25 de julio de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 245 del 26 de julio de 2017', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['6:30', '19:30']], days: [] }],
  maps: [{ name: 'Mapa pico y placa Villavicencio', url: 'cdn:jpg' }],
  observations,
  scheme,
  vehicleClasses: ['Motocicletas y motocarros de servicio particular'],
}
