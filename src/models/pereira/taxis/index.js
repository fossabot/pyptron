const Category = require('../../../classes/category')
const pyp190113 = require('./190113')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190113],
  decrees: [
    {
      name: 'Resolución No. 11 de 2019',
      url: 'http://amco.gov.co/Archivos/Articulos/Documentos/00002476.pdf',
    },
  ],
})
