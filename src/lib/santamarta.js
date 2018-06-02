const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Santa Marta",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 349 del 12 de diciembre de 2017",
            url: "https://cdn.pyphoy.com/santa-marta/decreto-349-de-2017.pdf"
          },
          {
            name: "Decreto 070 del 28 de febrero de 2018",
            url: "https://cdn.pyphoy.com/santa-marta/decreto-070-de-2018.pdf"
          }
        ],
        days: [
          "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 19:00"],
        scheme: "Último dígito del número de la placa según el esquema",
        observations: ""
      },
      name: "Particulares",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = [
            "8-9", // lunes
            "0-1", // martes
            "2-3", // miércoles
            "4-5", // jueves
            "6-7" // viernes
          ];
          return pyp[pypFuncs.getDay(date) - 1];
        });
      }
    },
    motos: {
      info: {
        vehicleClasses: ["Motocicletas"],
        decrees: [
          {
            name: "",
            url: ""
          }
        ],
        days: [
          "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 19:00"],
        scheme: "Último dígito del número de la placa según el esquema",
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
    taxis: {
      info: {
        vehicleClasses: [
          "Vehículos de transporte público individual de pasajeros - Taxis"
        ],
        decrees: [
          {
            name: "decreto 068 de 28 de febrero de 2018",
            url: "https://cdn.pyphoy.com/santa-marta/decreto-068-de-2018.pdf"
          }
        ],
        days: ["Lunes a sábado"],
        hours: ["7:00 - 21:00"],
        scheme: "Último dígito del número de la placa según el esquema",
        observations:
          "Se permitirá excepcionalmente la ciruculación de los vehículos de servicio de transporte público individual (tipo taxi) en su día de Pico y placa solo para efectos de reparación y mantenimiento: Solo podrá transitar en los horarios que comprendan entre las 06:00 y las 08:00 horas y desde las 15:00 hasta las 17:00 horas además de hacerlo con los vidrios laterales abajo, la silla lateral derecha reclinada, sin la silla trasera, sin ocupantes y solo podrá ir ocupado por el conductor. Parágrafo: Se permitirá excepcionalmente la circulación de los vehículos automotores de servicio público individual tipo taxi en su día de Pico y placa el día 20 de cada mes, lo anterior en relación a que ese día opera la restricción de cirtulación de motocicletas, motociclos, mototriciclos, motocarros y cuatrimotos en el Distrito."
      },
      name: "Taxis",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2018-03-05";
          const startNums = "0-1";
          const pypNums = ["0-1", "2-3", "4-5", "6-7", "8-9"];
          return pypFuncs.rotateByWeek(date, startDate, startNums, pypNums);
        });
      }
    }
  }
};
