const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Cúcuta",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decretos 0239 del 4 de abril del 2017",
            url:
              "http://www.areacucuta.com/wp-content/uploads/2017/04/Decreto-Pico-y-Placa-Placa-y-D%C3%ADa.pdf"
          },
          {
            name: "Decretos 0330 del 22 de mayo del 2017",
            url:
              "http://cucutaonline.com/wp-content/uploads/2017/05/Decreto-0330-pico-placa-modificado.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: ["7:30 - 9:00", "11:30 - 13:30", "17:30 - 19:00"],
        scheme:
          "El ‘pico y placa’ contempla restricciones en la movilidad para vehículos particulares de placa Nacional (automóviles, motocicletas, camionetas, camiones, volquetes) matriculados en Cúcuta, Villa del Rosario, Los Patios y El Zulia",
        observations: `Aplica en el cuadrante del centro que encierran las siguientes avenidas y calles:<ul>
          <li>Diagonal Santander: En sus dos calzadas desde la Glorieta de El Terminal (no incluye la glorieta), hasta llegar al cruce que conduce a la avenida Los Libertadores.</li>
          <li>Avenida Los Libertadores: Desde el cruce con Diagonal Santander sentido norte-sur (Corponor), hasta la calle 18.</li>
          <li>Calle 18: Desde la Avenida Los Libertadores hasta la avenida 4.</li>
          <li>Avenida 4: Desde la calle 17 hasta la calle 18.</li>
          <li>Avenida 8: Desde la calle 2 hasta la calle 17.</li>
          <li>Calle 2: Desde la avenida 8 hasta la avenida 7 del barrio El Callejón.</li>
          <li>Avenida 7: Desde la calle 2 hasta la Glorieta de El Terminal (no incluye la glorieta).</li></ul>`
      },
      name: "Particulares",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = {
            1: "0-9", // lunes
            2: "1-8", // martes
            3: "2-7", // miércoles
            4: "3-6", // jueves
            5: "4-5" // viernes
          };
          return pyp[pypFuncs.getDay(date)];
        });
      }
    },
    motos: {
      info: {
        vehicleClasses: [
          "Vehículos automotores particulares de dos tiempos tipo motocicleta, mototriciclos, cuatrimotos y motocarros"
        ],
        decrees: [
          {
            name: "Decretos 0239 del 4 de abril del 2017",
            url:
              "http://www.areacucuta.com/wp-content/uploads/2017/04/Decreto-Pico-y-Placa-Placa-y-D%C3%ADa.pdf"
          },
          {
            name: "Decretos 0330 del 22 de mayo del 2017",
            url:
              "http://cucutaonline.com/wp-content/uploads/2017/05/Decreto-0330-pico-placa-modificado.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: ["7:30 - 9:00", "11:30 - 13:30", "17:30 - 19:00"],
        scheme:
          "El ‘pico y placa’ contempla restricciones en la movilidad para vehículos particulares de placa Nacional (automóviles, motocicletas, camionetas, camiones, volquetes) matriculados en Cúcuta, Villa del Rosario, Los Patios y El Zulia",
        observations: `Aplica en el cuadrante del centro que encierran las siguientes avenidas y calles:<ul>
          <li>Diagonal Santander: En sus dos calzadas desde la Glorieta de El Terminal (no incluye la glorieta), hasta llegar al cruce que conduce a la avenida Los Libertadores.</li>
          <li>Avenida Los Libertadores: Desde el cruce con Diagonal Santander sentido norte-sur (Corponor), hasta la calle 18.</li>
          <li>Calle 18: Desde la Avenida Los Libertadores hasta la avenida 4.</li>
          <li>Avenida 4: Desde la calle 17 hasta la calle 18.</li>
          <li>Avenida 8: Desde la calle 2 hasta la calle 17.</li>
          <li>Calle 2: Desde la avenida 8 hasta la avenida 7 del barrio El Callejón.</li>
          <li>Avenida 7: Desde la calle 2 hasta la Glorieta de El Terminal (no incluye la glorieta).</li></ul>`
      },
      name: "Motos",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = {
            1: "0-9", // lunes
            2: "1-8", // martes
            3: "2-7", // miércoles
            4: "3-6", // jueves
            5: "4-5" // viernes
          };
          return pyp[pypFuncs.getDay(date)];
        });
      }
    }
  }
};
