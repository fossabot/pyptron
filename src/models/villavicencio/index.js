const City = require('../../classes/city')
const carga = require('./carga')
const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = new City({
  name: 'Villavicencio',
  messages: [
    {
      message:
        'Entre el 26 de junio y el 3 de julio se levanta temporalmente la medida del pico y placa en el centro de la ciudad.',
      url: 'https://twitter.com/WilmarBarbosa/status/1142121584955678726',
    },
  ],
  categories: {
    carga,
    motos,
    particulares,
    taxis,
  },
})
