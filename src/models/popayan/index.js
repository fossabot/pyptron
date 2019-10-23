const City = require('../../classes/city')
const motos = require('./motos')
const particulares = require('./particulares')
const tpc = require('./tpc')

module.exports = new City({
  name: 'Popayán',
  messages: [],
  categories: {
    motos,
    particulares,
    tpc,
  },
})
