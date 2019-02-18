const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Vehículos de Transporte Público Colectivo (TPC)'],
    decrees: [
      {
        name: 'Decreto 0019 del 09 de enero del 2018',
        url: '',
      },
    ],
    days: [
      'Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)',
    ],
    hours: [
      {
        comment: '',
        hours: [['7:00', '19:00']],
        days: [],
      },
    ],
    scheme: 'Último dígito del número de la placa',
    observations:
      "Aplica para todo el distrito. El Decreto autoriza la movilización de vehículos de servicio público sólo para que realicen el mantenimiento respectivo, por ello deberán portar el tablero colocado en el parabrisas el siguiente aviso: 'vehículo en mantenimiento por pico y placa'",
  },
  name: 'Transporte Público Colectivo',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2017-01-01'
      const pypNums = ['7-8', '9-0', '1-2', '3-4', '5-6']
      const lapse = pypFuncs.monthsDiff(startDate, date, 6)
      const newPypNums = pypFuncs.arrRotate(pypNums, lapse)
      return newPypNums[pypFuncs.getDay(date) - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
