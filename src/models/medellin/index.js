const carga = require('./carga')
const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = {
  name: 'Medellín',
  messages: [
    {
      message:
        'Ampliación de horarios del 18 al 20 de marzo por estado de alerta por calidad del aire.',
      url: 'https://twitter.com/Areametropol/status/1107327209252048897',
    },
  ],
  categories: {
    carga,
    motos,
    particulares,
    taxis,
  },
}
