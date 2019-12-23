const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp191224 = require('./191224')

module.exports = new Category({
  ...Category.metainfo.tpc,
  pypData: [pyp190407, pyp191224],
})
