const City = require('../../classes/city')
const particulares = require('./particulares')
const taxis = require('./taxis')
const tpc = require('./tpc')

module.exports = new City({
  name: 'Cali',
  categories: {
    particulares,
    taxis,
    tpc,
  },
})
