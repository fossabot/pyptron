const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407],
  decrees: [
    { name: 'Decreto 0300 de 2019', url: 'cdn:pdf' },
    { name: 'Decreto 0221 de 2019', url: 'cdn:pdf' },
    {
      name: 'Decretos 0239 del 4 de abril del 2017',
      url:
        'http://www.areacucuta.com/wp-content/uploads/2017/04/Decreto-Pico-y-Placa-Placa-y-D%C3%ADa.pdf',
    },
    {
      name: 'Decretos 0330 del 22 de mayo del 2017',
      url:
        'http://cucutaonline.com/wp-content/uploads/2017/05/Decreto-0330-pico-placa-modificado.pdf',
    },
  ],
})
