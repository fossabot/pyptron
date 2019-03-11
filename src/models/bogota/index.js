const carga = require('./carga')
const especial = require('./especial')
const particulares = require('./particulares')
const motos = require('./motos')
const taxis = require('./taxis')
const tpc = require('./tpc')

module.exports = {
  name: 'Bogotá',
  categories: {
    carga,
    especial,
    particulares,
    motos,
    taxis,
    tpc,
  },
}
