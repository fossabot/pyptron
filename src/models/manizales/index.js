const particulares = require('./particulares')
const taxis = require('./taxis')
const tpc = require('./tpc')

module.exports = {
  name: 'Manizales',
  categories: {
    particulares,
    taxis,
    tpc,
  },
}
