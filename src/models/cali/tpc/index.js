const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp200101 = require('./200101')

module.exports = new Category({
  ...Category.metainfo.tpc,
  pypData: [pyp190407, pyp200101],
  decrees: [
    {
      name: 'Decreto primer semestre de 2020',
      url:
        'https://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=43453',
    },
    {
      name: 'Decreto 0001 del 4 de enero de 2018',
      url:
        'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496',
    },
  ],
})
