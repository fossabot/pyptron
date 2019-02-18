const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Motocicletas'],
    decrees: [
      {
        name: '',
        url: '',
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
  name: 'Motos',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const pyp = [
        '1-2-3-4', // lunes
        '5-6-7-8', // martes
        '9-0-1-2', // miércoles
        '3-4-5-6', // jueves
        '7-8-9-0', // viernes
      ]
      return pyp[pypFuncs.getDay(date) - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
