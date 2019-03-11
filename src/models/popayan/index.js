const motos = require('./motos')
const particulares = require('./particulares')
const tpc = require('./tpc')

module.exports = {
  name: 'Popayán',
  messages: [
    {
      message:
        'A partir del 1 de enero de 2019 y hasta nuevo aviso se levanta la medida de pico y placa en toda la ciudad.',
      url: 'https://twitter.com/AlcaldiaPopayan/status/1078043289788518402',
    },
  ],
  categories: {
    motos,
    particulares,
    tpc,
  },
}
