const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')
const { formatDate, datesDiff } = require('../../../../helpers/date-helpers')
const {
  normalizeArrayIndex,
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [
    { name: 'Resolución 308 de 2019', url: 'cdn:pdf' },
    { name: 'Resolución 298 de 2017', url: '' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['4:00', '4:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
  excludedDays: [],
  skipHolidays: true,
  pypFunction(date) {
    const dow = newISODate(date).getDay()
    if (dow === 6 || dow === 0) {
      switch (formatDate(date)) {
        case '2018-01-06':
          return [3]
        case '2018-01-07':
          return [4]
        case '2018-01-13':
          return []
        case '2018-12-29':
          return [5]
        case '2018-12-30':
          return [6]
        default:
          break
      }
      const startDate = '2017-11-25'
      // Esta es la secuencia de números que se va rotando cada fin de semana cada 10 semanas.
      // El primer número de la secuencia corresponde al sábado y el segundo número al
      // domingo.
      const pypNums = [
        [[1], [2]],
        [[3], [4]],
        [[5], [6]],
        [[7], [8]],
        [[9], [0]],
        [[2], [1]],
        [[4], [3]],
        [[6], [5]],
        [[8], [7]],
        [[0], [9]],
      ]
      const weeksLapse = datesDiff({
        startDate,
        endDate: date,
        period: 'weeks',
      })
      // Usamos la función normalizeArrayIndex(index, arrLen) para mantener uniformidad en el código,
      // pero perfectamente podríamos usar:
      //   const index = weeksLapse % pypNums.length;
      // Ya que la diferencia de semanas no va a ser negativa nunca.
      const index = normalizeArrayIndex(weeksLapse, pypNums.length)
      const nums = pypNums[index]
      return dow === 6 ? nums[0] : nums[1]
    }
    const startDate = '2018-01-01'
    const pypNums = [[3, 4], [5, 6], [7, 8], [9, 0], [1, 2]]
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'weeks',
      reverse: true,
    })
  },
})
