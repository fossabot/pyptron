const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: [
    'Lunes a sábado (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    {
      name: 'Decreto 660 del 27 de agosto de 2001',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4643',
    },
    {
      name: 'Decreto 058 del 10 de marzo de 2003',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=7182',
    },
    {
      name: 'Decreto 051 del 20 de febrero de 2004',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=12124',
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
  hours: [{ comment: '', hours: [['5:30', '21:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
}
