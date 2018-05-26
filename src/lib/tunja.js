const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Tunja",
  categories: {
    taxis: {
      info: {
        vehicleClasses: [
          "Vehículos de transporte público individual de pasajeros - Taxis"
        ],
        decrees: [
          {
            name: "Decreto No. 0201 del 13 de junio de 2016",
            url:
              "http://www.tunja-boyaca.gov.co/normatividad_vigente.shtml?apc=ka1010-1-&x=21656"
          }
        ],
        days: [
          "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 19:00"],
        scheme: "Último dígito del número de la placa según el esquema",
        observations: ""
      },
      name: "Taxis",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2015-06-01";
          const startNums = "3-4";
          const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
          return pypFuncs.rotateByMonth(date, startDate, startNums, pypNums);
        });
      }
    },
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto No. 0201 del 13 de junio de 2016",
            url:
              "http://www.tunja-boyaca.gov.co/normatividad_vigente.shtml?apc=ka1010-1-&x=21656"
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
            "5-6", // lunes
            "7-8", // martes
            "9-0", // miércoles
            "1-2", // jueves
            "3-4" // viernes
          ];
          return pyp[pypFuncs.getDay(date) - 1];
        });
      }
    }
  }
};
