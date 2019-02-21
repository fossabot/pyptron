const pypFuncs = require('../../../utils/funcs')
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
