const medellinTaxis = require('../../medellin/taxis')

module.exports = {
  info: {
    vehicleClasses: medellinTaxis.info.vehicleClasses,
    decrees: [
      {
        name: 'Decreto No. 014 del 31 de enero de 2018',
        url:
          'http://www.laestrella.gov.co/institucional/Normas/Decreto%20No.%20014%20del%2031%20de%20enero%20de%202018.PDF',
      },
    ],
    days: medellinTaxis.info.days,
    hours: medellinTaxis.info.hours,
    scheme: medellinTaxis.info.scheme,
    observations:
      'En la jurisdicción del Municipio La Estrella la medida de	restricción vehicular se continuará aplicará en las siguientes vías:	<ul><li>Tramo de la autopista sur (carrera 50) en la jurisdicción del Municipio de La	Estrella.</li><li>Tramo de la variante a Caldas (carrera 48) en la jurisdicción del Municipio	de La Estrella</li><li>Tramo de la Carrera 62A, entre la Calle 73 sur y la Calle 75 sur</li><li>Tramo de la Calle 74 sur, entre la Carrera 62A y Carrera 54</li><ul>',
  },
  name: medellinTaxis.name,
  pyp: medellinTaxis.pyp,
}
