import medellin from "./medellin";

export default {
  name: "La Estrella",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos particulares y oficiales"],
        decrees: [
          {
            name: "Decreto No. 014 del 31 de enero de 2018",
            url:
              "http://www.laestrella.gov.co/institucional/Normas/Decreto%20No.%20014%20del%2031%20de%20enero%20de%202018.PDF"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["7:00 - 8:30", "17:30 - 19:00"],
        scheme:
          "Restringe la circulación de vehículos particulares y oficiales",
        observations:
          "En la jurisdicción del Municipio La Estrella la medida de	restricción vehicular se continuará aplicará en las siguientes vías:	<ul><li>Tramo de la autopista sur (carrera 50) en la jurisdicción del Municipio de La	Estrella.</li><li>Tramo de la variante a Caldas (carrera 48) en la jurisdicción del Municipio	de La Estrella</li><li>Tramo de la Carrera 62A, entre la Calle 73 sur y la Calle 75 sur</li><li>Tramo de la Calle 74 sur, entre la Carrera 62A y Carrera 54</li><ul>"
      },
      name: "Particulares",
      na: [0, 6],
      pyp: medellin.categories.particulares.pyp
    },
    motos: {
      info: {
        vehicleClasses: ["Motos de dos tiempos"],
        decrees: [
          {
            name: "Decreto No. 014 del 31 de enero de 2018",
            url:
              "http://www.laestrella.gov.co/institucional/Normas/Decreto%20No.%20014%20del%2031%20de%20enero%20de%202018.PDF"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["7:00 - 8:30", "17:30 - 19:00"],
        scheme:
          "Restringe la circulación de motos de dos tiempos según el primer número de su placa",
        observations:
          "En la jurisdicción del Municipio La Estrella la medida de	restricción vehicular se continuará aplicará en las siguientes vías:	<ul><li>Tramo de la autopista sur (carrera 50) en la jurisdicción del Municipio de La	Estrella.</li><li>Tramo de la variante a Caldas (carrera 48) en la jurisdicción del Municipio	de La Estrella</li><li>Tramo de la Carrera 62A, entre la Calle 73 sur y la Calle 75 sur</li><li>Tramo de la Calle 74 sur, entre la Carrera 62A y Carrera 54</li><ul>"
      },
      name: "Motos",
      na: [0, 6],
      pyp: medellin.categories.motos.pyp
    },
    taxis: {
      info: {
        vehicleClasses: ["Transporte público individual - taxis"],
        decrees: [
          {
            name: "Decreto No. 014 del 31 de enero de 2018",
            url:
              "http://www.laestrella.gov.co/institucional/Normas/Decreto%20No.%20014%20del%2031%20de%20enero%20de%202018.PDF"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["6:00 - 20:00"],
        scheme: "De acuerdo con el último número de la placa del vehículo",
        observations:
          "En la jurisdicción del Municipio La Estrella la medida de	restricción vehicular se continuará aplicará en las siguientes vías:	<ul><li>Tramo de la autopista sur (carrera 50) en la jurisdicción del Municipio de La	Estrella.</li><li>Tramo de la variante a Caldas (carrera 48) en la jurisdicción del Municipio	de La Estrella</li><li>Tramo de la Carrera 62A, entre la Calle 73 sur y la Calle 75 sur</li><li>Tramo de la Calle 74 sur, entre la Carrera 62A y Carrera 54</li><ul>"
      },
      name: "Taxis",
      na: [0, 6],
      pyp: medellin.categories.taxis.pyp
    }
  }
};
