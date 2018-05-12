const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Quibdó",
  categories: {
    motos: {
      info: {
        vehicleClasses: ["Motocicletas de todo cilindraje"],
        decrees: [
          {
            name: "Decreto 222",
            url:
              "https://twitter.com/rutaqalcaldia/status/772065542064705536?lang=es"
          }
        ],
        days: [
          "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:30 - 19:30"],
        scheme: "Conforme al último dígito numérico de la placa",
        observations: ""
      },
      name: "Motos",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = {
            1: "1-2-3-4", // lunes
            2: "5-6-7-8", // martes
            3: "9-0-1-2", // miércoles
            4: "3-4-5-6", // jueves
            5: "7-8-9-0" // viernes
          };
          return pyp[pypFuncs.getDay(date)];
        });
      }
    },
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 222",
            url:
              "https://twitter.com/rutaqalcaldia/status/772065542064705536?lang=es"
          }
        ],
        days: [
          "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:30 - 19:30"],
        scheme: "Conforme al último dígito numérico de la placa",
        observations: ""
      },
      name: "Particulares",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = {
            1: "1-2", // lunes
            2: "3-4", // martes
            3: "5-6", // miércoles
            4: "7-8", // jueves
            5: "9-0" // viernes
          };
          return pyp[pypFuncs.getDay(date)];
        });
      }
    }
  }
};
