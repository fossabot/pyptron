const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: ['Días hábiles de la semana - lunes a viernes.'],
  decrees: [
    {
      name: 'Decreto 067 del 31 de enero de 2018',
      url:
        'https://www.transitoitagui.gov.co/wp-content/uploads/2018/02/DECRETO-067-DEL-31-1-2018-DECRETO-PICO-Y-PLACA.pdf',
    },
  ],
  exceptions,
  hours: [
    { comment: '', hours: [['7:00', '8:30'], ['17:30', '19:00']], days: [] },
  ],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Motos de dos tiempos'],
}
