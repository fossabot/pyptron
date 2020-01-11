const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp191224 = require('./191224')
const pyp191230 = require('./191230')

module.exports = new Category({
  ...Category.metainfo.tpc,
  pypData: [pyp190407, pyp191224, pyp191230],
  decrees: [
    { name: 'Resolución 215 de 2019', url: 'cdn:pdf' },
    { name: 'Resolución 308 de 2018', url: 'cdn:pdf' },
    { name: 'Resolución 298 de 2017', url: '' },
  ],
})
