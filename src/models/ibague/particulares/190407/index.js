const PypData = require('../../../../classes/pyp-data')
const { licensePlateScheme } = require('../../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [
    {
      name: 'Decreto 0037 de 13 de Enero de 2017',
      url:
        'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2017/16370-DEC-20170116.pdf',
    },
    { name: 'Decreto 0946 de 2018', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [
    {
      comment: '',
      hours: [['6:00', '9:00'], ['11:30', '14:30'], ['17:00', '19:30']],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos particulares y oficiales'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      [0, 1], // lunes
      [2, 3], // martes
      [4, 5], // miércoles
      [6, 7], // jueves
      [8, 9], // iernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
