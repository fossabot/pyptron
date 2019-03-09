const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Días hábiles de la semana - lunes a viernes.'],
  decrees: [
    {
      name: 'Decreto No. 014 del 31 de enero de 2018',
      url:
        'http://www.laestrella.gov.co/institucional/Normas/Decreto%20No.%20014%20del%2031%20de%20enero%20de%202018.PDF',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '20:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Transporte público individual - taxis'],
}
