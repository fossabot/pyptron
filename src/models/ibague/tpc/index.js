const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.tpc,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Decreto 0387 del 11 de abril de 2016',
      url:
        'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2016/13967-DEC-20160415.pdf',
    },
  ],
})
