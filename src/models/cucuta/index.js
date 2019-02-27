const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = {
  name: 'Cúcuta',
  categories: {
    motos,
    particulares,
    taxis,
  },
}
