const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: [
    'Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    {
      name: 'Decreto 1483 de diciembre de 2018',
      url:
        'http://www.transitocartagena.gov.co/links/Decretos/Decretos_2018/Decreto_1483.PDF',
    },
    { name: 'Decreto 1659 de diciembre de 2017', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
}
