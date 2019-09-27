const PypData = require('../../../../classes/pyp-data')
const particulares190930 = require('../../particulares/190930')

module.exports = new PypData({
  ...particulares190930,
  startDate: '2019-09-30',
  hours: [
    {
      comment: 'Modelos posteriores a 2009',
      hours: [['7:00', '8:30'], ['17:30', '19:00']],
      days: [],
    },
    {
      comment: 'Modelos anteriores a 2009',
      hours: [['5:00', '8:30'], ['16:30', '21:00']],
      days: [],
    },
  ],
  vehicleClasses: ['Camiones y volquetas'],
})
