const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407],
  decrees: [
    { name: 'Decreto 1361 del 29 de noviembre de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 1550 del 30 de noviembre de 2017', url: 'cdn:pdf' },
  ],
})
