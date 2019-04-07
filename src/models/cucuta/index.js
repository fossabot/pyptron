const City = require('../../classes/city')
const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = new City({
  name: 'Cúcuta',
  categories: {
    motos,
    particulares,
    taxis,
  },
})
