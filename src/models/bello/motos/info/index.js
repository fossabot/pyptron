const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const scheme = require('./scheme.md')

module.exports = {
  days: ['Días hábiles de la semana - lunes a viernes.'],
  decrees: [
    {
      name: 'Decreto 053 del 29 de enero de 2018',
      url:
        'http://www.Bello.gov.co/secretaria-movilidad/SiteAssets/008_DOCUMENTOS/DOCUMENTOS/2018/01/DECRETO%20053%20DE%202018.pdf',
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
