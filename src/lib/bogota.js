const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Bogotá",
  categories: {
    ambiental: {
      info: {
        vehicleClasses: [
          "Vehículos de Transporte Público Colectivo de pasajeros",
          "Vehículos de Transporte de Carga"
        ],
        decrees: [
          {
            name: "Decreto 325 del 16 de agosto de 2006",
            url:
              "http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=21050"
          },
          {
            name: "Decreto 174 de 2006",
            url:
              "http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=56330"
          }
        ],
        days: [
          "Lunes a sábado (No se aplicará en los días festivos establecidos por la Ley)",
          "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: [
          "Transporte Público Colectivo: 6:00 - 10:00",
          "Transporte de Carga: 9:00 - 10:00"
        ],
        scheme:
          "Para todos los vehículos de transporte de carga (incluye servicio público y particular).",
        observations:
          "No será aplicable a los vehículos de transporte de carga de cinco toneladas o menos de peso bruto vehicular No será aplicable a los vehículos particulares de carga, así como a los vinculados a las empresas de transporte de carga que se acojan al “Programa de Autorregulación Ambiental”."
      },
      name: "Ambiental",
      na: [0],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2018-01-01";
          const startNums = "9";
          const pypNums = ["0", "1", "2", "3", "4", "5", "6", "7", "9", "8"];
          return pypFuncs.rotateByDay(date, startDate, startNums, pypNums);
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
            name: "Decreto 660 del 27 de agosto de 2001",
            url:
              "http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4643"
          },
          {
            name: "Decreto 058 de 2003 y Decreto 051 de 2004",
            url:
              "http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=12124"
          }
        ],
        days: [
          "Lunes a sábado (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["5:30 - 21:00"],
        scheme:
          "Cíclico de acuerdo con el último número de la placa del vehículo (2 dígitos por día según calendario establecido)",
        observations: ""
      },
      name: "Taxis",
      na: [0],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2018-01-01";
          const startNums = "7-8";
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
    },
    especial: {
      info: {
        vehicleClasses: [
          "Vehículos de servicio público de transporte terrestre automotor especial, clase automóvil, camioneta o campero, con capacidad para cuatro (4) pasajeros (sin incluir conductor)"
        ],
        decrees: [
          {
            name: "Decreto 248 del 14 de junio de 2016",
            url:
              "http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=66359"
          }
        ],
        days: [
          "Lunes a sábado (No se aplicará en los días festivos establecidos por la Ley)."
        ],
        hours: ["5:30 - 21:00"],
        scheme:
          "Cíclico de acuerdo con el último número de la placa del vehículo (2 dígitos por día según calendario establecido)",
        observations: ""
      },
      name: "Servicio de Transporte Especial",
      na: [0],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2018-01-01";
          const startNums = "7-8";
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
    },
    tpc: {
      info: {
        vehicleClasses: ["Vehículos de Transporte Público Colectivo (TPC)"],
        decrees: [
          {
            name: "Decreto 444 de 2014",
            url:
              "http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=59702"
          }
        ],
        days: [
          "Lunes a sábado (No se aplicará en los días domingos y festivos establecidos por la Ley)"
        ],
        hours: ["Todo el día"],
        scheme:
          "Cíclico de acuerdo con el último número de la placa del vehículo (2 dígitos por día según calendario establecido)",
        observations:
          "Los vehículos de servicio público de transporte colectivo de pasajeros con restricción, podrán circular con no más de un (1) acompañante, únicamente para atender labores de mantenimiento, alistamiento, reparación o revisión técnico mecánica, portando en un lugar visible aviso que exprese claramente que se encuentran fuera de servicio."
      },
      name: "Transporte Público Colectivo",
      na: [0],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2018-01-01";
          const startNums = "5-6";
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
    },
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 515 del 22 de Noviembre de 2016",
            url:
              "http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=55963"
          },
          {
            name: "Decreto 575 del 17 de diciembre de 2013",
            url:
              "http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=67497"
          },
          {
            name: "Decreto 159 del 11 de abril de 2014",
            url:
              "http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=57155"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: ["6:00 - 8:30", "15:00 - 19:30"],
        scheme:
          "Día par hábil: placa último dígito par. Día impar hábil: placa último dígito impar.",
        observations:
          "No aplicará desde el día hábil siguiente al veinticinco (25) de diciembre de cada año, hasta el viernes hábil antes del descanso ordenado por la Ley 51 de 1983 para la festividad correspondiente al seis (6) de enero del año siguiente."
      },
      name: "Particulares",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = {
            0: "0-2-4-6-8",
            1: "1-3-5-7-9"
          };
          return pyp[pypFuncs.getDate(date) % 2];
        });
      }
    }
  }
};
