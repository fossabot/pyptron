const pypFuncs = require('../../../helpers/globalHelpers')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')
const info = require('./info')

module.exports = {
  name: 'Transporte Público Colectivo',
  info,
  pyp(date) {
    const options = {
      excludedDays: [0],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2018-01-01'
      const pypNums = ['5-6', '7-8', '9-0', '1-2', '3-4']
      return getArrayElementAfterRotating({
        date,
        startDate,
        period: 'weeks',
        array: pypNums,
        reverse: true,
      })
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
