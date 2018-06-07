import * as pypFuncs from "../utils/funcs";

export default {
  name: "Pereira",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 193 de marzo de 2015",
            url: "http://amco.gov.co/Archivos/Articulos/Documentos/00001082.pdf"
          },
          {
            name: "Decreto 516 del 21 de julio de 2015",
            url:
              "http://www.transitopereira.gov.co/app/webroot/index.php/intradocuments/webDownload/decreto_516_del_21_julio_2015_393"
          },
          {
            name: "Decreto 241 del del 2015",
            url:
              "http://www.transitopereira.gov.co/app/webroot/index.php/intradocuments/webDownload/decreto_241_del_2015_394"
          }
        ],
        days: [
          "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 19:00"],
        scheme: "Último dígito del número de la placa según el esquema",
        observations: ""
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
    },
    motos: {
      info: {
        vehicleClasses: ["Motocicletas"],
        decrees: [
          {
            name: "Decreto 193 de marzo de 2015",
            url: "http://amco.gov.co/Archivos/Articulos/Documentos/00001082.pdf"
          },
          {
            name: "Decreto 516 del 21 de julio de 2015",
            url:
              "http://www.transitopereira.gov.co/app/webroot/index.php/intradocuments/webDownload/decreto_516_del_21_julio_2015_393"
          },
          {
            name: "Decreto 241 del del 2015",
            url:
              "http://www.transitopereira.gov.co/app/webroot/index.php/intradocuments/webDownload/decreto_241_del_2015_394"
          }
        ],
        days: [
          "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 19:00"],
        scheme: "Primer dígito del número de la placa según el esquema",
        observations: ""
      },
      name: "Motos",
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
  }
};
