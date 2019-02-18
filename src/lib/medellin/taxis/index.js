const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Transporte público individual - taxis'],
    decrees: [
      {
        name: 'Decreto 0116 de 2018',
        url:
          'https://www.medellin.gov.co/movilidad/jdownloads/Normas/Normatividad/Decretos%20Municipales/2018/decreto_0116_de_2018.pdf',
      },
    ],
    days: ['Días hábiles de la semana - lunes a viernes.'],
    hours: [
      {
        comment: '',
        hours: [['6:00', '20:00']],
        days: [],
      },
    ],
    scheme: 'De acuerdo con el último número de la placa del vehículo',
    observations:
      'La rotación de la medida de “Pico y placa” para el transporte público individual (taxis) que circulen en la Jurisdicción de Medellín, seguirá siendo cada dos semanas en el horario comprendido enre las 06:00 y las 20:00 horas durante los días hábiles de la semana por grupos de vehículos, según el último número de su placa, a partir del jueves 1 de febrero de 2018.',
  },
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const dateObject = new Date(date)
      const startDate = new Date('2018-01-01T05:00:00.000Z')
      const millisecondsPerDay = 1000 * 60 * 60 * 24
      const millisecondsDiff = dateObject - startDate
      const daysDiff = millisecondsDiff / millisecondsPerDay
      const weeksOffset = Math.ceil((daysDiff + 1) / 7)
      let pypNums = [['5', '0'], ['6', '1'], ['7', '2'], ['3', '8'], ['4', '9']]
      if (dateObject >= new Date('2018-05-07T05:00:00.000Z')) {
        pypNums[2] = ['2', '7']
        pypNums[3] = ['8', '3']
      }
      if (dateObject >= new Date('2019-01-08T05:00:00.000Z')) {
        pypNums[0] = ['0', '5']
        pypNums[4] = ['9', '4']
      }
      const monthsDiff = dateObject.getMonth() - startDate.getMonth()
      const yearsDiff = dateObject.getFullYear() - startDate.getFullYear()
      const monthsDiffAccu = monthsDiff + yearsDiff * 12
      const datesWeekDay = dateObject.getDay()
      const datesDate = dateObject.getDate()
      const weekOfMonth = Math.floor((datesDate - datesWeekDay) / 7)
      const offset = monthsDiffAccu - (weekOfMonth < 0 ? 1 : 0)
      pypNums = pypFuncs.arrRotate(pypNums, offset < 0 ? 0 : offset)

      return pypNums[datesWeekDay - 1][(weeksOffset + 1) % 2]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
