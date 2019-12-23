const Category = require('../../../classes/category')
const pyp190407 = require('./190407')

module.exports = new Category({
  ...Category.metainfo.carga,
  pypData: [pyp190407],
  decrees: [
    {
      name: 'Decreto 060 de 2019',
      url:
        'https://es.scribd.com/document/400064441/Decreto-060-de-2019#fullscreen  info,from_embed',
    },
    {
      name: 'Decreto 325 del 16 de agosto de 2006',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=21050',
    },
    {
      name: 'Decreto 174 de 2006',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=56330',
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
