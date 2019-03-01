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
      const pyp = [
        '0-9', // lunes
        '1-8', // martes
        '2-7', // miércoles
        '3-6', // jueves
        '4-5', // viernes
      ]
      return pyp[newISODate(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
