const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp191226 = require('./191226')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407, pyp191226],
})
