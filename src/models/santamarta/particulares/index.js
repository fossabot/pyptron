const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp191224 = require('./191224')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407, pyp191224],
  decrees: [
    {
      name: 'decreto 508 de 2019',
      url:
        'https://www.santamarta.gov.co/sites/default/files/decreto_508_de_4_dic_2019.pdf',
    },
    { name: 'Decreto 349 de 2017', url: 'cdn:pdf' },
    { name: 'Decreto 070 de 2018', url: 'cdn:pdf' },
  ],
})
