const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: [
    'Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [{ name: 'Decreto 0019 del 09 de enero del 2018', url: '' }],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos de Transporte Público Colectivo (TPC)'],
}
