import * as pypFuncs from "../utils/funcs";

export default {
  name: "Buenaventura",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 0019 del 09 de enero del 2018",
            url: ""
          }
        ],
        days: [
          "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 10:00", "17:00 - 20:00"],
        scheme: "Último dígito del número de la placa",
        observations:
          "Los vehículos de servicio particular no podrán circular desde el kilómetro cinco, es decir, desde el sector del Sena hasta el Centro de la Ciudad y viceversa, de lo contrario serán sancionados por incurrir con la norma"
      },
      name: "Particulares",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = ["1-2", "3-4", "5-6", "7-8", "9-0"];
          return pyp[pypFuncs.getDay(date) - 1];
        });
      }
    },
    taxis: {
      info: {
        vehicleClasses: ["Transporte público individual - taxis"],
        decrees: [
          {
            name: "Decreto 0019 del 09 de enero del 2018",
            url: ""
          }
        ],
        days: [
          "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 19:00"],
        scheme: "Último dígito del número de la placa",
        observations:
          "Aplica para todo el distrito. El Decreto autoriza la movilización de vehículos de servicio público sólo para que realicen el mantenimiento respectivo, por ello deberán portar el tablero colocado en el parabrisas el siguiente aviso: 'vehículo en mantenimiento por pico y placa'"
      },
      name: "Taxis",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = ["1-2", "3-4", "5-6", "7-8", "9-0"];
          return pyp[pypFuncs.getDay(date) - 1];
        });
      }
    },
    tpc: {
      info: {
        vehicleClasses: ["Vehículos de Transporte Público Colectivo (TPC)"],
        decrees: [
          {
            name: "Decreto 0019 del 09 de enero del 2018",
            url: ""
          }
        ],
        days: [
          "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 19:00"],
        scheme: "Último dígito del número de la placa",
        observations:
          "Aplica para todo el distrito. El Decreto autoriza la movilización de vehículos de servicio público sólo para que realicen el mantenimiento respectivo, por ello deberán portar el tablero colocado en el parabrisas el siguiente aviso: 'vehículo en mantenimiento por pico y placa'"
      },
      name: "Transporte Público Colectivo",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = ["1-2", "3-4", "5-6", "7-8", "9-0"];
          return pyp[pypFuncs.getDay(date) - 1];
        });
      }
    }
  }
};
