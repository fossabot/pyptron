import * as pypFuncs from "../utils/funcs";

export default {
  name: "Pereira",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 193 del 6 de marzo de 2015",
            url:
              "https://cdn.pyphoy.com/pereira/decreto-193-del-6-de-marzo-de-2015.pdf"
          },
          {
            name: "Decreto 516 del 21 de julio de 2015",
            url:
              "https://cdn.pyphoy.com/pereira/decreto-516-del-21-de-julio-de-2015.pdf"
          },
          {
            name: "Decreto 241 del 26 de marzo de 2016",
            url:
              "https://cdn.pyphoy.com/pereira/decreto-241-del-26-de-marzo-de-2016.pdf"
          }
        ],
        days: [
          "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 19:00"],
        scheme: "Último dígito del número de la placa según el esquema",
        observations: `Se establece como restricción del pico y placa, para los vehículos particulares y motos, el área al interio del perímeto delimitado por las siguientes vías e interseccones:
        <ul>
          <li>Partiendo del puente Mosquera se continúa por la avenida del Rio hasta la intersección de Turín. Este corredor en ambos sentidos no estará sometido a la medida de pico y placa.</li>
          <li>De la intersección de Turín se continúa por la avenida 30 de Agosto hasta la intersección de la Villa Olímpica. Este corredor en ambos sentidos estará somentido a la medida de pico y placa.</li>
          <li>De la intersección de Turín se continúa por la avenida 30 de Agosto hasta la calle 50, se continúa por la calle 50 hasta la glorieta de la avenida de Las Américas. Este corredor en ambos sentidos estará sometido a la medida de pico y placa.</li>
          <li>De la intersección de la glorieta de la calle 50, se continúa por la avenida de las Américas hasta la intersección de la calle 17 con el Terminal de Transporte. Este corredor se excluye de la medida de pico y placa en ambos sentidos.</li>
          <li>De la intersección de la calle 17 con Terminal de Transporte hacía el norte hasta la intersección de la calle 17 con carrera 13. Este corredor se excluye de la medida de pico y placa en ambos sentidos.</li>
          <li>De la intersección de la calle 17 con carrera 13 se continúa por la avenida del Ferrocarril hasta el viaducto y la carrera 6a con dirección a la avenida del Rio - puente Mosquera. Este corredor se excluye de la medida de pico y placa.</li>
        </ul>`
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
            name: "Decreto 193 del 6 de marzo de 2015",
            url:
              "https://cdn.pyphoy.com/pereira/decreto-193-del-6-de-marzo-de-2015.pdf"
          },
          {
            name: "Decreto 516 del 21 de julio de 2015",
            url:
              "https://cdn.pyphoy.com/pereira/decreto-516-del-21-de-julio-de-2015.pdf"
          },
          {
            name: "Decreto 241 del 26 de marzo de 2016",
            url:
              "https://cdn.pyphoy.com/pereira/decreto-241-del-26-de-marzo-de-2016.pdf"
          }
        ],
        days: [
          "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 19:00"],
        scheme: "Primer dígito del número de la placa según el esquema",
        observations: `Se establece como restricción del pico y placa, para los vehículos particulares y motos, el área al interio del perímeto delimitado por las siguientes vías e interseccones:
        <ul>
          <li>Partiendo del puente Mosquera se continúa por la avenida del Rio hasta la intersección de Turín. Este corredor en ambos sentidos no estará sometido a la medida de pico y placa.</li>
          <li>De la intersección de Turín se continúa por la avenida 30 de Agosto hasta la intersección de la Villa Olímpica. Este corredor en ambos sentidos estará somentido a la medida de pico y placa.</li>
          <li>De la intersección de Turín se continúa por la avenida 30 de Agosto hasta la calle 50, se continúa por la calle 50 hasta la glorieta de la avenida de Las Américas. Este corredor en ambos sentidos estará sometido a la medida de pico y placa.</li>
          <li>De la intersección de la glorieta de la calle 50, se continúa por la avenida de las Américas hasta la intersección de la calle 17 con el Terminal de Transporte. Este corredor se excluye de la medida de pico y placa en ambos sentidos.</li>
          <li>De la intersección de la calle 17 con Terminal de Transporte hacía el norte hasta la intersección de la calle 17 con carrera 13. Este corredor se excluye de la medida de pico y placa en ambos sentidos.</li>
          <li>De la intersección de la calle 17 con carrera 13 se continúa por la avenida del Ferrocarril hasta el viaducto y la carrera 6a con dirección a la avenida del Rio - puente Mosquera. Este corredor se excluye de la medida de pico y placa.</li>
        </ul>`
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
