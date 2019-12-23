const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [
    {
      name: 'decreto 508 de 2019',
      url:
        'https://www.santamarta.gov.co/sites/default/files/decreto_508_de_4_dic_2019.pdf',
    },
    { name: 'Decreto 349 de 2017', url: 'cdn:pdf' },
    { name: 'Decreto 070 de 2018', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '19:00']], days: [] }],
  maps: [{ name: 'Mapa pico y placa santa marta', url: 'cdn:jpg' }],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos automotores de servicio particular'],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      [6, 7], // lunes
      [8, 9], // martes
      [0, 1], // miércoles
      [2, 3], // jueves
      [4, 5], // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
