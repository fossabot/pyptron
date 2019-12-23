const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Decreto 0037 de 13 de Enero de 2017',
      url:
        'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2017/16370-DEC-20170116.pdf',
    },
    { name: 'Decreto 0946 de 2018', url: 'cdn:pdf' },
  ],
})
