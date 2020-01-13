const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2020-01-13',
  hours: [{ comment: '', hours: [['7:00', '20:00']], days: [] }],
  observations,
  pypFunction(date) {
    const pyp = [
      [9, 0],
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]
    return getArrayElementAfterRotating({
      date,
      startDate: '2020-01-01',
      array: pyp,
      period: 'months',
      reverse: false,
      interval: 6,
    })
  },
})
