const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  key: 'taxis',
  pypData: [pyp190407],
})
