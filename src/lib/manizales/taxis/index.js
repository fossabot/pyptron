const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos de transporte público individual de pasajeros - Taxis',
    ],
    decrees: [
      {
        name: 'Resolución 298 de 2017',
        url: '',
      },
    ],
    days: [
      'Todos los días de la semana (No se aplicará en los días festivos establecidos por la Ley)',
    ],
    hours: [
      {
        comment: '',
        hours: [['4:00', '4:00']],
        days: [],
      },
    ],
    scheme: 'De acuerdo con el último número de la placa del vehículo',
    observations: '',
  },
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const dow = pypFuncs.getDay(date)
      if (dow === 6 || dow === 0) {
        switch (pypFuncs.formatDate(date, 'YYYY-MM-DD')) {
          case '2018-01-06':
            return '3'
          case '2018-01-07':
            return '4'
          case '2018-01-13':
            return 'NA'
          case '2018-12-29':
            return '5'
          case '2018-12-30':
            return '6'
          default:
            break
        }
        const startDate = '2017-11-25'
        // Esta es la secuencia de números que se va rotando cada fin de semana cada 10 semanas.
        // El primer número de la secuencia corresponde al sábado y el segundo número al
        // domingo.
        const pypNums = [
          ['1', '2'],
          ['3', '4'],
          ['5', '6'],
          ['7', '8'],
          ['9', '0'],
          ['2', '1'],
          ['4', '3'],
          ['6', '5'],
          ['8', '7'],
          ['0', '9'],
        ]
        const daysLapse = pypFuncs.daysDiff(startDate, date, [])
        const weeksLapse = Math.floor(daysLapse / 7)
        // Usamos la función getIndex(index, arrLen) para mantener uniformidad en el código,
        // pero perfectamente podríamos usar:
        //   const index = weeksLapse % pypNums.length;
        // Ya que la diferencia de semanas no va a ser negativa nunca.
        const index = pypFuncs.getIndex(weeksLapse, pypNums.length)
        const nums = pypNums[index]
        return dow === 6 ? nums[0] : nums[1]
      }
      const startDate = '2018-01-01'
      const startNums = '3-4'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return pypFuncs.rotateByWeek(date, startDate, startNums, pypNums, true)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
