const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.tpc,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Decreto 444 de 2014',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=59702',
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
