const pypFuncs = require('../../../helpers/globalHelpers')
const { newISODate } = require('../../../helpers/dateHelpers')
const info = require('./info')

module.exports = {
  name: 'Motos',
  info,
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const pyp = [
        '1-2-3-4', // lunes
        '5-6-7-8', // martes
        '9-0-1-2', // miércoles
        '3-4-5-6', // jueves
        '7-8-9-0', // viernes
      ]
      return pyp[newISODate(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
