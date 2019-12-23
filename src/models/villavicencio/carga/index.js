const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.carga,
  pypData: [pyp190407],
  startDate: '2019-04-07',
  decrees: [
    { name: 'Decreto 222 del 25 de julio de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 245 del 26 de julio de 2017', url: 'cdn:pdf' },
    { name: 'Decreto 010 del 24 de enero de 2017', url: 'cdn:pdf' },
    { name: 'Decreto 131 del 26 de enero de 2016', url: 'cdn:pdf' },
  ],
})
