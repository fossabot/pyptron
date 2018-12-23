const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Pereira",
  categories: {
    particulares: [
      {
        from: "2015-04-07",
        info: {
          vehicleClasses: ["Vehículos automotores de servicio particular"],
          decrees: [
            {
              name: "Decreto 193 del 6 de marzo de 2015",
              url: pypFuncs.buildAssetPath(
                "pereira",
                "decreto-193-del-6-de-marzo-de-2015.pdf"
              )
            },
            {
              name: "Decreto 516 del 21 de julio de 2015",
              url: pypFuncs.buildAssetPath(
                "pereira",
                "decreto-516-del-21-de-julio-de-2015.pdf"
              )
            },
            {
              name: "Decreto 241 del 26 de marzo de 2016",
              url: pypFuncs.buildAssetPath(
                "pereira",
                "decreto-241-del-26-de-marzo-de-2016.pdf"
              )
            }
          ],
          days: [
            "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
          ],
          hours: [
            {
              comment: "",
              hours: [["7:00", "19:00"]],
              days: []
            }
          ],
          scheme: "Último dígito del número de la placa según el esquema",
          observations: `Se establece como restricción del pico y placa, para los vehículos particulares y motos, el área al interior del perímeto delimitado por las siguientes vías e interseccones:
        <ul>
          <li>Partiendo del puente Mosquera se continúa por la avenida del Río hasta la intersección de Turín. Este corredor en ambos sentidos no estará sometido a la medida de pico y placa.</li>
          <li>De la intersección de Turín se continúa por la avenida 30 de Agosto hasta la intersección de la Villa Olímpica. Este corredor en ambos sentidos estará somentido a la medida de pico y placa.</li>
          <li>De la intersección de Turín se continúa por la avenida 30 de Agosto hasta la calle 50, se continúa por la calle 50 hasta la glorieta de la avenida de Las Américas. Este corredor en ambos sentidos estará sometido a la medida de pico y placa.</li>
          <li>De la intersección de la glorieta de la calle 50, se continúa por la avenida de las Américas hasta la intersección de la calle 17 con el Terminal de Transporte. Este corredor se excluye de la medida de pico y placa en ambos sentidos.</li>
          <li>De la intersección de la calle 17 con Terminal de Transporte hacía el norte hasta la intersección de la calle 17 con carrera 13. Este corredor se excluye de la medida de pico y placa en ambos sentidos.</li>
          <li>De la intersección de la calle 17 con carrera 13 se continúa por la avenida del Ferrocarril hasta el viaducto y la carrera 6a con dirección a la avenida del Río - puente Mosquera. Este corredor se excluye de la medida de pico y placa.</li>
        </ul>`,
          exceptions: `<ul>
        <li>Carrozas fúnebres y su cortejo.</li>
        <li>Vehículos pertenecientes a las Fuerzas Militares y de la Policía Nacional.</li>
        <li>Ambulancias.</li>
        <li>Vehículos de asistencia médica de urgencias domiciliarias, adscritos en propiedad o alquiler a empresas cuyo objeto social sea la prestación de servicios de salud.</li>
        <li>Vehículos pertenecientes al Cuerpo de Bomberos, Cruz Roja, Defensa Civil, y a cualquier otra entidad dedicada exclusivamente a la atención de emergencias, que se encuentre plenamente identificado.</li>
        <li>Vehículos que transporten a personas con movilidad reducida, únicamente cuando se utilicen como medio exclusivo de transporte para estas personas. Esta situación deberá acreditarse con el documento que corresponda para cada caso en particular.</li>
        <li>Vehículos operativos de las empresas de servicios públicos domiciliarios que tengan el logotipo que los identifique. En este caso se deberá presentar decumento en el que se evidencie que se está prestando el servicio.</li>
        <li>Grúas públicas o particulares en prestación del serivicio.</li>
        <li>Vehículos destinados al transporte de valores, adcritos a una empresa autorizada para realizar dicha labor.</li>
        <li>Los vehículos destinados a la prestación de los servicios de escolta, debidamente identificados como tales por la autoridad competente y durante la prestación del servicio.</li>
        <li>Vehículos de transporte de carga de capacidad igual o mayor a dos (2) toneladas.</li>
        <li>Vehículos destinados al transporte escolar o de trabajadores, de propiedad del establecimiento educativo o empresa, y sólo en la prestación del servicio.</li>
        <li>Vehículos adscritos a medios de comunicación debidamente identificados con el logotipo de la empresa. El comunicador social para el cual se destina el vehículo deberá presentar el documento idóneo que lo acredita como tal.</li>
        <li>Los vehículos que transporten al personal médico, paramédico y asistencial, de las salas de urgencias y cirugías, previa identificación.</li>
        <li>Los vehículos blindados, autorizados como medida de seguridad.</li>
        </ul>
        `,
          map: pypFuncs.buildAssetPath(
            "pereira",
            "mapa-pico-y-placa-pereira.jpg"
          )
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
    motos: [
      {
        from: "2015-04-07",
        info: {
          vehicleClasses: ["Motocicletas"],
          decrees: [
            {
              name: "Decreto 193 del 6 de marzo de 2015",
              url: pypFuncs.buildAssetPath(
                "pereira",
                "decreto-193-del-6-de-marzo-de-2015.pdf"
              )
            },
            {
              name: "Decreto 516 del 21 de julio de 2015",
              url: pypFuncs.buildAssetPath(
                "pereira",
                "decreto-516-del-21-de-julio-de-2015.pdf"
              )
            },
            {
              name: "Decreto 241 del 26 de marzo de 2016",
              url: pypFuncs.buildAssetPath(
                "pereira",
                "decreto-241-del-26-de-marzo-de-2016.pdf"
              )
            }
          ],
          days: [
            "Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)"
          ],
          hours: [
            {
              comment: "",
              hours: [["7:00", "19:00"]],
              days: []
            }
          ],
          scheme: "Primer dígito del número de la placa según el esquema",
          observations: `Se establece como restricción del pico y placa, para los vehículos particulares y motos, el área al interior del perímeto delimitado por las siguientes vías e interseccones:
        <ul>
          <li>Partiendo del puente Mosquera se continúa por la avenida del Río hasta la intersección de Turín. Este corredor en ambos sentidos no estará sometido a la medida de pico y placa.</li>
          <li>De la intersección de Turín se continúa por la avenida 30 de Agosto hasta la intersección de la Villa Olímpica. Este corredor en ambos sentidos estará somentido a la medida de pico y placa.</li>
          <li>De la intersección de Turín se continúa por la avenida 30 de Agosto hasta la calle 50, se continúa por la calle 50 hasta la glorieta de la avenida de Las Américas. Este corredor en ambos sentidos estará sometido a la medida de pico y placa.</li>
          <li>De la intersección de la glorieta de la calle 50, se continúa por la avenida de las Américas hasta la intersección de la calle 17 con el Terminal de Transporte. Este corredor se excluye de la medida de pico y placa en ambos sentidos.</li>
          <li>De la intersección de la calle 17 con Terminal de Transporte hacía el norte hasta la intersección de la calle 17 con carrera 13. Este corredor se excluye de la medida de pico y placa en ambos sentidos.</li>
          <li>De la intersección de la calle 17 con carrera 13 se continúa por la avenida del Ferrocarril hasta el viaducto y la carrera 6a con dirección a la avenida del Río - puente Mosquera. Este corredor se excluye de la medida de pico y placa.</li>
        </ul>`,
          exceptions: `<ul>
          <li>Carrozas fúnebres y su cortejo.</li>
          <li>Vehículos pertenecientes a las Fuerzas Militares y de la Policía Nacional.</li>
          <li>Ambulancias.</li>
          <li>Vehículos de asistencia médica de urgencias domiciliarias, adscritos en propiedad o alquiler a empresas cuyo objeto social sea la prestación de servicios de salud.</li>
          <li>Vehículos pertenecientes al Cuerpo de Bomberos, Cruz Roja, Defensa Civil, y a cualquier otra entidad dedicada exclusivamente a la atención de emergencias, que se encuentre plenamente identificado.</li>
          <li>Vehículos que transporten a personas con movilidad reducida, únicamente cuando se utilicen como medio exclusivo de transporte para estas personas. Esta situación deberá acreditarse con el documento que corresponda para cada caso en particular.</li>
          <li>Vehículos operativos de las empresas de servicios públicos domiciliarios que tengan el logotipo que los identifique. En este caso se deberá presentar decumento en el que se evidencie que se está prestando el servicio.</li>
          <li>Grúas públicas o particulares en prestación del serivicio.</li>
          <li>Vehículos destinados al transporte de valores, adcritos a una empresa autorizada para realizar dicha labor.</li>
          <li>Los vehículos destinados a la prestación de los servicios de escolta, debidamente identificados como tales por la autoridad competente y durante la prestación del servicio.</li>
          <li>Vehículos de transporte de carga de capacidad igual o mayor a dos (2) toneladas.</li>
          <li>Vehículos destinados al transporte escolar o de trabajadores, de propiedad del establecimiento educativo o empresa, y sólo en la prestación del servicio.</li>
          <li>Vehículos adscritos a medios de comunicación debidamente identificados con el logotipo de la empresa. El comunicador social para el cual se destina el vehículo deberá presentar el documento idóneo que lo acredita como tal.</li>
          <li>Los vehículos que transporten al personal médico, paramédico y asistencial, de las salas de urgencias y cirugías, previa identificación.</li>
          <li>Los vehículos blindados, autorizados como medida de seguridad.</li>
        </ul>`,
          map: pypFuncs.buildAssetPath(
            "pereira",
            "mapa-pico-y-placa-pereira.jpg"
          )
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
    ]
  }
};
