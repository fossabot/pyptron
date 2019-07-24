const Category = require('../../../classes/category')
const pyp190304 = require('./190304')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190304],
})
