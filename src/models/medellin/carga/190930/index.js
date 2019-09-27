const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  ...pyp190407,
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
  pypFunction(date) {
    const pyp = [
      [2, 3, 4, 5], // lunes
      [6, 7, 8, 9], // martes
      [0, 1, 2, 3], // miércoles
      [4, 5, 6, 7], // jueves
      [8, 9, 0, 1], // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
