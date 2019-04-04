const Category = require('../../../classes/category')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const particulares = require('../particulares')

module.exports = new Category({
  ...particulares,
  ...Category.getCategoryMetainfo('carga'),
  decrees: [{ name: '', url: '' }],
  exceptions,
  hours: [
    {
      ...particulares.hours[0],
      comment: 'Modelos posteriores a 2009',
    },
    {
      ...particulares.hours[1],
      comment: 'Modelos anteriores o iguales a 2009',
    },
  ],
  observations,
  vehicleClasses: ['Camiones y volquetas'],
})
