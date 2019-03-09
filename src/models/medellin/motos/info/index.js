const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: ['Días hábiles de la semana - lunes a viernes.'],
  decrees: [
    {
      name: 'Decreto 0116 de 2018',
      url:
        'https://www.medellin.gov.co/movilidad/jdownloads/Normas/Normatividad/Decretos%20Municipales/2018/decreto_0116_de_2018.pdf',
    },
  ],
  exceptions,
  hours: [
    {
      comment: 'Modelos posteriores a 1996',
      hours: [['7:00', '8:30'], ['17:30', '19:00']],
      days: [],
    },
    {
      comment: 'Modelos anteriores o iguales a 1996',
      hours: [['5:00', '8:30'], ['16:30', '21:00']],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Motos de dos y cuatro tiempos'],
}
