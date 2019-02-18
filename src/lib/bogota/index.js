const ambiental = require('./ambiental')
const especial = require('./especial')
const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')
const tpc = require('./tpc')

module.exports = {
  name: 'Bogotá',
  categories: {
    ambiental,
    especial,
    motos,
    particulares,
    taxis,
    tpc,
  },
}
