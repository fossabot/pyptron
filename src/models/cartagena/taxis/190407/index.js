const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [
    {
      name: 'Decreto 1483 de diciembre de 2018',
      url:
        'http://www.transitocartagena.gov.co/links/Decretos/Decretos_2018/Decreto_1483.PDF',
    },
    { name: 'Decreto 1659 de diciembre de 2017', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    const pypNums = [[3, 4], [5, 6], [7, 8], [9, 0], [1, 2]]
    return pypNums[newISODate(date).getDay() - 1]
  },
})
