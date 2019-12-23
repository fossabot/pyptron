const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp190415 = require('./190415')
const pyp190422 = require('./190422')

module.exports = new Category({
  ...Category.metainfo.particulares,
  messages: [],
  pypData: [pyp190407, pyp190415, pyp190422],
  decrees: [
    { name: 'Decreto 083 de 2016', url: 'cdn:pdf' },
    { name: 'Decreto 059 de 2019', url: 'cdn:pdf' },
  ],
})
