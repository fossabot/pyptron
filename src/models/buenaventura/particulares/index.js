const Category = require('../../../classes/category')
const pyp190304 = require('./190304')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190304],
  decrees: [
    {
      name: 'Decreto 0289 del 04 de marzo del 2019',
      url:
        'http://www.buenaventura.gov.co/images/multimedia/20190312_decreto_no_0289___modifica_decreto_050_de_2019_pico_y_placa_2019.pdf',
    },
    { name: 'Decreto 0019 del 09 de enero del 2018', url: '' },
  ],
})
