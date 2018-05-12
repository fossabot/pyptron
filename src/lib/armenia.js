const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Armenia",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 083 de 2016",
            url: "https://www.pyphoy.com/armenia/docs/decreto-083-de-2016.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: [
          "Centro de la ciudad: 7:30 - 19:30",
          "Toda la ciudad: 7:30 - 9:30, 11:30 - 14:30 y 17:30 - 19:30"
        ],
        scheme: "Último dígito del número de la placa según el esquema"
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
    },
    motos: {
      info: {
        vehicleClasses: [
          "Vehículos automotores particulares de dos tiempos tipo motocicleta, mototriciclos, cuatrimotos y motocarros"
        ],
        decrees: [
          {
            name: "Decreto 083 de 2016",
            url: "https://www.pyphoy.com/armenia/docs/decreto-083-de-2016.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: [
          "Centro de la ciudad: 7:30 - 19:30",
          "Toda la ciudad: 7:30 - 9:30, 11:30 - 14:30 y 17:30 - 19:30"
        ],
        scheme: "Primer dígito del número de la placa según el esquema"
      },
      name: "Motos",
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
    },
    taxis: {
      info: {
        vehicleClasses: [
          "Vehículos de transporte público individual de pasajeros - Taxis"
        ],
        decrees: [
          {
            name: "Decreto 083 de 2016",
            url: "https://www.pyphoy.com/armenia/docs/decreto-083-de-2016.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: ["7:30 - 19:30"],
        scheme: "Primer dígito del número de la placa según el esquema"
      },
      name: "Taxis",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2017-12-11";
          const startNums = "1-2";
          const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
          return pypFuncs.rotateByWeek(
            date,
            startDate,
            startNums,
            pypNums,
            true
          );
        });
      }
    }
  }
};
