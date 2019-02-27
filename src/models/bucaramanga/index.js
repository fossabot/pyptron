const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = {
  name: 'Bucaramanga',
  categories: {
    motos,
    particulares,
    taxis,
  },
}
