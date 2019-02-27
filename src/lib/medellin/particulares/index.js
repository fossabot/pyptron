const pypFuncs = require('../../../utils/funcs')
const { weeksDiff } = require('../../../helpers/dateHelpers')
const { getIndex } = require('../../../helpers/arrayHelpers')
const days = require('./info/days')
const decrees = require('./info/decrees')
const exceptions = require('./info/exceptions')
const hours = require('./info/hours')
const maps = require('./info/maps')
const observations = require('./info/observations')
const scheme = require('./info/scheme')
const vehicleClasses = require('./info/vehicleClasses')

module.exports = {
  name: 'Particulares',
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
        const index = getIndex(weeksLapse, weekendsNums.length)
        return weekendsNums[index]
      }
      const pypNums = [
        '6-7-8-9-0-1', // '4-5-6-7', // lunes
        '0-1-2-3-4-5', // '8-9-0-1', // martes
        '4-5-6-7-8-9', // '2-3-4-5', // miércoles
        '8-9-0-1-2-3', // '6-7-8-9', // jueves
        '2-3-4-5-6-7', // '0-1-2-3', // viernes
      ]
      return pypNums[dow - 1]
      // const lapse = pypFuncs.monthsDiff(startDate, date, 6)
      // const newPypNums = pypFuncs.arrRotate(pypNums, lapse)
      // return newPypNums[new Date(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
