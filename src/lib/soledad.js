const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Soledad",
  categories: {
    motos: [
      {
        from: "2017-07-06",
        info: {
          vehicleClasses: ["Vehículos tipo motocicletas"],
          decrees: [
            {
              name: "Decreto 288 de julio de 2017",
              url: pypFuncs.buildAssetPath("soledad", "decreto-288-de-2017.pdf")
            }
          ],
          days: ["Lunes a viernes"],
          hours: [
            {
              comment: "",
              hours: [["5:00", "22:00"]],
              days: []
            }
          ],
          scheme:
            "Restricción de circulación para Motocicletas, Motociclos, Ciclomotores, Mototriciclos, Tricimotos y Cuatrimotos, conforme al último dígito de la placa",
          observations:
            "En materia de circulación nocturna de motocicletas, ciclomotores, mototriciclos, tricimotos y cuatrimotos, no podrán circular entre las 10 de la noche y las 5:00 de la mañana del día siguiente, de domingo a sábado. Para los motocarros la restricción rige a partir de las 11:00 de la noche.",
          exceptions: `Las prohibiciones del Pico y Placa no son aplicables a los siguientes vehículos públicos que para el ejercicio de sus funciones, en vía pública o privadas abiertas al público utilicen motocicletas:<ul>
        <li>Miembros de la fuerza pública.</li>
        <li>Policía judicial.</li>
        <li>Agentes de tránsito y transporte.</li>
        <li>Miembros de la defensa civil, cruz roja, bomberos y gestión de riesgo.</li>
        <li>Personal adscrito al servicio público de salud y hospitalario.</li>
        <li>Propietarios de motocicletas cuyo cilindraje sea igual o superios a 598 centímetros cúbicos.</li>
        <li>Servidores públicos y trabajadores de empresas prestadoras de servicios públicos en ejercicio de sus funciones.</li>
        <ul></ul>`
        },
        name: "Motos",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, false, () => {
            if (pypFuncs.getDate(date) === 30) {
              return "0-1-2-3-4-5-6-7-8-9";
            }
            const pyp = [
              "1-3", // lunes
              "2-4", // martes
              "5-7", // miércoles
              "6-8", // jueves
              "9-0" // viernes
            ];
            return pyp[pypFuncs.getDay(date) - 1];
          });
        }
      }
    ],
    motocarros: [
      {
        from: "2017-07-06",
        info: {
          vehicleClasses: [
            "Restricción de circulación de motocarros, según el color del mismo"
          ],
          decrees: [
            {
              name: "Decreto 288 de julio de 2017",
              url: pypFuncs.buildAssetPath("soledad", "decreto-288-de-2017.pdf")
            }
          ],
          days: ["Todos los días de la semana"],
          hours: [
            {
              comment: "Todo el día",
              hours: [[]],
              days: []
            }
          ],
          scheme:
            "En materia de circulación nocturna de motocicletas, ciclomotores, mototriciclos, tricimotos y cuatrimotos, no podrán circular entre las 10 de la noche y las 5:00 de la mañana del día siguiente, de domingo a sábado. Para los motocarros la restricción rige a partir de las 11:00 de la noche.",
          observations:
            "En consecuencia, con la medida de ‘pico y color’, se establecen medidas los días 31 de los meses de enero, marzo, julio, agosto, octubre y diciembre la prohibición de circulación."
        },
        name: "Motocarros",
        na: [],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, false, () => {
            const pyp = ["0-2-4-6-8- naranja", "1-3-5-7-9- azul"];
            switch (pypFuncs.formatDate(date, "MMDD")) {
              case "0131":
                return "0-2-4-6-8- naranja";
              case "0331":
                return "1-3-5-7-9- azul";
              case "0731":
                return "0-2-4-6-8- naranja";
              case "0831":
                return "1-3-5-7-9- azul";
              case "1031":
                return "0-2-4-6-8- naranja";
              case "1231":
                return "1-3-5-7-9- azul";
              default:
                return pyp[pypFuncs.getDate(date) % 2];
            }
          });
        }
      }
    ]
  }
};
