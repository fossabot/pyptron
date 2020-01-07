const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['7:30', '19:00']], days: [] }],
  maps: [
    { name: 'Anillo de restricción vial para motocicletas', url: 'cdn:jpg' },
  ],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Motocicletas'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2018-01-01'
    const pypNums = [
      [8, 9],
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
    ]
    return getArrayElementAfterRotating({
      date,
      startDate,
      period: 'weeks',
      array: pypNums,
      reverse: true,
    })
  },
})
