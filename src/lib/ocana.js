import * as pypFuncs from "../utils/funcs";

export default {
  name: "Ocaña",
  categories: {
    particulares: {
      info: {
        vehicleClasses: [
          "Pico y placa particular tipo automóvil, camperos, camionetas, microbuses particulares y motocicletas"
        ],
        decrees: [
          {
            name: "",
            url: ""
          }
        ],
        days: [
          "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 19:00"],
        scheme:
          "Cíclico de acuerdo con el último número de la placa del vehículo",
        observations:
          "Restringe la circulación, tipo Automóvil, Camperos, Camionetas, Microbuses particulares y Motocicletas desde la calle 7 con carrera 27 sector de las llamadas, pasando por la calle 11 en el sector de Martinete, empalmando con la Calle 10 hasta la carrera 10 (semáforo Col. José Eusebio Caro), carrera 11, 13 y 14 entre calle 10 y 11 y desde la calle 11 con carrera 10 empalmando con la calle 10 sector de San Agustín hasta llegar al sector de las llamadas en la carrera 27."
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
    },
    motos: {
      info: {
        vehicleClasses: [
          "Pico y placa particular tipo automóvil, camperos, camionetas, microbuses particulares y motocicletas"
        ],
        decrees: [
          {
            name: "",
            url: ""
          }
        ],
        days: [
          "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 19:00"],
        scheme:
          "Cíclico de acuerdo con el último número de la placa del vehículo",
        observations:
          "Restringe la circulación, tipo Automóvil, Camperos, Camionetas, Microbuses particulares y Motocicletas desde la calle 7 con carrera 27 sector de las llamadas, pasando por la calle 11 en el sector de Martinete, empalmando con la Calle 10 hasta la carrera 10 (semáforo Col. José Eusebio Caro), carrera 11, 13 y 14 entre calle 10 y 11 y desde la calle 11 con carrera 10 empalmando con la calle 10 sector de San Agustín hasta llegar al sector de las llamadas en la carrera 27."
      },
      name: "Motos",
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
