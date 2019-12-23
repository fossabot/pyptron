const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.motos,
  pypData: [pyp190407],
  decrees: [
    { name: 'Decreto 1035 del 5 de septiembre de 2018', url: 'cdn:pdf' },
  ],
})
