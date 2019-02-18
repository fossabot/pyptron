const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos de toda clase de servicio particular y público (excepto servicio tipo taxi)',
    ],
    decrees: [],
    days: ['Lunes a viernes hábiles'],
    hours: [
      {
        comment: '',
        hours: [['8:00', '18:00']],
        days: [],
      },
    ],
    scheme: 'Según el último dígito del número de la placa',
    observations:
      'Perímetro de pico y placa: Calle 9º y la Calle 4 sin incluir	la vía nacional y el de la Carrera 8º , en su totalidad, hasta la Carrera 3º en su	Totalidad',
  },
  name: 'Particulares',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const pyp = [
        '1-2', // lunes
        '3-4', // martes
        '5-6', // miércoles
        '7-8', // jueves
        '9-0', // viernes
      ]
      return pyp[pypFuncs.getDay(date) - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
