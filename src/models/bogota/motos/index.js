const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.motos,
  messages: [
    {
      message:
        'No hay medidas de restricción por Pico y placa para motos en Bogotá.',
    },
  ],
  pypData: [pyp190407],
})
