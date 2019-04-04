const City = require('../../classes/city')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = new City({
  name: 'Tunja',
  categories: {
    particulares,
    taxis,
  },
})
