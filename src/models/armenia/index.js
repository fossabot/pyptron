const City = require('../../classes/city')
const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = new City({
  name: 'Armenia',
  messages: [
    {
      message:
        'Se levanta la medida de Pico y Placa en toda la ciudad para toda clase de vehículos particulares a excepción de las motocicletas y similares.',
      url: 'https://twitter.com/AlcaldiaArmenia/status/1116466337172402176',
    },
  ],
  categories: {
    motos,
    particulares,
    taxis,
  },
})
