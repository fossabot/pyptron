const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Lunes a sábado hábiles'],
  decrees: [
    {
      name: 'Resolución 108 de 2018',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/108-03-2018.pdf',
    },
    {
      name: 'Resolución 435 de 2017',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/435-08-2017.pdf',
    },
    {
      name: 'Resolución 782 de 2017',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/782-12-2017.pdf',
    },
    {
      name: 'Resolución 783 de 2017',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/783-12-2017.pdf',
    },
  ],
  exceptions,
  hours: [
    {
      comment: 'Lunes a viernes',
      hours: [['6:00', '20:00']],
      days: [1, 2, 3, 4, 5],
    },
    { comment: 'Sábados', hours: [['9:00', '13:00']], days: [6] },
  ],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos tipo motocicletas'],
}
