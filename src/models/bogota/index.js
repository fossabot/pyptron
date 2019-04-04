const City = require('../../classes/city')
const carga = require('./carga')
const especial = require('./especial')
const particulares = require('./particulares')
const motos = require('./motos')
const taxis = require('./taxis')
const tpc = require('./tpc')

module.exports = new City({
  name: 'Bogotá',
  messages: [],
  categories: {
    carga,
    especial,
    particulares,
    motos,
    taxis,
    tpc,
  },
})
