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
    { comment: '', hours: [['7:00', '8:30'], ['17:30', '19:00']], days: [] },
  ],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos particulares y oficiales'],
}
