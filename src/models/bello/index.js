const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = {
  name: 'Bello',
  categories: {
    motos,
    particulares,
    taxis,
  },
}
