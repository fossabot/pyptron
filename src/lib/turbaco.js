import * as pypFuncs from "../utils/funcs";

export default {
  name: "Turbaco",
  categories: {
    motos: {
      info: {
        vehicleClasses: ["Vehículos tipo motocicletas"],
        decrees: [
          {
            name: "Decreto 035",
            url: ""
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: ["Las 24 horas del día"],
        scheme:
          "Restricción de circulación para Motos, motocarros, moto triciclos, cuatrimotos y similares de lunes a viernes los días pares solo podrán circular los vehículos cuya placa tengan el último digito par, los impares sólo saldrán los vehículos con placa impar.",
        observations:
          "En las vías internas de los barrios de la 'zona conurbana' del municipio de Turbaco esto es. El Rodeo, Villa Cadiz, Villagrande de Inidias I y II, Villa Sol, Villa Andrea, Bosques de la Ceiba, Bosques de la Circunvalar, Horizonte y demás que puedan crearse y hasta la entrada del Jardín Botánico. Exceptuando las carreras nacionales."
      },
      name: "Motos",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = ["pares", "impares"];
          return pyp[pypFuncs.getDate(date) % 2];
        });
      }
    }
  }
};
