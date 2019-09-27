const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2019-09-30',
  pypFunction(date) {
    const pyp = [
      [2, 3], // lunes
      [4, 5], // martes
      [6, 7], // miércoles
      [8, 9], // jueves
      [0, 1], // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
