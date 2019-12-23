const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.motos,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Resolución 108 de 2018',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/108-03-2018.pdf',
    },
    {
      name: 'Resolución 435 de 2017',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/435-08-2017.pdf',
    },
    {
      name: 'Resolución 782 de 2017',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/782-12-2017.pdf',
    },
    {
      name: 'Resolución 783 de 2017',
      url:
        'http://transitobucaramanga.gov.co/resolucion/archivos/783-12-2017.pdf',
    },
  ],
})
