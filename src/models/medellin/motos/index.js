const particulares = require('../particulares')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { licensePlateScheme } = require('../../../helpers/globalHelpers')
const {
  newISODate,
  formatDate,
  datesDiff,
} = require('../../../helpers/dateHelpers')
const {
  normalizeArrayIndex,
  moveArrayElementsToTheRight,
} = require('../../../helpers/arrayHelpers')

module.exports = {
  ...particulares,
  exceptions,
  observations,
  scheme: licensePlateScheme.firstNumber,
  vehicleClasses: ['Motos de dos y cuatro tiempos'],
  pypFunction(date) {
    const startDate = '2018-02-05'
    const dateObject = newISODate(date)
    const formatedDate = formatDate(dateObject)
    if (formatedDate >= '2019-02-23' && formatedDate <= '2019-04-06') {
      const dow = dateObject.getDay()
      if (dow === 6) {
        const weeksLapse = datesDiff({
          startDate: '2019-02-23',
          endDate: date,
          period: 'weeks',
        })
        const weekendsNums = [[1, 3, 5, 7, 9], [0, 2, 4, 6, 8]]
        const index = normalizeArrayIndex(weeksLapse, weekendsNums.length)
        return weekendsNums[index]
      }
      const pypNums = [
        [4, 5, 6, 7, 8, 9], // lunes
        [6, 7, 8, 9, 0, 1], // martes
        [8, 9, 0, 1, 2, 3], // miércoles
        [0, 1, 2, 3, 4, 5], // jueves
        [2, 3, 4, 5, 6, 7], // viernes
      ]
      return pypNums[newISODate(date).getDay() - 1]
    }
    const pypNums = [
      [8, 9], // lunes
      [0, 1], // martes
      [2, 3], // miércoles
      [4, 5], // jueves
      [6, 7], // viernes
    ]
    const lapse = datesDiff({
      startDate,
      endDate: date,
      interval: 6,
      period: 'months',
    })
    const newPypNums = moveArrayElementsToTheRight(pypNums, lapse)
    return newPypNums[newISODate(date).getDay() - 1]
  },
}
