const ambiental = require('./ambiental')
const especial = require('./especial')
const particulares = require('./particulares')
const motos = require('./motos')
const taxis = require('./taxis')
const tpc = require('./tpc')

module.exports = {
  name: 'Bogotá',
  categories: {
    ambiental,
    especial,
    particulares,
    motos,
    taxis,
    tpc,
  },
}
