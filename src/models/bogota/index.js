const carga = require('./carga')
const especial = require('./especial')
const particulares = require('./particulares')
const motos = require('./motos')
const taxis = require('./taxis')
const tpc = require('./tpc')

module.exports = {
  name: 'Bogotá',
  messages: [
    {
      message: '2019-03-28: No hay Pico y Placa extendido en Bogotá.',
      url: 'https://twitter.com/Bogota/status/1111391898197991424',
    },
  ],
  categories: {
    carga,
    especial,
    particulares,
    motos,
    taxis,
    tpc,
  },
}
