const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp191224 = require('./191224')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190407, pyp191224],
  decrees: [
    { name: 'Resolución 308 de 2019', url: 'cdn:pdf' },
    { name: 'Resolución 298 de 2017', url: '' },
  ],
})
