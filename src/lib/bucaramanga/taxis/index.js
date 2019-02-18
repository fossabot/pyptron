const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Vehículos de servicio público individual - taxis'],
    decrees: [
      {
        name: 'Resolución 277 del 27 de Abril de 2006',
        url: '',
      },
      {
        name: 'Resolución 475 del 23 de Junio de 2006',
        url: '',
      },
      {
        name: 'Resolución 487 del 30 de Junio de 2006',
        url: '',
      },
    ],
    days: ['Lunes a sábado hábiles'],
    hours: [
      {
        comment: '',
        hours: [['7:00', '21:00']],
        days: [],
      },
    ],
    scheme: 'Último dígito numérico de la placa según el esquema',
    observations: '',
  },
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2018-01-08'
      const startNums = '1-2'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return pypFuncs.rotateByWeek(date, startDate, startNums, pypNums, true)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
