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
      message:
        'Bogotá vuelve al Pico y placa normal gracias al mejoramiento de la calidad del aire.',
      url: 'https://www.facebook.com/AlcaldiaBogota/posts/1106231382834243',
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
