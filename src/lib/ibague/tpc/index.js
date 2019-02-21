const pypFuncs = require('../../../utils/funcs')
const { daysDiff } = require('../../../utils/dateHelpers')

module.exports = {
  info: {
    vehicleClasses: ['Transporte público colectivo municipal de pasajeros'],
    decrees: [
      {
        name: 'Decreto 0387 del 11 de abril de 2016',
        url:
          'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2016/13967-DEC-20160415.pdf',
      },
    ],
    days: ['Todos los días de la semana'],
    hours: [
      {
        comment: 'Todo el día',
        hours: [[]],
        days: [],
      },
    ],
    scheme:
      'Restringe la circulación de Vehículos de Servicio Público de Transporte Colectivo Municipal de Pasajeros, tipo Busetón, Buseta, Microbus, en todo el territorio Urbano de la ciudad de Ibagué, durante las veinticuatro (24) horas de cada día',
  },
  name: 'Transporte Público Colectivo',
  pyp(date) {
    const options = {
      excludedDays: [],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const startDate = '2017-12-02'
      const pyp = [
        '1-2', // lunes
        '0-3', // martes
        '4-9', // miércoles
        '5-6', // jueves
        '7-8', // viernes
      ]
      const daysLapse = daysDiff(startDate, date, []) - 1
      return pyp[daysLapse % pyp.length]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
