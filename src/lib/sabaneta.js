import medellin from "./medellin";

export default {
  name: "Sabaneta",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos particulares y oficiales"],
        decrees: [
          {
            name: "Decreto Nº 29 del 30 de enero de 2018",
            url:
              "http://www.sabaneta.gov.co/institucional/Normas/DECRETO_029_2018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["7:00 - 8:30", "17:30 - 19:00"],
        scheme:
          "Restringe la circulación de vehículos particulares y oficiales",
        observations:
          "En la jurisdicción del municipio de Sabaneta la medida aplica en las siguientes vías: <ul><li>Variante a Caldas, Calle 84 sur entre carrera 26 y carrera 49.</li><li>Avenida Regional, Carrera 49 entre Calle 50 sur y Calle83 sur.</li><li> Avenida Las Vegas, Carrera 48 entre Calle 50 Sur y Calle 77 Sur.</li><li>Avenida El Poblado, Carrera 43 A entre Calle 50 Sur y Calle 66 Sur</li></ul>"
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
            name: "Decreto Nº 29 del 30 de enero de 2018",
            url:
              "http://www.sabaneta.gov.co/institucional/Normas/DECRETO_029_2018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["7:00 - 8:30", "17:30 - 19:00"],
        scheme:
          "Restringe la circulación de motos de dos tiempos según el primer número de su placa",
        observations:
          "En la jurisdicción del municipio de Sabaneta la medida aplica en las siguientes vías: <ul><li>Variante a Caldas, Calle 84 sur entre carrera 26 y carrera 49.</li><li>Avenida Regional, Carrera 49 entre Calle 50 sur y Calle83 sur.</li><li> Avenida Las Vegas, Carrera 48 entre Calle 50 Sur y Calle 77 Sur.</li><li>Avenida El Poblado, Carrera 43 A entre Calle 50 Sur y Calle 66 Sur</li></ul>"
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
            name: "Decreto Nº 29 del 30 de enero de 2018",
            url:
              "http://www.sabaneta.gov.co/institucional/Normas/DECRETO_029_2018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["6:00 - 20:00"],
        scheme: "De acuerdo con el último número de la placa del vehículo",
        observations:
          "En la jurisdicción del municipio de Sabaneta la medida aplica en las siguientes vías: <ul><li>Variante a Caldas, Calle 84 sur entre carrera 26 y carrera 49.</li><li>Avenida Regional, Carrera 49 entre Calle 50 sur y Calle83 sur.</li><li> Avenida Las Vegas, Carrera 48 entre Calle 50 Sur y Calle 77 Sur.</li><li>Avenida El Poblado, Carrera 43 A entre Calle 50 Sur y Calle 66 Sur</li></ul>"
      },
      name: "Taxis",
      na: [0, 6],
      pyp: medellin.categories.taxis.pyp
    }
  }
};
