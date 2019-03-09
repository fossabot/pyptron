const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: [
    'Lunes a viernes (no se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    { name: 'Decreto 60 del 22 de octubre de 2018', url: 'cdn:pdf' },
    { name: 'Estudio de tráfico pico y placa enero 2018', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos particulares no matriculados en el municipio de Ocaña',
  ],
}
