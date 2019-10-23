const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp191022 = require('./191022')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp191022, pyp190407],
})
