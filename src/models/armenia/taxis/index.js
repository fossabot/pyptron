const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190407],
  decrees: [{ name: 'Decreto 083 de 2016', url: 'cdn:pdf' }],
})
