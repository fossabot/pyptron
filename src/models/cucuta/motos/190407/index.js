const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [
    {
      comment: 'Placa del área metropolitana',
      hours: [
        ['7:30', '9:00'],
        ['11:30', '13:30'],
        ['17:30', '19:00'],
      ],
      days: [],
    },
    {
      comment: 'Placa extranjera y nacional',
      hours: [['7:00', '19:00']],
      days: [],
    },
  ],
  maps: [{ name: 'Mapa pico y placa Cúcuta 2019', url: 'cdn:jpg' }],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos automotores particulares de dos tiempos tipo motocicleta, mototriciclos, cuatrimotos y motocarros',
  ],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      [1, 2], // lunes
      [3, 4], // martes
      [5, 6], // miércoles
      [7, 8], // jueves
      [9, 0], // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
