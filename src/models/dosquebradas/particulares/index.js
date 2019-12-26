const Category = require('../../../classes/category')
const pyp1911003 = require('./191003')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp1911003],
  decrees: [
    {
      name: 'Decreto 268 del 03 de octube de 2019',
      url:
        'https://www.dosquebradas.gov.co/web/index.php/component/jdownloads/send/283-decretos-2019/2151-decreto-n-268-de-03-de-octubre-de-2019?Itemid=0',
    },
  ],
})
