const particulares = require('../particulares')

const { licensePlateScheme } = require('../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../helpers/dateHelpers')
const { normalizeArrayIndex } = require('../../../helpers/arrayHelpers')
const { datesDiff } = require('../../../helpers/dateHelpers')

module.exports = {
  ...particulares,
  exceptions,
  observations,
  scheme: licensePlateScheme.firstNumber,
  vehicleClasses: ['Motos de dos y cuatro tiempos'],
  pypFunction(date) {
    // const startDate = '2018-02-05'
    const dow = newISODate(date).getDay()
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
      [4, 5, 6, 7, 8, 9], // '8-9', // lunes
      [6, 7, 8, 9, 0, 1], // '0-1', // martes
      [8, 9, 0, 1, 2, 3], // '2-3', // miércoles
      [0, 1, 2, 3, 4, 5], // '4-5', // jueves
      [2, 3, 4, 5, 6, 7], // '6-7', // viernes
    ]
    return pypNums[newISODate(date).getDay() - 1]
    // const lapse = pypFuncs.monthsDiff(startDate, date, 6)
    // const newPypNums = pypFuncs.moveArrayElementsToTheRight(pypNums, lapse)
    // return newPypNums[newISODate(date).getDay() - 1]
  },
}
