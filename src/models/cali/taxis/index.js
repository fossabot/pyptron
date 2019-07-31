const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp190801 = require('./190801')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190407, pyp190801],
})
