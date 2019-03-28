const { licensePlateScheme } = require('../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../helpers/dateHelpers')

module.exports = {
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
      comment: '',
      hours: [['6:00', '8:30'], ['15:00', '19:30']],
      days: [1, 2, 3, 4, 5],
    },
  ],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const dateObject = newISODate(date)
    const pyp = [[0, 2, 4, 6, 8], [1, 3, 5, 7, 9]]
    return pyp[dateObject.getDate() % 2]
  },
}
