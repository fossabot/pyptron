const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407],
  decrees: [
    { name: 'Decreto 872 del 22 de noviembre de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 241 del 26 de marzo de 2016', url: 'cdn:pdf' },
    { name: 'Decreto 516 del 21 de julio de 2015', url: 'cdn:pdf' },
    { name: 'Decreto 193 del 6 de marzo de 2015', url: 'cdn:pdf' },
  ],
})
