const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407],
  decrees: [
    { name: 'Decreto 0475 de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 0547 de 2017', url: 'cdn:pdf' },
  ],
})
