import * as pypFuncs from "../utils/funcs";

export default {
  name: "Pamplona",
  categories: {
    particulares: {
      info: {
        vehicleClasses: [
          "Vehículos de toda clase de servicio particular y público (excepto servicio tipo taxi)"
        ],
        decrees: [],
        days: ["Lunes a viernes hábiles"],
        hours: ["8:00 - 18:00"],
        scheme: "Según el último dígito del número de la placa",
        observations:
          "Perímetro de pico y placa: Calle 9º y la Calle 4 sin incluir	la vía nacional y el de la Carrera 8º , en su totalidad, hasta la Carrera 3º en su	Totalidad"
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
    },
    motos: {
      info: {
        vehicleClasses: ["Vehículos tipo motocicletas"],
        decrees: [],
        days: ["Lunes a viernes hábiles"],
        hours: ["8:00 - 18:00"],
        scheme: "Según el último dígito del número de la placa",
        observations:
          "Perímetro de pico y placa: Calle 9º y la Calle 4 sin incluir	la vía nacional y el de la Carrera 8º , en su totalidad, hasta la Carrera 3º en su	Totalidad"
      },
      name: "Motos",
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
