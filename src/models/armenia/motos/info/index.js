const { licensePlateScheme } = require('../../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = {
  days: ['Lunes a viernes hábiles'],
  decrees: [
    { name: 'Decreto 083 de 2016', url: 'cdn:pdf' },
    { name: 'Decreto 059 de 2019', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [
    {
      comment: 'Centro de la ciudad',
      hours: [['7:30', '19:30']],
      days: [],
    },
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
}
