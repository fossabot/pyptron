const { getWeek } = require('../../../helpers/dateHelpers')
const { newISODate } = require('../../../helpers/dateHelpers')
const pypFuncs = require('../../../helpers/globalHelpers')
const info = require('./info')

module.exports = {
  name: 'Taxis',
  info,
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const pyp = [
        [
          '0', // lunes
          '9', // martes
          '8', // miércoles
          '7', // jueves
          '6', // viernes
        ],
        [
          '1', // lunes
          '2', // martes
          '3', // miércoles
          '4', // jueves
          '5', // viernes
        ],
      ]
      const week = getWeek(date) % 2
      return pyp[week][newISODate(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
