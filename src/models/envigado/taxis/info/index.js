const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: ['Días hábiles de la semana - lunes a viernes.'],
  decrees: [
    {
      name: 'Decreto 053 del 29 de enero de 2018',
      url:
        'http://www.envigado.gov.co/secretaria-movilidad/SiteAssets/008_DOCUMENTOS/DOCUMENTOS/2018/01/DECRETO%20053%20DE%202018.pdf',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '20:00']], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Transporte público individual - taxis'],
}
