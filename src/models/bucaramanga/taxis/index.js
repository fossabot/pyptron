const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190407],
  decrees: [
    { name: 'Resolución 277 del 27 de Abril de 2006', url: '' },
    { name: 'Resolución 475 del 23 de Junio de 2006', url: '' },
    { name: 'Resolución 487 del 30 de Junio de 2006', url: '' },
  ],
})
