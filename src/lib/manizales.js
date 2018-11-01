import * as pypFuncs from "../utils/funcs";

export default {
  name: "Manizales",
  categories: {
    tpc: {
      info: {
        vehicleClasses: ["Vehículos de Transporte Público Colectivo (TPC)"],
        decrees: [
          {
            name: "Resolución 298 de 2017",
            url: ""
          }
        ],
        days: [
          "Lunes a sábado (No se aplicará en los días domingos y festivos establecidos por la Ley)"
        ],
        hours: [{ comment: "", hours: [["6:00", "23:59"]] }],
        scheme:
          "toma como referencia la letra que antecede al número lateral de cada uno de los automotores",
        observations: ""
      },
      name: "Transporte Público Colectivo",
      na: [0],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2017-12-11";
          // Estos datos rotan de derecha a izquierda cada 30 días sin tener el cuenta el domingo,
          // durante esos 30 días, se selecciona cada elmento según el módulo correspondiente a la
          // diferencia de días:
          //
          //   Primera rotación (arrOffset = 0):
          //   'H' 'I' 'J' 'A' 'B' 'C' 'D' 'E' 'F' 'G'
          //   =======================================
          //    0   1   2   3   4   5   6   7   8   9
          //    10  11  12  13  14  15  16  17  18  19
          //    20  21  22  23  24  25  26  27  28  29
          //
          //   Segunda rotación (arrOffset = 1):
          //   'I' 'J' 'A' 'B' 'C' 'D' 'E' 'F' 'G' 'H'
          //   =======================================
          //    0   1   2   3   4   5   6   7   8   9
          //    10  11  12  13  14  15  16  17  18  19
          //    20  21  22  23  24  25  26  27  28  30
          //
          const pypNums = ["H", "I", "J", "A", "B", "C", "D", "E", "F", "G"];
          // La diferencia en días sin tener en cuenta el domingo
          const daysLapse = pypFuncs.daysDiff(startDate, date, [0]) - 1;
          const arrOffset = daysLapse % 30;
          // Usamos la función getIndex(index, arrLen) para mantener uniformidad en el código, pero
          // perfectamente podríamos usar:
          //   const index = (Math.floor(daysLapse / 30) + arrOffset) % pypNums.length;
          const index = pypFuncs.getIndex(
            Math.floor(daysLapse / 30) + arrOffset,
            pypNums.length
          );
          return pypNums[index];
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
            name: "Resolución 298 de 2017",
            url: ""
          }
        ],
        days: [
          "Todos los días de la semana (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: [{ comment: "", hours: [["4:00", "4:00"]] }],
        scheme: "De acuerdo con el último número de la placa del vehículo",
        observations: ""
      },
      name: "Taxis",
      na: [],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const dow = pypFuncs.getDay(date);
          if (dow === 6 || dow === 0) {
            switch (pypFuncs.formatDate(date, "YYYY-MM-DD")) {
              case "2018-01-06":
                return "3";
              case "2018-01-07":
                return "4";
              case "2018-01-13":
                return "NA";
              case "2018-12-29":
                return "5";
              case "2018-12-30":
                return "6";
              default:
                break;
            }
            const startDate = "2017-11-25";
            // Esta es la secuencia de números que se va rotando cada fin de semana cada 10 semanas.
            // El primer número de la secuencia corresponde al sábado y el segundo número al
            // domingo.
            const pypNums = [
              ["1", "2"],
              ["3", "4"],
              ["5", "6"],
              ["7", "8"],
              ["9", "0"],
              ["2", "1"],
              ["4", "3"],
              ["6", "5"],
              ["8", "7"],
              ["0", "9"]
            ];
            const daysLapse = pypFuncs.daysDiff(startDate, date, []);
            const weeksLapse = Math.floor(daysLapse / 7);
            // Usamos la función getIndex(index, arrLen) para mantener uniformidad en el código,
            // pero perfectamente podríamos usar:
            //   const index = weeksLapse % pypNums.length;
            // Ya que la diferencia de semanas no va a ser negativa nunca.
            const index = pypFuncs.getIndex(weeksLapse, pypNums.length);
            const nums = pypNums[index];
            return dow === 6 ? nums[0] : nums[1];
          }
          const startDate = "2018-01-01";
          const startNums = "3-4";
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
