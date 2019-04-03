const Category = require('../../../classes/category')
const { licensePlateScheme } = require('../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/array-helpers')

module.exports = new Category({
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
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
  excludedDays: [0],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2018-01-01'
    const pypNums = [[7, 8], [9, 0], [1, 2], [3, 4], [5, 6]]
    return getArrayElementAfterRotating({
      date,
      startDate,
      period: 'weeks',
      array: pypNums,
      reverse: true,
    })
  },
})
