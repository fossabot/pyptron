const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = {
  name: 'Cartagena',
  categories: {
    motos,
    particulares,
    taxis,
  },
}
