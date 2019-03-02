const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: [
    'Lunes a sábado (No se aplicará en los días domingos y festivos establecidos por la Ley)',
  ],
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
  exceptions,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos de Transporte Público Colectivo (TPC)'],
}
