const PypData = require('../../../../classes/pyp-data')
const particulares = require('../../particulares/190407')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  newISODate,
  formatDate,
  datesDiff,
} = require('../../../../helpers/date-helpers')
const {
  normalizeArrayIndex,
  moveArrayElementsToTheRight,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  ...particulares,
  exceptions,
  observations,
  scheme: PypData.licensePlateScheme.firstNumber,
  vehicleClasses: ['Motos de dos tiempos'],
  pypFunction(date) {
    const startDate = '2018-02-05'
    const dateObject = newISODate(date)
    const formatedDate = formatDate(dateObject)
    const dow = dateObject.getDay()
    if (formatedDate >= '2019-02-23' && formatedDate <= '2019-04-06') {
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
      return pypNums[dow - 1]
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
    const index = dow - 1
    return index in newPypNums ? newPypNums[index] : []
  },
})
