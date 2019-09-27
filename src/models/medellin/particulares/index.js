const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp190930 = require('./190930')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407, pyp190930],
})
