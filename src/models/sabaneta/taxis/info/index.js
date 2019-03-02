const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: ['Días hábiles de la semana - lunes a viernes.'],
  decrees: [
    {
      name: 'Decreto Nº 29 del 30 de enero de 2018',
      url:
        'http://www.sabaneta.gov.co/institucional/Normas/DECRETO_029_2018.pdf',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '20:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Transporte público individual - taxis'],
}
