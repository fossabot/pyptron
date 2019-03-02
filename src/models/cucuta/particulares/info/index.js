const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: ['Lunes a viernes hábiles'],
  decrees: [
    {
      name: 'Decreto 0300 de 2019',
      url: 'cdn:pdf',
    },
    {
      name: 'Decreto 0221 de 2019',
      url: 'cdn:pdf',
    },
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
  maps: [
    {
      name: 'Mapa pico y placa Cúcuta 2019',
      url: 'cdn:jpg',
    },
  ],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos automotores particulares de dos tiempos tipo motocicleta, mototriciclos, cuatrimotos y motocarros',
  ],
}
