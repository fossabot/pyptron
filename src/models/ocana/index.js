const City = require('../../classes/city')
const particulares = require('./particulares')

module.exports = new City({
  name: 'Ocaña',
  categories: {
    particulares,
  },
})
