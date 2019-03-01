const pypFuncs = require('../../../helpers/globalHelpers')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')
const info = require('./info')

module.exports = {
  name: 'Ambiental',
  info,
  pyp(date) {
    const options = {
      excludedDays: [0],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2018-01-01'
      const pypNums = ['9', '8', '0', '1', '2', '3', '4', '5', '6', '7']
      return getArrayElementAfterRotating({
        date,
        startDate,
        array: pypNums,
        period: 'days',
      })
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
