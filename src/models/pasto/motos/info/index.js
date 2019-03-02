const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

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
  scheme,
  vehicleClasses: ['Motocicletas'],
}
