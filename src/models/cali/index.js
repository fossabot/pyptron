const City = require('../../classes/city')
const particulares = require('./particulares')
const taxis = require('./taxis')
const tpc = require('./tpc')

module.exports = new City({
  name: 'Cali',
  messages: [
    {
      message:
        'En la actualidad, no rige medida de pico y placa en Santiago de Cali',
      url:
        'https://www.cali.gov.co/movilidad/publicaciones/151255/en-la-actualidad-no-rige-medida-de-pico-y-placa-en-santiago-de-cali/',
    },
  ],
  categories: {
    particulares,
    taxis,
    tpc,
  },
})
