const City = require('../../classes/city')
const taxis = require('./taxis')

module.exports = new City({
  name: 'Barranquilla',
  categories: {
    taxis,
  },
})
