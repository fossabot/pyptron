const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Decreto 1483 de diciembre de 2018',
      url:
        'http://www.transitocartagena.gov.co/links/Decretos/Decretos_2018/Decreto_1483.PDF',
    },
    { name: 'Decreto 1659 de diciembre de 2017', url: 'cdn:pdf' },
  ],
})
