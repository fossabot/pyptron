import * as pypFuncs from "../utils/funcs";

export default {
  name: "Pasto",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 0201 del 18 de mayo de 2017",
            url:
              "http://www.pasto.gov.co/index.php/decretos/decretos-2017?download=10061:dec_0201_18_may_2017"
          }
        ],
        days: [
          "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:30 - 19:00"],
        scheme:
          "Se restringe el tránsito de vehículos automotores en la ciudad de San Juan de Pasto de acuerdo con el último dígito numérico de la placa del vehículo, sujetándose a los ciclos y dias señalados",
        observations: ""
      },
      name: "Particulares",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2018-01-01";
          const startNums = "8-9";
          const pypNums = ["0-1", "2-3", "4-5", "6-7", "8-9"];
          return pypFuncs.rotateByWeek(
            date,
            startDate,
            startNums,
            pypNums,
            true
          );
        });
      }
    },
    motos: {
      info: {
        vehicleClasses: ["Motocicletas"],
        decrees: [
          {
            name: "Decreto 0201 del 18 de mayo de 2017",
            url:
              "http://www.pasto.gov.co/index.php/decretos/decretos-2017?download=10061:dec_0201_18_may_2017"
          }
        ],
        days: [
          "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:30 - 19:00"],
        scheme:
          "Se restringe el tránsito de vehículos automotores en la ciudad de San Juan de Pasto de acuerdo con el último dígito numérico de la placa del vehículo, sujetándose a los ciclos y dias señalados",
        observations: ""
      },
      name: "Motos",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2018-01-01";
          const startNums = "8-9";
          const pypNums = ["0-1", "2-3", "4-5", "6-7", "8-9"];
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
