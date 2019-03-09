const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Lunes a domingo'],
  decrees: [
    {
      name: 'Decreto 0001 del 4 de enero de 2018',
      url:
        'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['05:00', '22:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos de Transporte de Servicio Público Colectivo'],
}
