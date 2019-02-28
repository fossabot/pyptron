const pypFuncs = require('../../../helpers/globalHelpers')
const { normalizeArrayIndex } = require('../../../helpers/arrayHelpers')
const days = require('./info/days')
const decrees = require('./info/decrees')
const exceptions = require('./info/exceptions')
const hours = require('./info/hours')
const maps = require('./info/maps')
const observations = require('./info/observations')
const scheme = require('./info/scheme')
const vehicleClasses = require('./info/vehicleClasses')
const { weeksDiff } = require('../../../helpers/dateHelpers')

module.exports = {
  name: 'Motos',
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
      excludedDays: [0],
      skipHolidays: true,
    }
    const pypFunction = () => {
      // const startDate = '2018-02-05'
      const dow = new Date(date).getDay()
      if (dow === 6) {
        const weeksLapse = weeksDiff('2019-02-23', date, [])
        const weekendsNums = ['1-3-5-7-9', '0-2-4-6-8']
        const index = normalizeArrayIndex(weeksLapse, weekendsNums.length)
        return weekendsNums[index]
      }
      const pypNums = [
        '4-5-6-7-8-9', // '8-9', // lunes
        '6-7-8-9-0-1', // '0-1', // martes
        '8-9-0-1-2-3', // '2-3', // miércoles
        '0-1-2-3-4-5', // '4-5', // jueves
        '2-3-4-5-6-7', // '6-7', // viernes
      ]
      return pypNums[new Date(date).getDay() - 1]
      // const lapse = pypFuncs.monthsDiff(startDate, date, 6)
      // const newPypNums = pypFuncs.moveArrayElementsToTheRight(pypNums, lapse)
      // return newPypNums[new Date(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
