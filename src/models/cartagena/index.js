const City = require('../../classes/city')
const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = new City({
  name: 'Cartagena',
  categories: {
    motos,
    particulares,
    taxis,
  },
})
