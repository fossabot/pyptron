const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: [
    'Lunes a viernes hábiles (no aplica sábados, domingos y feriados establecidos por la ley o cuando excepcionalmente lo establezca la autoridad competente).',
  ],
  decrees: [
    {
      name: 'Decreto 0801 de 2018',
      url:
        'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=32835',
    },
    {
      name: 'Decreto 4112.010.20.0318-28/06/2018 del 28 de junio de 2018',
      url:
        'http://www.cali.gov.co/aplicaciones/boletin_publicaciones/imagenes_documentos/documentoId11660.pdf',
    },
    {
      name: 'Decreto 0001 del 4 de enero de 2018',
      url:
        'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496',
    },
  ],
  exceptions,
  hours: [
    {
      comment: '',
      hours: [['6:00', '10:00'], ['16:00', '20:00']],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos automotores de servicio particular.'],
}
