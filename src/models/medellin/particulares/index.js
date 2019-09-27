const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp190930 = require('./190930')
const pyp191102 = require('./191102')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407, pyp190930, pyp191102],
})
