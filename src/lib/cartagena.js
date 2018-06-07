import * as pypFuncs from "../utils/funcs";

export default {
  name: "Cartagena",
  categories: {
    taxis: {
      info: {
        vehicleClasses: [
          "Vehículos de transporte público individual de pasajeros - Taxis"
        ],
        decrees: [
          {
            name: "Decreto 1659 de diciembre de 2017",
            url:
              "http://www.transitocartagena.gov.co/links/Decretos/Decretos_2017/Decreto_1659.PDF"
          }
        ],
        days: [
          "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["6:00 - 6:00 del día siguiente"],
        scheme: "Último dígito del número de la placa",
        observations: ""
      },
      name: "Taxis",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          switch (pypFuncs.formatDate(date, "YYYY-MM-DD")) {
            case "2018-02-02":
              return "3-4";
            case "2018-03-02":
              return "1-2";
            case "2018-04-30":
              return "7-8";
            case "2018-10-01":
              return "7-8";
            default:
              break;
          }
          const startDate = "2018-01-02";
          const startNums = "7-8";
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
            name: "Decreto 1550 del 30 de noviembre de 2017",
            url:
              "http://www.transitocartagena.gov.co/links/Decretos/Decretos_2017/Decreto_1550.PDF"
          }
        ],
        days: [
          "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 9:00", "12:00 - 14:00", "17:00 - 19:30"],
        scheme: "Último dígito del número de la placa",
        observations: ""
      },
      name: "Particulares",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2017-12-04";
          const startNums = "1-2";
          const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
          return pypFuncs.rotateByMonth(
            date,
            startDate,
            startNums,
            pypNums,
            true,
            3
          );
        });
      }
    }
  }
};
