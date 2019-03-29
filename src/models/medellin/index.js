const carga = require('./carga')
const motos = require('./motos')
const particulares = require('./particulares')
const taxis = require('./taxis')

module.exports = {
  name: 'Medellín',
  messages: [
    {
      message:
        'Estado de prevención por calidad del aire en los 10 municipios del Valle de Aburrá para el viernes 29 y el sábado 30 de marzo.',
      url: 'https://twitter.com/Areametropol/status/1111437594447896577',
    },
  ],
  categories: {
    carga,
    motos,
    particulares,
    taxis,
  },
}
