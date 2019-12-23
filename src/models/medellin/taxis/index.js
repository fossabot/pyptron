const Category = require('../../../classes/category')
const pyp180101 = require('./180101')

module.exports = new Category({
  ...Category.metainfo.taxis,
  pypData: [pyp180101],
  decrees: [
    {
      name: 'Decreto 0116 de 2018',
      url:
        'https://www.medellin.gov.co/movilidad/jdownloads/Normas/Normatividad/Decretos%20Municipales/2018/decreto_0116_de_2018.pdf',
    },
  ],
})
