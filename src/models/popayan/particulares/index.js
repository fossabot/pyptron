const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp191022 = require('./191022')
const pyp200102 = require('./200102')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407, pyp191022, pyp200102],
  decrees: [
    {
      name: 'Decreto 20201000000075 del 2 de enero del 2020',
      url: 'http://www.popayan.gov.co/sites/default/files/decreto.pdf',
    },
    {
      name: 'Decreto 20191000004255 del 21 de octubre de 2019',
      url:
        'http://popayan.gov.co/sites/default/files/decreto_restriccion_de_automotores_particulares_2019.pdf',
    },
    {
      name: 'Decreto 20181000000015 del 2 de enero de 2018',
      url:
        'https://www.popayan.gov.co/sites/default/files/decreto_20181000000015_02012018.pdf',
    },
  ],
})
