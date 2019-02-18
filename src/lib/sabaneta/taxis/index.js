const medellinTaxis = require('../../medellin/taxis')

module.exports = {
  info: {
    vehicleClasses: medellinTaxis.info.vehicleClasses,
    decrees: [
      {
        name: 'Decreto Nº 29 del 30 de enero de 2018',
        url:
          'http://www.sabaneta.gov.co/institucional/Normas/DECRETO_029_2018.pdf',
      },
    ],
    days: medellinTaxis.info.days,
    hours: medellinTaxis.info.hours,
    scheme: medellinTaxis.info.scheme,
    observations:
      'En la jurisdicción del municipio de Sabaneta la medida aplica en las siguientes vías: <ul><li>Variante a Caldas, Calle 84 sur entre carrera 26 y carrera 49.</li><li>Avenida Regional, Carrera 49 entre Calle 50 sur y Calle83 sur.</li><li> Avenida Las Vegas, Carrera 48 entre Calle 50 Sur y Calle 77 Sur.</li><li>Avenida El Poblado, Carrera 43 A entre Calle 50 Sur y Calle 66 Sur</li></ul>',
  },
  name: medellinTaxis.name,
  pyp: medellinTaxis.pyp,
}
