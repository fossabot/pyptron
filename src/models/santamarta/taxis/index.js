const pypFuncs = require('../../../helpers/globalHelpers')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')
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
      const startDate = '2018-03-05'
      const pypNums = ['0-1', '2-3', '4-5', '6-7', '8-9']
      return getArrayElementAfterRotating({
        date,
        startDate,
        period: 'weeks',
        array: pypNums,
      })
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
