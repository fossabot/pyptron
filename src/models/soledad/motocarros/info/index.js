const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

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
