const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp191220 = require('./191220')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190407, pyp191220],
  decrees: [
    {
      name: 'decreto 508 de 2019',
      url:
        'https://www.santamarta.gov.co/sites/default/files/decreto_508_de_4_dic_2019.pdf',
    },
    { name: 'Decreto 043 de 2019', url: 'cdn:pdf' },
    { name: 'decreto 068 de 2018', url: 'cdn:pdf' },
  ],
})
