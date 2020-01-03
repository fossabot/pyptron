const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.tpc,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Decreto 0001 del 4 de enero de 2018',
      url:
        'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496',
    },
  ],
})
