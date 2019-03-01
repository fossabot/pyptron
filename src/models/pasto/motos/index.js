const pypFuncs = require('../../../helpers/globalHelpers')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')
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
      const startDate = '2018-01-01'
      const pypNums = ['8-9', '0-1', '2-3', '4-5', '6-7']
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
