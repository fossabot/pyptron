const Category = require('../../../classes/category')
const pyp190407 = require('./190407')
const pyp191226 = require('./191226')

module.exports = new Category({
  ...Category.metainfo.particulares,
  pypData: [pyp190407, pyp191226],
  decrees: [
    {
      name: 'Decreto 515 del 22 de Noviembre de 2016',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=55963',
    },
    {
      name: 'Decreto 575 del 17 de diciembre de 2013',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=67497',
    },
    {
      name: 'Decreto 159 del 11 de abril de 2014',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=57155',
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
