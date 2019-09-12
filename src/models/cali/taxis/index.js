const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp190801 = require('./190801')
const pyp190910 = require('./190910')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190407, pyp190801, pyp190910],
})
