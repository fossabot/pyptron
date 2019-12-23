const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407],
  decrees: [
    { name: 'Decreto 60 del 22 de octubre de 2018', url: 'cdn:pdf' },
    { name: 'Estudio de tráfico pico y placa enero 2018', url: 'cdn:pdf' },
  ],
})
