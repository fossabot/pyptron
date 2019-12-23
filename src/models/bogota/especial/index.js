const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.especial,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Decreto 248 del 14 de junio de 2016',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=66359',
    },
    {
      name: 'Calendario pico y placa primer semestre 2018 unificado',
      url: 'cdn:pdf',
    },
    {
      name: 'Calendario pico y placa segundo semestre 2018 unificado',
      url: 'cdn:pdf',
    },
  ],
})
