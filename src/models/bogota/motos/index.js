const Category = require('../../../classes/category')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = new Category({
  ...Category.getCategoryMetainfo('motos'),
  decrees: [{ name: '', url: '' }],
  exceptions,
  hours: [{ comment: '', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme: '',
  vehicleClasses: ['Motocicletas'],
  excludedDays: [],
  skipHolidays: true,
  messages: [
    {
      message:
        'No hay medidas de restricción por Pico y placa para motos en Bogotá.',
    },
  ],
  pypFunction() {
    return []
  },
})
