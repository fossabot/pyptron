const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = {
  name: 'Santa Marta',
  categories: {
    motos,
    particulares,
    taxis,
  },
}
