const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp190415 = require('./190415')
const pyp190422 = require('./190422')

module.exports = new Category({
  key: Category.categoryKey.particulares,
  messages: [],
  pypData: [pyp190407, pyp190415, pyp190422],
})
