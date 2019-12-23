const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp190930 = require('./190930')
const pyp191102 = require('./191102')

module.exports = new Category({
  ...Category.metainfo.motos,
  pypData: [pyp190407, pyp190930, pyp191102],
  decrees: [
    {
      name: 'Decreto 0116 de 2018',
      url:
        'https://www.medellin.gov.co/movilidad/jdownloads/Normas/Normatividad/Decretos%20Municipales/2018/decreto_0116_de_2018.pdf',
    },
  ],
})
