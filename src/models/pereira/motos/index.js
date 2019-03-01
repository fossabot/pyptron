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
        '0-1', // lunes
        '2-3', // martes
        '4-5', // miércoles
        '6-7', // jueves
        '8-9', // viernes
      ]
      return pyp[newISODate(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
