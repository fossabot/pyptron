const { getWeek } = require('../../../utils/dateHelpers')
const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos de transporte público individual de pasajeros - Taxis',
    ],
    decrees: [
      {
        name: 'Decretos 0239 del 4 de abril del 2017',
        url:
          'http://www.areacucuta.com/wp-content/uploads/2017/04/Decreto-Pico-y-Placa-Placa-y-D%C3%ADa.pdf',
      },
      {
        name: 'Decretos 0330 del 22 de mayo del 2017',
        url:
          'http://cucutaonline.com/wp-content/uploads/2017/05/Decreto-0330-pico-placa-modificado.pdf',
      },
    ],
    days: ['Lunes a viernes hábiles'],
    hours: [
      {
        comment: '',
        hours: [['7:30', '23:00']],
        days: [],
      },
    ],
    scheme:
      'Medida de tránsito de RESTRICCIÓN VEHICULAR denominada PLACA – DÍA en la ciudad de San José de Cúcuta para VEHÍCULOS DE SERVICIO PÚBLICO TIPO TAXI, VEHÍCULOS DE PLACA EXTRANJERA (automóviles, motocicletas, camionetas, camiones, volquetas) y VEHÍCULOS DE PLACA NACIONAL (automóviles, motocicletas, camionetas, camiones, volquetes).',
  },
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const pyp = [
        [
          '0', // lunes
          '9', // martes
          '8', // miércoles
          '7', // jueves
          '6', // viernes
        ],
        [
          '1', // lunes
          '2', // martes
          '3', // miércoles
          '4', // jueves
          '5', // viernes
        ],
      ]
      const week = getWeek(date) % 2
      return pyp[week][new Date(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
