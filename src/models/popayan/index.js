const City = require('../../classes/city')
const motos = require('./motos')
const particulares = require('./particulares')
const tpc = require('./tpc')
const carga = require('./carga')

module.exports = new City({
  name: 'Popayán',
  messages: [],
  categories: {
    motos,
    particulares,
    tpc,
    carga,
  },
})
