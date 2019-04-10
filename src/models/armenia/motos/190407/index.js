const PypData = require('../../../../classes/pyp-data')
const { licensePlateScheme } = require('../../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [
    { name: 'Decreto 083 de 2016', url: 'cdn:pdf' },
    { name: 'Decreto 059 de 2019', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [
    { comment: 'Centro de la ciudad', hours: [['7:30', '19:30']], days: [] },
    {
      comment: 'Toda la ciudad',
      hours: [['7:30', '9:30'], ['11:30', '14:30'], ['17:30', '19:30']],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme: licensePlateScheme.firstNumber,
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
