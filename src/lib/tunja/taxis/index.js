const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos de transporte público individual de pasajeros - Taxis',
    ],
    decrees: [
      {
        name: 'Decreto No. 0201 del 13 de junio de 2016',
        url:
          'http://tunja-boyaca.gov.co/apc-aa-files/63353630666563646636613430366433/2016-decreto-0201-del-13jun2016.pdf',
      },
      {
        name: 'Decreto 0151 del 22 de marzo 2013',
        url:
          'http://www.tunja-boyaca.gov.co/apc-aa-files/63353630666563646636613430366433/decreto-no_0151-del-22mar2013.pdf',
      },
    ],
    days: [
      'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
    ],
    hours: [
      {
        comment: '',
        hours: [['7:00', '19:00']],
        days: [],
      },
    ],
    scheme: 'Último dígito del número de la placa según el esquema',
    observations: '',
  },
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2015-06-01'
      const startNums = '3-4'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return pypFuncs.rotateByMonth(date, startDate, startNums, pypNums)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
