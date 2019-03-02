const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: ['Días hábiles de la semana - lunes a viernes.'],
  decrees: [
    {
      name: 'Decreto 0037 de 13 de Enero de 2017',
      url:
        'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2017/16370-DEC-20170116.pdf',
    },
    { name: 'Decreto 0946 de 2018', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [
    {
      comment: '',
      hours: [['6:00', '9:00'], ['11:30', '14:30'], ['17:00', '19:30']],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos particulares y oficiales'],
}
