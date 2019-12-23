const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '10:00']], days: [] }],
  maps: [
    {
      name: 'Pico y placa ambiental carga dos toneladas nuevo',
      url: 'cdn:jpg',
    },
  ],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos de Transporte de Carga de más de dos toneladas'],
  excludedDays: [],
  skipHolidays: false,
  pypFunction() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // const startDate = '2018-01-01'
    // const pypNums = ['9', '8', '0', '1', '2', '3', '4', '5', '6', '7']
    // return getArrayElementAfterRotating({
    //   date,
    //   startDate,
    //   array: pypNums,
    //   period: 'days',
    // })
  },
})
