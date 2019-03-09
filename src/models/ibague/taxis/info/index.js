const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Todos los días de la semana'],
  decrees: [
    {
      name: 'Decreto 11-0160 del 29 de febrero de 2008',
      url:
        'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2008/DECRETO%20160.PDF',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '6:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Transporte público individual - taxis'],
}
