const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [
    {
      name: 'Resolución 108 de 2018',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/108-03-2018.pdf',
    },
    {
      name: 'Resolución 435 de 2017',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/435-08-2017.pdf',
    },
    {
      name: 'Resolución 782 de 2017',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/782-12-2017.pdf',
    },
    {
      name: 'Resolución 783 de 2017',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/783-12-2017.pdf',
    },
  ],
  exceptions,
  hours: [
    {
      comment: 'Lunes a viernes',
      hours: [['6:00', '20:00']],
      days: [1, 2, 3, 4, 5],
    },
    { comment: 'Sábados', hours: [['9:00', '13:00']], days: [6] },
  ],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos tipo motocicletas'],
  excludedDays: [0],
  skipHolidays: true,
  pypFunction(date) {
    if (newISODate(date).getDay() === 6) {
      const startDate = '2018-01-06'
      const pypNums = [[3, 4], [5, 6], [7, 8], [9, 0], [1, 2]]
      return getArrayElementAfterRotating({
        date,
        startDate,
        array: pypNums,
        period: 'weeks',
        reverse: true,
      })
    }
    const pypNums = [[3, 4], [5, 6], [7, 8], [9, 0], [1, 2]]
    const startDate = '2018-01-01'
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'months',
      reverse: true,
      interval: 3,
    })
  },
})
