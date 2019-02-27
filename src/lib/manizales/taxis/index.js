const pypFuncs = require('../../../helpers/globalHelpers')
const { formatDate, weeksDiff } = require('../../../helpers/dateHelpers')
const { getIndex, rotateByWeek } = require('../../../helpers/arrayHelpers')
const days = require('./info/days')
const decrees = require('./info/decrees')
const exceptions = require('./info/exceptions')
const hours = require('./info/hours')
const maps = require('./info/maps')
const observations = require('./info/observations')
const scheme = require('./info/scheme')
const vehicleClasses = require('./info/vehicleClasses')

module.exports = {
  name: 'Taxis',
  info: {
    days,
    decrees,
    exceptions,
    hours,
    maps,
    observations,
    scheme,
    vehicleClasses,
  },
  pyp(date) {
    const options = {
      excludedDays: [],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const dow = new Date(date).getDay()
      if (dow === 6 || dow === 0) {
        switch (formatDate(date)) {
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
        const weeksLapse = weeksDiff(startDate, date, [])
        // Usamos la función getIndex(index, arrLen) para mantener uniformidad en el código,
        // pero perfectamente podríamos usar:
        //   const index = weeksLapse % pypNums.length;
        // Ya que la diferencia de semanas no va a ser negativa nunca.
        const index = getIndex(weeksLapse, pypNums.length)
        const nums = pypNums[index]
        return dow === 6 ? nums[0] : nums[1]
      }
      const startDate = '2018-01-01'
      const startNums = '3-4'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return rotateByWeek(date, startDate, startNums, pypNums, true)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
