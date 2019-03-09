const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Lunes a viernes hábiles'],
  decrees: [
    {
      name: 'Decreto 20181000000015 del 2 de enero de 2018',
      url:
        'https://www.popayan.gov.co/sites/default/files/decreto_20181000000015_02012018.pdf',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Transporte Público de servicio de carga con capacidad menor a una y media toneladas',
  ],
}
