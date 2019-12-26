const City = require('../../classes/city')
const motos = require('./motos')
const particulares = require('./particulares')

module.exports = new City({
  name: 'Dosquebradas',
  categories: {
    motos,
    particulares,
  },
})
