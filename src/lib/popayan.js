const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Popayán",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 20181000000015 del 2 de enero de 2018",
            url:
              "https://www.popayan.gov.co/sites/default/files/decreto_20181000000015_02012018.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: ["7:00 - 19:00"],
        scheme: "Último dígito del número de la placa según el esquema"
      },
      name: "Particulares",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const semester = pypFuncs.getMonth(date) <= 6 ? 0 : 1;
          const pyp = [
            [
              "5-6", // 0: lunes
              "7-8", // 1: martes
              "9-0", // 2: miércoles
              "1-2", // 3: jueves
              "3-4" // 4: viernes
            ],
            [
              "1-2", // 0: lunes
              "3-4", // 1: martes
              "5-6", // 2: miércoles
              "7-8", // 3: jueves
              "9-0" // 4: viernes
            ]
          ];
          return pyp[semester][pypFuncs.getDay(date) - 1];
        });
      }
    },
    motos: {
      info: {
        vehicleClasses: ["Motocicletas particulares"],
        decrees: [
          {
            name: "Decreto 20181000000015 del 2 de enero de 2018",
            url:
              "https://www.popayan.gov.co/sites/default/files/decreto_20181000000015_02012018.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: ["7:00 - 19:00"],
        scheme: "Último dígito del número de la placa según el esquema"
      },
      name: "Motos",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const semester = pypFuncs.getMonth(date) <= 6 ? 0 : 1;
          const pyp = [
            [
              "5-6", // 0: lunes
              "7-8", // 1: martes
              "9-0", // 2: miércoles
              "1-2", // 3: jueves
              "3-4" // 4: viernes
            ],
            [
              "1-2", // 0: lunes
              "3-4", // 1: martes
              "5-6", // 2: miércoles
              "7-8", // 3: jueves
              "9-0" // 4: viernes
            ]
          ];
          return pyp[semester][pypFuncs.getDay(date) - 1];
        });
      }
    },
    tpc: {
      info: {
        vehicleClasses: [
          "Transporte Público de servicio de carga con capacidad menor a una y media toneladas"
        ],
        decrees: [
          {
            name: "Decreto 20181000000015 del 2 de enero de 2018",
            url:
              "https://www.popayan.gov.co/sites/default/files/decreto_20181000000015_02012018.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: ["7:00 - 19:00"],
        scheme: "Último dígito del número de la placa según el esquema"
      },
      name: "Transporte Público de Carga",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2018-01-04";
          const specialDates = ["2018-01-05", "2018-04-12", "2018-04-13"];
          const daysDiff = pypFuncs.daysDiff(
            startDate,
            date,
            [0, 6],
            true,
            specialDates
          );
          return String(daysDiff % 10);
        });
      }
    }
  }
};
