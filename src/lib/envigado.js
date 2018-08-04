import medellin from "./medellin";

export default {
  name: "Envigado",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos particulares y oficiales"],
        decrees: [
          {
            name: "Decreto 053 del 29 de enero de 2018",
            url:
              "http://www.envigado.gov.co/secretaria-movilidad/SiteAssets/008_DOCUMENTOS/DOCUMENTOS/2018/01/DECRETO%20053%20DE%202018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["7:00 - 8:30", "17:30 - 19:00"],
        scheme:
          "Restringe la circulación de vehículos particulares y oficiales",
        observations:
          "La rotación de la medida de “Pico y placa” para toda la ciudad de Envigado, que restringe la circulación de vehículos particules y oficiales, quedará rigiendo durante los periodos comprendidos entre las 07:00 y las 08:30 horas y entre las 17:30 y las 19:00 horas, durante los días hábiles de la semana por grupos de vehículos, según el último número de su placa, a partir del lunes 5 de febrero de 2018."
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
            name: "Decreto 053 del 29 de enero de 2018",
            url:
              "http://www.envigado.gov.co/secretaria-movilidad/SiteAssets/008_DOCUMENTOS/DOCUMENTOS/2018/01/DECRETO%20053%20DE%202018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["7:00 - 8:30", "17:30 - 19:00"],
        scheme:
          "Restringe la circulación de motos de dos tiempos según el primer número de su placa",
        observations:
          "La rotación de la medida de “Pico y placa” para motos de dos tiempos, quedará rigiendo entre las 07:00 y las 08:30 y entre las 17:30 y las 19:00 horas, durante los días hábiles de la semana, según el primer número de su placa, a partir del lunes 05 de febrero de 2018."
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
            name: "Decreto 053 del 29 de enero de 2018",
            url:
              "http://www.envigado.gov.co/secretaria-movilidad/SiteAssets/008_DOCUMENTOS/DOCUMENTOS/2018/01/DECRETO%20053%20DE%202018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["6:00 - 20:00"],
        scheme: "De acuerdo con el último número de la placa del vehículo",
        observations:
          "La rotación de la medida de “Pico y placa” para el transporte público individual (taxis) que circulen en la Jurisdicción de Envigado, seguirá siendo cada dos semanas en el horario comprendido enre las 06:00 y las 20:00 horas durante los días hábiles de la semana por grupos de vehículos, según el último número de su placa, a partir del jueves 1 de febrero de 2018."
      },
      name: "Taxis",
      na: [0, 6],
      pyp: medellin.categories.taxis.pyp
    }
  }
};
