const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp190626 = require('./190626')
const pyp190704 = require('./190704')
const pyp190801 = require('./190801')

module.exports = new Category({
  ...Category.metainfo.motos,
  pypData: [pyp190407, pyp190626, pyp190704, pyp190801],
  decrees: [
    {
      name: 'Decreto 347 de 2019',
      url:
        'http://www.transitodevillavicencio.gov.co/Normatividad/Documentos/Decreto%20No%20347%20de%2024%20julio%202019.pdf',
    },
    { name: 'Decreto 222 del 25 de julio de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 245 del 26 de julio de 2017', url: 'cdn:pdf' },
  ],
})
