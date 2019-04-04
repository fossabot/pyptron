const City = require('../../classes/city')
const motos = require('./motos')

module.exports = new City({
  name: 'Turbaco',
  categories: {
    motos,
  },
})
