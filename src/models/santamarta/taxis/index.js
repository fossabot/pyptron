const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp191220 = require('./191220')
const pyp200108 = require('./200108')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190407, pyp191220, pyp200108],
})
