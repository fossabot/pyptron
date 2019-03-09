const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Todos los días de la semana'],
  decrees: [
    {
      name: 'Decreto 0387 del 11 de abril de 2016',
      url:
        'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2016/13967-DEC-20160415.pdf',
    },
  ],
  exceptions,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Transporte público colectivo municipal de pasajeros'],
}
