const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2019-10-22',
  decrees: [
    {
      name: 'Decreto 20191000004255 del 21 de octubre de 2019',
      url:
        'http://popayan.gov.co/sites/default/files/decreto_restriccion_de_automotores_particulares_2019.pdf',
    },
    {
      name: 'Decreto 20181000000015 del 2 de enero de 2018',
      url:
        'https://www.popayan.gov.co/sites/default/files/decreto_20181000000015_02012018.pdf',
    },
  ],
  hours: [{ comment: '', hours: [['7:00', '20:00']], days: [] }],
  observations,
  pypFunction(date) {
    const pyp = [[7, 8], [9, 0], [1, 2], [3, 4], [5, 6]]
    return pyp[newISODate(date).getDay() - 1]
  },
})
