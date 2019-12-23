const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.motos,
  pypData: [pyp190407],
  decrees: [{ name: 'Decreto 257 de 2017', url: '' }],
})
