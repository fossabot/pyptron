const pypFuncs = require('../../../helpers/globalHelpers')
const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Particulares',
  info,
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const semester = newISODate(date).getMonth() < 6 ? 0 : 1
      const pyp = [
        [
          '3-4', // lunes
          '5-6', // martes
          '7-8', // miércoles
          '9-0', // jueves
          '1-2', // viernes
        ],
        [
          '1-2', // lunes
          '3-4', // martes
          '5-6', // miércoles
          '7-8', // jueves
          '9-0', // viernes
        ],
      ]
      return pyp[semester][newISODate(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
