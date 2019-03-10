const { licensePlateScheme } = require('../../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = {
  days: [
    'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    {
      name: 'Decreto 0201 del 18 de mayo de 2017',
      url:
        'http://www.pasto.gov.co/index.php/decretos/decretos-2017?download=10061:dec_0201_18_may_2017',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:30', '19:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
}
