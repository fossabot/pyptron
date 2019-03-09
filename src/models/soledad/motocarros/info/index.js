const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Todos los días de la semana'],
  decrees: [{ name: 'Decreto 288 de 2017', url: 'cdn:pdf' }],
  exceptions,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Restricción de circulación de motocarros, según el color del mismo',
  ],
}
