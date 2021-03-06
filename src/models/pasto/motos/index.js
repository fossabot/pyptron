const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.motos,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Decreto 2000 del 8 de julio de 2019',
      url:
        'https://www.pasto.gov.co/index.php/decretos/decretos-2019?download=14705:dec_0200_08_jul_2019',
    },
    {
      name: 'Decreto 0184 del 8 de junio de 2018',
      url:
        'https://www.pasto.gov.co/index.php/decretos/decretos-2018?download=12087:dec-0184-08-jun-2018',
    },
    {
      name: 'Decreto 0201 del 18 de mayo de 2017',
      url:
        'http://www.pasto.gov.co/index.php/decretos/decretos-2017?download=10061:dec_0201_18_may_2017',
    },
  ],
})
