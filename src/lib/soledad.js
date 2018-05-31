const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Soledad",
  categories: {
    motos: {
      info: {
        vehicleClasses: ["Vehículos tipo motocicletas"],
        decrees: [
          {
            name: "Decreto 288 de julio de 2017",
            url: "https://cdn.pyphoy.com/soledad/decreto-288-de-2017.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: ["5:00 - 22:00"],
        scheme:
          "Restricción de circulación para Motocicletas, Motociclos, Ciclomotores, Mototriciclos, Tricimotos y Cuatrimotos, conforme al último dígito de la placa",
        observations:
          "En materia de circulación nocturna de motocicletas, ciclomotores, mototriciclos, tricimotos y cuatrimotos, no podrán circular entre las 10 de la noche y las 5:00 de la mañana del día siguiente, de domingo a sábado. Para los motocarros la restricción rige a partir de las 11:00 de la noche."
      },
      name: "Motos",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = [
            "1-2", // lunes
            "3-4", // martes
            "5-6", // miércoles
            "7-8", // jueves
            "9-0" // viernes
          ];
          return pyp[pypFuncs.getDay(date) - 1];
        });
      }
    },
    motocarros: {
      info: {
        vehicleClasses: [
          "Restricción de circulación de motocarros, según el color del mismo"
        ],
        decrees: [
          {
            name: "Decreto 288 de julio de 2017",
            url: "https://cdn.pyphoy.com/soledad/decreto-288-de-2017.pdf"
          }
        ],
        days: ["Todos los días de la semana"],
        hours: ["Las 24 horas del día"],
        scheme:
          "En materia de circulación nocturna de motocicletas, ciclomotores, mototriciclos, tricimotos y cuatrimotos, no podrán circular entre las 10 de la noche y las 5:00 de la mañana del día siguiente, de domingo a sábado. Para los motocarros la restricción rige a partir de las 11:00 de la noche.",
        observations:
          "En consecuencia, con la medida de ‘pico y color’, se establecen medidas los días 31 de los meses de enero, marzo, julio, agosto, octubre y diciembre la prohibición de circulación."
      },
      name: "Motocarros",
      na: [],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, false, () => {
          const pyp = ["pares - azul", "impares - naranja"];
          return pyp[pypFuncs.getDate(date) % 2];
        });
      }
    }
  }
};
