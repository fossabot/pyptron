const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: [
    'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [{ name: '', url: '' }],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Motocicletas'],
}
