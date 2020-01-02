const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp200101 = require('./200101')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407, pyp200101],
  decrees: [
    {
      name: 'Decreto 0801 de 2018',
      url:
        'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=32835',
    },
    {
      name: 'Decreto 4112.010.20.0318-28/06/2018 del 28 de junio de 2018',
      url:
        'http://www.cali.gov.co/aplicaciones/boletin_publicaciones/imagenes_documentos/documentoId11660.pdf',
    },
    {
      name: 'Decreto 0001 del 4 de enero de 2018',
      url:
        'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496',
    },
  ],
})
