const carga = require('./carga')
const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = {
  name: 'Medellín',
  messages: [],
  categories: {
    carga,
    motos,
    particulares,
    taxis,
  },
}
