const City = require('../../classes/city')
const carga = require('./carga')
const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = new City({
  name: 'Villavicencio',
  categories: {
    carga,
    motos,
    particulares,
    taxis,
  },
})
