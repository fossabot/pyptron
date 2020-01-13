const Category = require('../../../classes/category')
const pyp200114 = require('./200114')

module.exports = new Category({
  ...Category.metainfo.carga,
  pypData: [pyp200114],
  startDate: '2020-01-13',
  decrees: [
    {
      name: 'Decreto 20201000000075 del 2 de enero del 2020',
      url: 'http://www.popayan.gov.co/sites/default/files/decreto.pdf',
    },
    { name: 'Decreto 222 del 25 de julio de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 245 del 26 de julio de 2017', url: 'cdn:pdf' },
    { name: 'Decreto 010 del 24 de enero de 2017', url: 'cdn:pdf' },
    { name: 'Decreto 131 del 26 de enero de 2016', url: 'cdn:pdf' },
  ],
})
