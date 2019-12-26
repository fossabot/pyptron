const Category = require('../../../classes/category')
const pyp191003 = require('./191003')

module.exports = new Category({
  ...Category.metainfo.motos,
  pypData: [pyp191003],
  decrees: [
    {
      name: 'Decreto 268 de 2019',
      url: 'cdn:pdf',
    },
  ],
})
