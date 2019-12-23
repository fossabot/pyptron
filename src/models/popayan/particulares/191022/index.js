const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2019-10-22',
  hours: [{ comment: '', hours: [['7:00', '20:00']], days: [] }],
  observations,
  pypFunction(date) {
    const pyp = [
      [7, 8],
      [9, 0],
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
