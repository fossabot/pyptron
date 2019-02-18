const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos de transporte público individual de pasajeros - Taxis.',
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
    days: ['Lunes a domingo'],
    hours: [
      {
        comment: '',
        hours: [['06:00', '05:00']],
        days: [],
      },
    ],
    scheme: 'Rotación de acuerdo con el último dígito del número de la placa',
    observations: '',
  },
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const startDate = '2018-01-01'
      const startNums = '7-8'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return pypFuncs.rotateByDay(date, startDate, startNums, pypNums, [])
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
