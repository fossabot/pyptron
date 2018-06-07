import * as pypFuncs from "../utils/funcs";

export default {
  name: "Quibdó",
  categories: {
    motos: {
      info: {
        vehicleClasses: ["Motocicletas de todo cilindraje"],
        decrees: [
          {
            name: "Decreto 222 de 2016",
            url: "https://cdn.pyphoy.com/quibdo/decreto-222-de-2016.pdf"
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
          const pyp = [
            "1-2-3-4", // lunes
            "5-6-7-8", // martes
            "9-0-1-2", // miércoles
            "3-4-5-6", // jueves
            "7-8-9-0" // viernes
          ];
          return pyp[pypFuncs.getDay(date) - 1];
        });
      }
    },
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 222 de 2016",
            url: "https://cdn.pyphoy.com/quibdo/decreto-222-de-2016.pdf"
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
    }
  }
};
