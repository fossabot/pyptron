const { licensePlateScheme } = require('../../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = {
  days: [
    'Lunes a sábado (No se aplicará en los días festivos establecidos por la Ley)',
    'Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    {
      name: 'Decreto 060 de 2019',
      url:
        'https://es.scribd.com/document/400064441/Decreto-060-de-2019#fullscreen&from_embed',
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
  exceptions,
  hours: [
    {
      comment: 'Transporte Público Colectivo',
      hours: [['6:00', '10:00']],
      days: [],
    },
    {
      comment: 'Transporte de Carga más de cinco toneladas',
      hours: [['9:00', '10:00']],
      days: [],
    },
    {
      comment: 'Transporte de Carga más de dos toneladas',
      hours: [['6:00', '10:00']],
      days: [],
    },
  ],
  maps: [
    {
      name: 'Pico y placa ambiental carga dos toneladas',
      url: 'cdn:jpg',
    },
  ],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de Transporte Público Colectivo de pasajeros',
    'Vehículos de Transporte de Carga',
  ],
}
