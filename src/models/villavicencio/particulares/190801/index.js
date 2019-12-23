const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2019-08-01',
  skipHolidays: true,
  hours: [
    {
      comment: '',
      hours: [
        ['6:30', '8:30'],
        ['11:00', '14:30'],
        ['17:00', '19:00'],
      ],
      days: [],
    },
  ],
})
