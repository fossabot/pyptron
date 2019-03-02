const { getWeek } = require('../../../helpers/dateHelpers')
const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Taxis',
  info,
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    // Respuesta dada por correo electrónico:
    // Al peticionario se le recuerda, que según lo estipulado en el Decreto 0239 de 4 de abril del 2017, los vehículos de transporte público individual (taxis) tienen restricción el mismo día de la semana una vez cada 15 días, por lo tanto, teniendo en cuenta lo anterior es más fácil que los conductores de dicho medio de transporte puedan cumplir con lo establecido en la restricción de vehículos en la ciudad de Cúcuta.
    const pyp = [
      // semanas impares 1 y 3
      [
        '3', // lunes
        '2', // martes
        '1', // miércoles
        '9', // jueves
        '0', // viernes
      ],

      // semanas pares 2 y 4
      [
        '8', // lunes
        '7', // martes
        '6', // miércoles
        '5', // jueves
        '4', // viernes
      ],
    ]
    const week = getWeek(date) % 2
    return pyp[week][newISODate(date).getDay() - 1]
  },
}
