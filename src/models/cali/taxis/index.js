const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp190801 = require('./190801')
const pyp190910 = require('./190910')
const pyp200101 = require('./200101')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190407, pyp190801, pyp190910, pyp200101],
  decrees: [
    {
      name: 'Decreto 0570 del 10 de septiembre de 2019',
      url:
        'https://serviciosdetransito.com/images/documentos/2019/Decreto-0570-de-2019-pico-y-placa-taxis.pdf',
    },
    {
      name: 'Decreto 0532 del 29 de julio de 2019',
      url: 'cdn:pdf',
    },
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
