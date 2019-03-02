const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: [
    'Lunes a sábado (No se aplicará en los días festivos establecidos por la Ley).',
  ],
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
  exceptions,
  hours: [{ comment: '', hours: [['5:30', '21:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos de servicio público de transporte terrestre automotor especial, clase automóvil, camioneta o campero, con capacidad para cuatro (4) pasajeros (sin incluir conductor)',
  ],
}
