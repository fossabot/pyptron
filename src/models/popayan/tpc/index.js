const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.tpc,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Decreto 20181000000015 del 2 de enero de 2018',
      url:
        'https://www.popayan.gov.co/sites/default/files/decreto_20181000000015_02012018.pdf',
    },
  ],
})
