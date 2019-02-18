const medellinTaxis = require('../../medellin/taxis')

module.exports = {
  info: {
    vehicleClasses: medellinTaxis.info.vehicleClasses,
    decrees: [
      {
        name: 'Decreto 053 del 29 de enero de 2018',
        url:
          'http://www.envigado.gov.co/secretaria-movilidad/SiteAssets/008_DOCUMENTOS/DOCUMENTOS/2018/01/DECRETO%20053%20DE%202018.pdf',
      },
    ],
    days: medellinTaxis.info.days,
    hours: medellinTaxis.info.hours,
    scheme: medellinTaxis.info.scheme,
    observations: medellinTaxis.info.observations.replace(
      'Medellín',
      'Envigado'
    ),
  },
  name: medellinTaxis.name,
  pyp: medellinTaxis.pyp,
}
