const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Transporte público individual - taxis'],
    decrees: [
      {
        name: 'Decreto 11-0160 del 29 de febrero de 2008',
        url:
          'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2008/DECRETO%20160.PDF',
      },
    ],
    days: ['Todos los días de la semana'],
    hours: [
      {
        comment: '',
        hours: [['6:00', '6:00']],
        days: [],
      },
    ],
    scheme: 'De acuerdo con el último número de la placa del vehículo',
    observations:
      'Las restricciones establecidas para este servicio no se suspenderán en ninguna época del año, ni en festividades de semana santa, mitad o final de año.',
  },
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const startDate = '2017-12-01'
      return String((pypFuncs.daysDiff(startDate, date, []) + 1) % 10)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
