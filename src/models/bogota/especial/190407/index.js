const PypData = require('../../../../classes/pyp-data')
const { licensePlateScheme } = require('../../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
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
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de servicio público de transporte terrestre automotor especial, clase automóvil, camioneta o campero, con capacidad para cuatro (4) pasajeros (sin incluir conductor)',
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
