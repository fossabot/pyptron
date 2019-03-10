const { licensePlateScheme } = require('../../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = {
  days: ['Lunes a viernes hábiles'],
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
  exceptions,
  hours: [
    {
      comment: 'Sábado',
      hours: [['6:30', '18:00']],
      days: [6],
    },
    {
      comment: 'Domingo',
      hours: [['6:30', '15:00']],
      days: [0],
    },
    {
      comment: 'Lunes a viernes',
      hours: [['6:00', '19:30']],
      days: [1, 2, 3, 4, 5],
    },
  ],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Motos de servicio particular'],
}
