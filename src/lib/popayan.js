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
              "3-4", // lunes
              "5-6", // martes
              "7-8", // miércoles
              "9-0", // jueves
              "1-2" // viernes
            ],
            [
              "1-2", // lunes
              "3-4", // martes
              "5-6", // miércoles
              "7-8", // jueves
              "9-0" // viernes
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
              "3-4", // lunes
              "5-6", // martes
              "7-8", // miércoles
              "9-0", // jueves
              "1-2" // viernes
            ],
            [
              "1-2", // lunes
              "3-4", // martes
              "5-6", // miércoles
              "7-8", // jueves
              "9-0" // viernes
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
