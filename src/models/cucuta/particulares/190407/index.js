const PypData = require('../../../../classes/pyp-data')
const { licensePlateScheme } = require('../../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [
    { name: 'Decreto 0300 de 2019', url: 'cdn:pdf' },
    { name: 'Decreto 0221 de 2019', url: 'cdn:pdf' },
    {
      name: 'Decretos 0239 del 4 de abril del 2017',
      url:
        'http://www.areacucuta.com/wp-content/uploads/2017/04/Decreto-Pico-y-Placa-Placa-y-D%C3%ADa.pdf',
    },
    {
      name: 'Decretos 0330 del 22 de mayo del 2017',
      url:
        'http://cucutaonline.com/wp-content/uploads/2017/05/Decreto-0330-pico-placa-modificado.pdf',
    },
  ],
  exceptions,
  hours: [
    {
      comment: 'Placa del área metropolitana',
      hours: [['7:30', '9:00'], ['11:30', '13:30'], ['17:30', '19:00']],
      days: [],
    },
    {
      comment: 'Placa extranjera y nacional',
      hours: [['7:00', '19:00']],
      days: [],
    },
  ],
  maps: [{ name: 'Mapa pico y placa Cúcuta 2019', url: 'cdn:jpg' }],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos automotores particulares de dos tiempos tipo motocicleta, mototriciclos, cuatrimotos y motocarros',
  ],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const pyp = [
      [1, 2], // lunes
      [3, 4], // martes
      [5, 6], // miércoles
      [7, 8], // jueves
      [9, 0], // viernes
    ]
    return pyp[newISODate(date).getDay() - 1]
  },
})
