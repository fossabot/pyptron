const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate, datesDiff } = require('../../../../helpers/date-helpers')
const {
  moveArrayElementsToTheRight,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [
    {
      comment: '',
      hours: [
        ['7:00', '8:30'],
        ['17:30', '19:00'],
      ],
      days: [],
    },
  ],
  maps: [{ name: 'Mapa pico y placa Medellín 2019', url: 'cdn:jpg' }],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos particulares y oficiales'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    // Fecha de inicio del algoritmo, debe ser la misma para todos los pyp que repliquen este pyp
    // Si se usa this.startDate al replicarlo para otra fecha y craar un nuevo this.startDate se altera el algoritmo
    // No usar this.startDate porque se puede alterar la fecha de inicio del algoritmo al replicar este pyp
    const startDate = '2018-02-05'
    const dateObject = newISODate(date)
    const dow = dateObject.getDay()
    const pypNums = [
      [4, 5, 6, 7], // lunes
      [8, 9, 0, 1], // martes
      [2, 3, 4, 5], // miércoles
      [6, 7, 8, 9], // jueves
      [0, 1, 2, 3], // viernes
    ]
    const lapse = datesDiff({
      startDate,
      endDate: date,
      interval: 6,
      period: 'months',
    })
    const newPypNums = moveArrayElementsToTheRight(pypNums, lapse)
    const index = dow - 1
    return index in newPypNums ? newPypNums[index] : []
  },
})
