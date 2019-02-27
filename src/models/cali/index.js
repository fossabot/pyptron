const particulares = require('./particulares')
const taxis = require('./taxis')
const tpc = require('./tpc')

module.exports = {
  name: 'Cali',
  categories: {
    particulares,
    taxis,
    tpc,
  },
}
