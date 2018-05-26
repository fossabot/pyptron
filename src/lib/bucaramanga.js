const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Bucaramanga",
  categories: {
    particulares: {
      info: {
        vehicleClasses: [
          "Vehículos de toda clase de servicio particular y público (excepto servicio tipo taxi)"
        ],
        decrees: [
          {
            name: "Resolución 435 de 2017",
            url:
              "http://transitobucaramanga.gov.co/resolucion/archivos/435-08-2017.pdf"
          },
          {
            name: "Resolución 782 de 2017",
            url:
              "http://transitobucaramanga.gov.co/resolucion/archivos/782-12-2017.pdf"
          },
          {
            name: "Resolución 783 de 2017",
            url:
              "http://transitobucaramanga.gov.co/resolucion/archivos/783-12-2017.pdf"
          }
        ],
        days: ["Lunes a sábado hábiles"],
        hours: ["Lunes a viernes: 6:00 - 20:00", "Sábados: 9:00 - 13:00"],
        scheme: "Según el último dígito del número de la placa",
        observations: ""
      },
      name: "Particulares",
      na: [0],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          if (pypFuncs.getDay(date) === 6) {
            const startNums = "3-4";
            const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
            const startDate = "2018-01-06";
            return pypFuncs.rotateByWeek(
              date,
              startDate,
              startNums,
              pypNums,
              true
            );
          }
          const pyp = [
            "3-4", // lunes
            "5-6", // martes
            "7-8", // miércoles
            "9-0", // jueves
            "1-2" // viernes
          ];
          return pyp[pypFuncs.getDay(date) - 1];
        });
      }
    },
    motos: {
      info: {
        vehicleClasses: ["Vehículos tipo motocicletas"],
        decrees: [
          {
            name: "Resolución 435 de 2017",
            url:
              "http://transitobucaramanga.gov.co/resolucion/archivos/435-08-2017.pdf"
          },
          {
            name: "Resolución 782 de 2017",
            url:
              "http://transitobucaramanga.gov.co/resolucion/archivos/782-12-2017.pdf"
          },
          {
            name: "Resolución 783 de 2017",
            url:
              "http://transitobucaramanga.gov.co/resolucion/archivos/783-12-2017.pdf"
          }
        ],
        days: ["Lunes a sábado hábiles"],
        hours: ["Lunes a viernes: 6:00 - 20:00", "Sábados: 9:00 - 13:00"],
        scheme:
          "Último dígito numérico de la placa según el esquema sin tener en cuenta la letra o letras finales",
        observations: ""
      },
      name: "Motos",
      na: [0],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          if (pypFuncs.getDay(date) === 6) {
            const startDate = "2018-01-06";
            const startNums = "3-4";
            const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
            return pypFuncs.rotateByWeek(
              date,
              startDate,
              startNums,
              pypNums,
              true
            );
          }
          const pyp = [
            "3-4", // lunes
            "5-6", // martes
            "7-8", // miércoles
            "9-0", // jueves
            "1-2" // viernes
          ];
          return pyp[pypFuncs.getDay(date) - 1];
        });
      }
    },
    taxis: {
      info: {
        vehicleClasses: ["Vehículos de servicio público individual - taxis"],
        decrees: [
          {
            name: "Resolución 435 de 2017",
            url:
              "http://transitobucaramanga.gov.co/resolucion/archivos/435-08-2017.pdf"
          },
          {
            name: "Resolución 782 de 2017",
            url:
              "http://transitobucaramanga.gov.co/resolucion/archivos/782-12-2017.pdf"
          },
          {
            name: "Resolución 783 de 2017",
            url:
              "http://transitobucaramanga.gov.co/resolucion/archivos/783-12-2017.pdf"
          }
        ],
        days: ["Lunes a sábado hábiles"],
        hours: ["7:00 - 21:00"],
        scheme: "Último dígito numérico de la placa según el esquema",
        observations: ""
      },
      name: "Taxis",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2018-01-08";
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
