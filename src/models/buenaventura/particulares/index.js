const Category = require('../../../classes/category')
const pyp190304 = require('./190304')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190304],
})
