const { licensePlateScheme } = require('../../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = {
  days: ['Lunes a viernes.'],
  decrees: [
    { name: 'Decreto 1035 del 5 de septiembre de 2018', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['5:00', '23:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos tipo motocicleta de cualquier modalidad y cilindraje, incluyendo cuatrimotos, tricimotos, motocarros y bicicletas con pedalea asistido con motor.',
  ],
}
