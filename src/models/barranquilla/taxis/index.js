const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp190407],
  decrees: [
    { name: 'Decreto 0205 de 2009', url: 'cdn:pdf' },
    {
      name: 'BOLETÍN  229',
      url:
        'http://www.barranquilla.gov.co/transito/index.php?option=com_content  info,view=article  info,id=16213:se-mantiene-el-pico-y-placa-para-taxis-en-el-2018  info,catid=36:boletines  info,Itemid=30',
    },
  ],
})
