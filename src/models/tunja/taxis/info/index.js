const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: [
    'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    {
      name: 'Decreto No. 0201 del 13 de junio de 2016',
      url:
        'http://tunja-boyaca.gov.co/apc-aa-files/63353630666563646636613430366433/2016-decreto-0201-del-13jun2016.pdf',
    },
    {
      name: 'Decreto 0151 del 22 de marzo 2013',
      url:
        'http://www.tunja-boyaca.gov.co/apc-aa-files/63353630666563646636613430366433/decreto-no_0151-del-22mar2013.pdf',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
}
