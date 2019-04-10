const PypData = require('../../../../classes/pyp-data')
const { licensePlateScheme } = require('../../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [
    { name: 'Decreto 60 del 22 de octubre de 2018', url: 'cdn:pdf' },
    { name: 'Estudio de tráfico pico y placa enero 2018', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos particulares no matriculados en el municipio de Ocaña',
  ],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      [0, 1], // lunes
      [2, 3], // martes
      [4, 5], // miércoles
      [6, 7], // jueves
      [8, 9], // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
