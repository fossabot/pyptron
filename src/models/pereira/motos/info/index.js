const { licensePlateScheme } = require('../../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = {
  days: [
    'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    { name: 'Decreto 872 del 22 de noviembre de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 241 del 26 de marzo de 2016', url: 'cdn:pdf' },
    { name: 'Decreto 516 del 21 de julio de 2015', url: 'cdn:pdf' },
    { name: 'Decreto 193 del 6 de marzo de 2015', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [{ name: 'Mapa pico y placa Pereira 2019', url: 'cdn:jpg' }],
  observations,
  scheme: licensePlateScheme.firstNumber,
  vehicleClasses: ['Motocicletas'],
}
