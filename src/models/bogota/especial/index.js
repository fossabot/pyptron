const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  key: Category.categoryKey.especial,
  pypData: [pyp190407],
})
