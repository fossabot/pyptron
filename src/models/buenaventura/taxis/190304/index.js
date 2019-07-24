const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-03-04',
  decrees: [
    {
      name: 'Decreto 0289 del 04 de marzo del 2019',
      url:
        'http://www.buenaventura.gov.co/images/multimedia/20190312_decreto_no_0289___modifica_decreto_050_de_2019_pico_y_placa_2019.pdf',
    },
    { name: 'Decreto 0019 del 09 de enero del 2018', url: '' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Transporte público individual - taxis'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2017-01-01'
    const pypNums = [[7, 8], [9, 0], [1, 2], [3, 4], [5, 6]]
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'months',
      interval: 6,
    })
  },
})
