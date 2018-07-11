import * as pypFuncs from "../utils/funcs";

export default {
  name: "Cali",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular."],
        decrees: [
          {
            name: "Decreto 4112.010.20.0318-28/06/2018 del 3 de julio de2018",
            url:
              "http://www.cali.gov.co/aplicaciones/boletin_publicaciones/imagenes_documentos/documentoId11660.pdf"
          },
          {
            name: "Decreto 0001 del 4 de enero de 2018",
            url:
              "http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496"
          }
        ],
        days: [
          "Lunes a viernes hábiles (no aplica sábados, domingos y feriados establecidos por la ley o cuando excepcionalmente lo establezca la autoridad competente)."
        ],
        hours: ["6:00 - 10:00", "16:00 - 20:00"],
        scheme: "Se toma como referencia el último dígito de la placa",
        observations:
          "Restringe la circulación de vehículos de servicio particular, servicio oficial y público solo en la modalidad especial, esta última para los vehículos de clase automovil, campero y camioneta hsta de cinco (5) sillas o puestos, es decir, el conductor más cuatro (4) pasajeros."
      },
      name: "Particulares",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2018-01-01";
          const pypNums = ["3-4", "5-6", "7-8", "9-0", "1-2"];
          const lapse = pypFuncs.monthsDiff(startDate, date, 6);
          const newPypNums = pypFuncs.arrRotate(pypNums, lapse);
          return newPypNums[pypFuncs.getDay(date) - 1];
        });
      }
    },
    taxis: {
      info: {
        vehicleClasses: [
          "Vehículos de transporte público individual de pasajeros - Taxis."
        ],
        decrees: [
          {
            name: "Decreto 4112.010.20.0318-28/06/2018 del 3 de julio de2018",
            url:
              "http://www.cali.gov.co/aplicaciones/boletin_publicaciones/imagenes_documentos/documentoId11660.pdf"
          },
          {
            name: "Decreto 0001 del 4 de enero de 2018",
            url:
              "http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496"
          }
        ],
        days: ["Lunes a domingo"],
        hours: ["06:00 - 05:00 del día siguiente"],
        scheme:
          "Rotación de acuerdo con el último dígito del número de la placa",
        observations: ""
      },
      name: "Taxis",
      na: [],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, false, () => {
          const startDate = "2018-01-01";
          const startNums = "7-8";
          const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
          return pypFuncs.rotateByDay(date, startDate, startNums, pypNums, []);
        });
      }
    },
    tpc: {
      info: {
        vehicleClasses: [
          "Vehículos de Transporte de Servicio Público Colectivo"
        ],
        decrees: [
          {
            name: "Decreto 0001 del 4 de enero de 2018",
            url:
              "http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496"
          }
        ],
        days: ["Lunes a domingo"],
        hours: ["05:00 - 22:00"],
        scheme:
          "Rotación de acuerdo con el último dígito del número de la placa",
        observations: ""
      },
      name: "Transporte Público Colectivo",
      na: [],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, false, () => {
          const startDate = "2018-01-01";
          const startNums = "6-7";
          const pypNums = ["0-1", "2-3", "4-5", "6-7", "8-9"];
          return pypFuncs.rotateByDay(date, startDate, startNums, pypNums, []);
        });
      }
    }
  }
};
