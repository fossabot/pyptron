import * as pypFuncs from "../utils/funcs";

export default {
  name: "Envigado",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos particulares y oficiales"],
        decrees: [
          {
            name: "Decreto 053 del 29 de enero de 2018",
            url:
              "http://www.envigado.gov.co/secretaria-movilidad/SiteAssets/008_DOCUMENTOS/DOCUMENTOS/2018/01/DECRETO%20053%20DE%202018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["7:00 - 8:30", "17:30 - 19:00"],
        scheme:
          "Restringe la circulación de vehículos particulares y oficiales",
        observations:
          "La rotación de la medida de “Pico y placa” para toda la ciudad de Envigado, que restringe la circulación de vehículos particules y oficiales, quedará rigiendo durante los periodos comprendidos entre las 07:00 y las 08:30 horas y entre las 17:30 y las 19:00 horas, durante los días hábiles de la semana por grupos de vehículos, según el último número de su placa, a partir del lunes 5 de febrero de 2018."
      },
      name: "Particulares",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = [
            "4-5-6-7", // lunes
            "8-9-0-1", // martes
            "2-3-4-5", // miércoles
            "6-7-8-9", // jueves
            "0-1-2-3" // viernes
          ];
          return pyp[pypFuncs.getDay(date) - 1];
        });
      }
    },
    motos: {
      info: {
        vehicleClasses: ["Motos de dos tiempos"],
        decrees: [
          {
            name: "Decreto 053 del 29 de enero de 2018",
            url:
              "http://www.envigado.gov.co/secretaria-movilidad/SiteAssets/008_DOCUMENTOS/DOCUMENTOS/2018/01/DECRETO%20053%20DE%202018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["7:00 - 8:30", "17:30 - 19:00"],
        scheme:
          "Restringe la circulación de motos de dos tiempos según el primer número de su placa",
        observations:
          "La rotación de la medida de “Pico y placa” para motos de dos tiempos, quedará rigiendo entre las 07:00 y las 08:30 y entre las 17:30 y las 19:00 horas, durante los días hábiles de la semana, según el primer número de su placa, a partir del lunes 05 de febrero de 2018."
      },
      name: "Motos",
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
    taxis: {
      info: {
        vehicleClasses: ["Transporte público individual - taxis"],
        decrees: [
          {
            name: "Decreto 053 del 29 de enero de 2018",
            url:
              "http://www.envigado.gov.co/secretaria-movilidad/SiteAssets/008_DOCUMENTOS/DOCUMENTOS/2018/01/DECRETO%20053%20DE%202018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: ["6:00 - 20:00"],
        scheme: "De acuerdo con el último número de la placa del vehículo",
        observations:
          "La rotación de la medida de “Pico y placa” para el transporte público individual (taxis) que circulen en la Jurisdicción de Envigado, seguirá siendo cada dos semanas en el horario comprendido enre las 06:00 y las 20:00 horas durante los días hábiles de la semana por grupos de vehículos, según el último número de su placa, a partir del jueves 1 de febrero de 2018."
      },
      name: "Taxis",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          // Se basa en dos secuencias de números que se alternan semanalmente. Las secuencias rotan
          // cada mes, salvo la primera semana en caso de que el primero no sea lunes.
          // Si el primero de cada mes no es lunes, la secuencia no rota sino hasta la siguiente
          // semana.

          // La fecha en la que inician las secuencias.
          const startDate = "2018-01-01";
          // Los números con los que inicia cada secuencia en la fecha de inicio.
          const startNums = ["5", "0"];
          // Las dos secuencias de números.
          const pypNums = [
            ["3", "4", "5", "6", "7"],
            ["0", "1", "2", "8", "9"]
          ];
          // A partir de 2018-05-07 las secuencias cambian, asignamos las nuevas secuencias si la
          // fecha solicitada es mayor a esa fecha.
          if (
            pypFuncs.formatDate(date, "YYMMDD") >=
            pypFuncs.formatDate("2018-05-07", "YYMMDD")
          ) {
            pypNums[0] = ["8", "4", "5", "6", "2"];
            pypNums[1] = ["0", "1", "7", "3", "9"];
          }
          // Verificamos la semana para determinar que secuencia vamos a usar. Las semanas impares
          // usamos la primera secuencia, las pares la segunda.
          const week = 1 - (pypFuncs.getWeek(date) % 2);
          const weekStartNum = startNums[week];
          const weekPypNums = pypNums[week];
          // Calculamos si estamos en la primera semana y si el primer día del mes corresponde con
          // el lunes. Lo que hacemos es obtener la fecha y el día de la semana correspondientes
          // a la fecha.
          // El lunes es el día 1 de la semana, así que si el primero corresponde al lunes la
          // diferencia será 0.
          // Si la diferencia es negativa, por ejemplo, la fecha es 5, la diferencia con el lunes y
          // de ahí en adelante es negativa, por lo tanto no nos interesan esas fechas.
          // Si la diferencia es positiva, quiere decir que el día de la semana es mayor que la
          // fecha pasada y por lo tanto la primera semana no comenzó en lunes, estos son los casos
          // que nos interesan:
          //           D  L  M  M  J  V  S
          //     día | 0  1  2  3  4  5  6
          //         | -------------------
          //   fecha | 1                   = -1 No nos interesa, rotamos normalmente
          //   fecha | 8                   = -8 No nos interesa, rotamos normalmente
          //
          //         | D  L  M  M  J  V  S
          //     día | 0  1  2  3  4  5  6
          //         | -------------------
          //   fecha |    1                = 0 No nos interesa, rotamos normalmente
          //   fecha | 7                   = -7 No nos interesa, rotamos normalmente
          //
          //         | D  L  M  M  J  V  S
          //     día | 0  1  2  3  4  5  6
          //         | -------------------
          //   fecha |       1             = 1 Este caso nos interesa, no rotamos
          //   fecha | 6                   = -6 No nos interesa, rotamos normalmente
          //
          //         | D  L  M  M  J  V  S
          //     día | 0  1  2  3  4  5  6
          //         | -------------------
          //   fecha |                  1 = 5 Este caso nos interesa, no rotamos
          //   fecha | 2                   = -2 No nos interesa, rotamos normalmente
          const weekOffset =
            pypFuncs.getDay(date) - pypFuncs.getDate(date) >= 1 ? 1 : 0;
          // Obtenemos la rotación mensual normalmente, si esa semana el lunes no cayó en lunes,
          // nos devolvemos una rotación para deshacer la rotación que se hizo de más y que no
          // habría que hacer para esa semana.
          let pypNum = pypFuncs.rotateByMonth(
            date,
            startDate,
            weekStartNum,
            weekPypNums
          );
          if (weekOffset) {
            [pypNum] = pypFuncs.arrRotate(
              weekPypNums,
              -weekPypNums.indexOf(pypNum) - weekOffset
            );
          }
          return pypNum;
        });
      }
    }
  }
};
