const { licensePlateScheme } = require('../../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = {
  days: ['Días hábiles de la semana - lunes a viernes.'],
  decrees: [
    {
      name: '',
      url: '',
    },
  ],
  exceptions,
  hours: [
    {
      comment: 'Modelos posteriores a 2009',
      hours: [['5:00', '10:00'], ['16:00', '20:00']],

      days: [],
    },
    {
      comment: 'Modelos anteriores o iguales a 2009',
      hours: [['5:00', '21:00']],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Camiones y volquetas'],
}
