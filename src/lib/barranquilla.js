import * as pypFuncs from "../utils/funcs";

export default {
  name: "Barranquilla",
  categories: {
    taxis: {
      info: {
        vehicleClasses: [
          "Vehículos de transporte público individual de pasajeros - Taxis"
        ],
        decrees: [
          {
            name: "Decreto 0205 de 2009",
            url: "https://cdn.pyphoy.com/barranquilla/decreto-0205-de-2009.pdf"
          },
          {
            name: "BOLETÍN  229",
            url:
              "http://www.barranquilla.gov.co/transito/index.php?option=com_content&view=article&id=16213:se-mantiene-el-pico-y-placa-para-taxis-en-el-2018&catid=36:boletines&Itemid=30"
          }
        ],
        days: [
          "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["Todo el día"],
        scheme:
          "Cíclico de acuerdo con el último número de la placa del vehículo",
        observations: "",
        penalties:
          "Los infractores a lo dispuesto serán sancionados con multa equivalente a quince (15) salarios mínimos diarios legales vigentes e inmovilización del vehículo, según lo consagrado por el artículo 131 literal C numeral 14 de la Ley 769 de 2002."
      },
      name: "Taxis",
      na: [0, 6],
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
    }
  }
};
