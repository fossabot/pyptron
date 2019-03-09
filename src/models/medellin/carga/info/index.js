const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

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
      hours: [['7:00', '8:30'], ['17:30', '19:00']],
      days: [],
    },
    {
      comment: 'Modelos anteriores o iguales a 2009',
      hours: [['5:00', '8:30'], ['16:30', '21:00']],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Camiones y volquetas'],
}
