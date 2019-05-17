const Category = require('../../../classes/category')
const pyp180101 = require('./180101')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp180101],
})
