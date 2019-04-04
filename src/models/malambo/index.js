const City = require('../../classes/city')
const motocarros = require('./motocarros')
const motos = require('./motos')

module.exports = new City({
  name: 'Malambo',
  categories: {
    motocarros,
    motos,
  },
})
