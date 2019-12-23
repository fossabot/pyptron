const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Decreto 11-0160 del 29 de febrero de 2008',
      url:
        'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2008/DECRETO%20160.PDF',
    },
  ],
})
