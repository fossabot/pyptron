const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Vehículos de Transporte de Servicio Público Colectivo'],
    decrees: [
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
        hours: [['05:00', '22:00']],
        days: [],
      },
    ],
    scheme: 'Rotación de acuerdo con el último dígito del número de la placa',
    observations: '',
  },
  name: 'Transporte Público Colectivo',
  pyp(date) {
    const options = {
      excludedDays: [],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const startDate = '2018-01-01'
      const startNums = '6-7'
      const pypNums = ['0-1', '2-3', '4-5', '6-7', '8-9']
      return pypFuncs.rotateByDay(date, startDate, startNums, pypNums, [])
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
