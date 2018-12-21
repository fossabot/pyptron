const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Ibagué",
  categories: {
    particulares: [
      {
        from: "2018-11-01",
        info: {
          vehicleClasses: ["Vehículos particulares y oficiales"],
          decrees: [
            {
              name: "Decreto 0037 de 13 de Enero de 2017",
              url:
                "http://www.ibague.gov.co/portal/admin/archivos/normatividad/2017/16370-DEC-20170116.pdf"
            },
            {
              name: "Decreto 0946 del 31 de octubre de 2018",
              url: "https://cdn.pyphoy.com/ibague/decreto-0946-de-2018.pdf"
            }
          ],
          days: ["Días hábiles de la semana - lunes a viernes."],
          hours: [
            {
              comment: "",
              hours: [["6:00", "9:00"], ["11:30", "14:30"], ["17:00", "19:30"]],
              days: []
            }
          ],
          scheme:
            "Restringir la circulación de vehículos particulares (carros) en toda el área urbana de la ciudad de Ibagué. Exceptuando tránsito vehícular por las variantes nacionales",
          observations:
            "Se exceptúan de esta restricción todos los vehículos paarticulares en tránsito por la Ciudad de Ibagué sector urbano, deben hacer uso de las vías nacionales (variantes), (i) procedente del departamento del Quindio -vía Bogotá, y viceversa (ii) Ibagué-Alvarado y viceversa.",
          exceptions: `Exceptúese de la restricción a la circulación por Pico y Placa, los siguientes vehículos automotores de registro particular, por medio de los cuales se realiza alguna de las suguientes actividades, o se transporta personas cumpliendo misiones y que se encuentres debidamente identificados y certificados, dadas las obligaciones y responsabilidades que para cada una se facultan:<ul>
        <li>De polocía, fuerzas militares, organismos de seguridad o escoltas y perdiodistas.</li>
        <li>Des servicios públicos domiciliarios (acueducto, telefonía, energía, gas y recolectores de basura.</li>
        <li>Motocicletas.</li>
        <li>De distribución de bienes y alimentos.</li>
        <li>De transporte de valores y vehículos de seguridad.</li>
        <li>De atención médica domiciliaria, transporte de enfermos en caso de emergencia, tales como ambulancias, bomberos, defensa civil, cruz roja, incluyendo médicos que demuestren que requieren desplazarse para el ejercicio vital de sus funciones profesionales.</li>
        <li>De servicio funerario.</li>
        <li>Vehículos procedentes de otras regiones y que se encuentren de paso por la ciudad, situación que se acreditará, con el respectivo recibo de pago del peaje fechado el mismo día de tránsito por la Ciudad.</li>
        <li>Vehículos que tengan adaptados mecanismos para desplazar discapacitados, o en los que ellos se desplacen.</li>
        </ul>No serán objeto de la restricción a la circulación por Pico y Placa, los vehículos automotores de registro oficial, diplomático y consular.`
        },
        name: "Particulares",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, true, () => {
            const pyp = [
              "0-1", // lunes
              "2-3", // martes
              "4-5", // miércoles
              "6-7", // jueves
              "8-9" // iernes
            ];
            return pyp[pypFuncs.getDay(date) - 1];
          });
        }
      },
      {
        from: "2018-01-13",
        info: {
          vehicleClasses: ["Vehículos particulares y oficiales"],
          decrees: [
            {
              name: "Decreto 0037 de 13 de Enero de 2017",
              url:
                "http://www.ibague.gov.co/portal/admin/archivos/normatividad/2017/16370-DEC-20170116.pdf"
            },
            {
              name: "Decreto 0946 del 31 de octubre de 2018",
              url: "https://cdn.pyphoy.com/ibague/decreto-0946-de-2018.pdf"
            }
          ],
          days: ["Días hábiles de la semana - lunes a viernes."],
          hours: [
            {
              comment: "",
              hours: [["6:30", "9:00"], ["17:00", "19:30"]],
              days: []
            }
          ],
          scheme:
            "Restringir la circulación de vehículos particulares (carros) en toda el área urbana de la ciudad de Ibagué. Exceptuando tránsito vehícular por las variantes nacionales",
          observations:
            "Se exceptúan de esta restricción todos los vehículos paarticulares en tránsito por la Ciudad de Ibagué sector urbano, deben hacer uso de las vías nacionales (variantes), (i) procedente del departamento del Quindio -vía Bogotá, y viceversa (ii) Ibagué-Alvarado y viceversa.",
          exceptions: `Exceptúese de la restricción a la circulación por Pico y Placa, los siguientes vehículos automotores de registro particular, por medio de los cuales se realiza alguna de las suguientes actividades, o se transporta personas cumpliendo misiones y que se encuentres debidamente identificados y certificados, dadas las obligaciones y responsabilidades que para cada una se facultan:<ul>
        <li>De polocía, fuerzas militares, organismos de seguridad o escoltas y perdiodistas.</li>
        <li>Des servicios públicos domiciliarios (acueducto, telefonía, energía, gas y recolectores de basura.</li>
        <li>Motocicletas.</li>
        <li>De distribución de bienes y alimentos.</li>
        <li>De transporte de valores y vehículos de seguridad.</li>
        <li>De atención médica domiciliaria, transporte de enfermos en caso de emergencia, tales como ambulancias, bomberos, defensa civil, cruz roja, incluyendo médicos que demuestren que requieren desplazarse para el ejercicio vital de sus funciones profesionales.</li>
        <li>De servicio funerario.</li>
        <li>Vehículos procedentes de otras regiones y que se encuentren de paso por la ciudad, situación que se acreditará, con el respectivo recibo de pago del peaje fechado el mismo día de tránsito por la Ciudad.</li>
        <li>Vehículos que tengan adaptados mecanismos para desplazar discapacitados, o en los que ellos se desplacen.</li>
        </ul>No serán objeto de la restricción a la circulación por Pico y Placa, los vehículos automotores de registro oficial, diplomático y consular.`
        },
        name: "Particulares",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, true, () => {
            const pyp = [
              "0-1", // lunes
              "2-3", // martes
              "4-5", // miércoles
              "6-7", // jueves
              "8-9" // viernes
            ];
            return pyp[pypFuncs.getDay(date) - 1];
          });
        }
      }
    ],
    tpc: [
      {
        from: "2017-12-02",
        info: {
          vehicleClasses: [
            "Transporte público colectivo municipal de pasajeros"
          ],
          decrees: [
            {
              name: "Decreto 0387 del 11 de abril de 2016",
              url:
                "http://www.ibague.gov.co/portal/admin/archivos/normatividad/2016/13967-DEC-20160415.pdf"
            }
          ],
          days: ["Todos los días de la semana"],
          hours: [
            {
              comment: "Todo el día",
              hours: [[]],
              days: []
            }
          ],
          scheme:
            "Restringe la circulación de Vehículos de Servicio Público de Transporte Colectivo Municipal de Pasajeros, tipo Busetón, Buseta, Microbus, en todo el territorio Urbano de la ciudad de Ibagué, durante las veinticuatro (24) horas de cada día"
        },
        name: "Transporte Público Colectivo",
        na: [],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, false, () => {
            const startDate = "2017-12-02";
            const pyp = [
              "1-2", // lunes
              "0-3", // martes
              "4-9", // miércoles
              "5-6", // jueves
              "7-8" // viernes
            ];
            const daysDiff = pypFuncs.daysDiff(startDate, date, []) - 1;
            return pyp[daysDiff % pyp.length];
          });
        }
      }
    ],
    taxis: [
      {
        from: "2017-12-01",
        info: {
          vehicleClasses: ["Transporte público individual - taxis"],
          decrees: [
            {
              name: "Decreto 11-0160 del 29 de febrero de 2008",
              url:
                "http://www.ibague.gov.co/portal/admin/archivos/normatividad/2008/DECRETO%20160.PDF"
            }
          ],
          days: ["Todos los días de la semana"],
          hours: [
            {
              comment: "",
              hours: [["6:00", "6:00"]],
              days: []
            }
          ],
          scheme: "De acuerdo con el último número de la placa del vehículo",
          observations:
            "Las restricciones establecidas para este servicio no se suspenderán en ninguna época del año, ni en festividades de semana santa, mitad o final de año."
        },
        name: "Taxis",
        na: [],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, false, () => {
            const startDate = "2017-12-01";
            return String((pypFuncs.daysDiff(startDate, date, []) + 1) % 10);
          });
        }
      }
    ]
  }
};
