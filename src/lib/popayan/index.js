const motos = require('./motos')
const particulares = require('./particulares')
const tpc = require('./tpc')

module.exports = {
  name: 'Popayán',
  categories: {
    motos,
    particulares,
    tpc,
  },
}
