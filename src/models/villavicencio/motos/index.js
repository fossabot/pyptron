const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp190626 = require('./190626')
const pyp190704 = require('./190704')
const pyp190801 = require('./190801')

module.exports = new Category({
  ...Category.metainfo.motos,
  pypData: [pyp190407, pyp190626, pyp190704, pyp190801],
})
