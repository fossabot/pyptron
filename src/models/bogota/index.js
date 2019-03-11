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
      url:
        'http://www.bogota.gov.co/temas-de-ciudad/ambiente/bogota-vuelve-al-pico-y-placa-normal-gracias-al-mejoramiento-de-la-calidad-del-aire?utm_source=pyphoy&utm_medium=alta&utm_campaign=pico%20y%20placa',
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
