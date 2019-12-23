const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp191022 = require('./191022')

module.exports = new Category({
  ...Category.metainfo.motos,
  pypData: [pyp190407, pyp191022],
  decrees: [
    {
      name: 'Decreto 20181000000015 del 2 de enero de 2018',
      url:
        'https://www.popayan.gov.co/sites/default/files/decreto_20181000000015_02012018.pdf',
    },
  ],
})
