const { licensePlateScheme } = require('../../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

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
      hours: [['5:00', '10:00'], ['16:00', '20:00']],

      days: [],
    },
    {
      comment: 'Modelos anteriores o iguales a 1996',
      hours: [['5:00', '21:00']],
      days: [],
    },
  ],
  maps: [],
  observations,
  scheme: licensePlateScheme.firstNumber,
  vehicleClasses: ['Motos de dos y cuatro tiempos'],
}
