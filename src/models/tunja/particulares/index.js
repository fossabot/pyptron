const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Decreto No. 0201 del 13 de junio de 2016',
      url:
        'http://tunja-boyaca.gov.co/apc-aa-files/63353630666563646636613430366433/2016-decreto-0201-del-13jun2016.pdf',
    },
    {
      name: 'Decreto 0151 del 22 de marzo 2013',
      url:
        'http://www.tunja-boyaca.gov.co/apc-aa-files/63353630666563646636613430366433/decreto-no_0151-del-22mar2013.pdf',
    },
  ],
})
