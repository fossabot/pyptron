import medellin from "./medellin";

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
          "La rotación de la medida de “Pico y placa” para toda la ciudad de Envigado, que restringe la circulación de vehículos particules y oficiales, quedará rigiendo durante los periodos comprendidos entre las 07:00 y las 08:30 horas y entre las 17:30 y las 19:00 horas, durante los días hábiles de la semana por grupos de vehículos, según el último número de su placa, a partir del lunes 5 de febrero de 2018.",
        exceptions: `<ul>
          <li>Vehículos de emergencia (ambulancias incluidas las veterinarias, bomberos y demás equipos logísticos para atención de siniestros); vehículos de atención médica personalizada y con identificación permanente.</li>
          <li>Vehículos de transporte escolar debidamente legalizados y con identificación permanente.</li>
          <li>Vehículos para el transporte de alimentos perecederos, como cárnicos, lácteos y sus derivados, que se encuentren debidamente legalizados.</li>
          <li>Vehículos dotados tecnológicamente para el mantenimientos de redes de servicios públicos esenciales (energía, semaforización, telefonía, acueducto y alcantarillado, gas, sistema METRO), y con identificación permanente.</li>
          <li>Vehículos propiedad de medios de comuinicación que estén dotados de equipos que no permitan que sea reemplazado por otro vehículo, como el caso de transmóviles u otros de características especiales debidamente identificados.</li>
          <li>Vehículos oficiales y de representación debidamente acreditados, entendiéndose éstos como aquellos vehículos de propiedad de entidades públicas o al servicio de las mismas, destinados al desplazamiento de sus servidores públicos.</li>
          <li>Vehículos pertenecientes a las Fuerzas Militares, Policía Nacional y del INPEC para el transporte de personal detenido.</li>
          <li>Vehículos destinados al control de tráfico, las grúas y carros talleres o de asistencia técnica y/o jurídica, debidamente identificados.</li>
          <li>Vehículos adaptados para la movilización de personas descapacitadas o que en estos se transporten personas con discapacidad o que se encuentren en tratamientos que así lo requieran, tales como quimioterapia, radioterapia, diálisis y similares, la cual deberá estar expresamente certificada; al igual que lo dispuesto en la Resolución 4575 de 7 de noviembre de 2013, emitida por el Ministerio de Transporte en lo relacionado con las personas con dificultad de movilidad.</li>
          <li>Vehículos de transporte de valores debidamente acreditados.</li>
          <li>Las motocicletas de cuatro tiempos.</li>
          <li>Vehículos de transporte público colectivo.</li>
          <li>Vehículos recolectores de basura y mantenimiento del ornato público debidamente identificados.</li>
          <li>Vehículos de carga en cuya licencia de tránsito se refleje una capaciad de ocupantes no superior a tres (3) personas incluyendo el conductor y con capacidad de carga equivalente a 3.5 toneladas o más. En todo caso seguirán vigentes las restricciones establecidas para este tipo de vehículos.</li>
          <li>Vehículos convertidos a gas natural vehícular o que utilicen energía eléctrica en vez de combustible, los cuales deben estar registrados en la licencia de tránsito y/o portar la exención expedidad por la Secretaría de Movilidad.</li>
          <li>Coches fúnebres pero no el cortejo, siempre y cuando, se encuentren penamente identificados con los respectivos distintivos y logotipos de la empresa a la cual le prestan el servicio.</li>
          <li>Vehículos de Blindaje III o superior y que esté expresamente registrado en la licencia de tránsito.</li>
          <li>Vehículos de vigilancia privada debidamente identificados con el logo de la empresa.</li>
          <li>Vehículos de servicio particular que transportes tres (3) o más ocupantes, incluyendo el conductor.</li>
          <li>Vehículos consulares (placa azul), donde se desplace personal consular debidamente acreditado, como también cónsules honorarios, los cuales podrán tener como exento de la medida de tránsito, un vehículo automotor.</li>
          <li>Vehículos donde se transporten Magistrados, Jueces, Fiscales, Produradores, Obispos,Arzobispo, Diputados, Concejales, Contralores, Defensores Públicos, Personeros, Registrador Municipal y/o Especial, Departamental del Estado Civil correspondientes a los municipios que confirman el Valle de Aburrá, Congresistas, y personal de la Unidad Nacional de Protección, los cuales deben estar plenamente identificados.</li>
          <li>Vehículos que provengan de otras ciudades con turistas de paso, quienes deberán demostrar dicha calidad con el primer y último recibo del peaje que certifiquen tal situación y sólo para el primer día.</li>
          <li>En su defecto, los casos en los qeu por estricta y justificada necesidad, sean autorizados de manera temporal por la Secretaría de Movilidad de Envigado.</li>
          <li></li>
        </ul>`
      },
      name: "Particulares",
      na: [0, 6],
      pyp: medellin.categories.particulares.pyp
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
          "La rotación de la medida de “Pico y placa” para motos de dos tiempos, quedará rigiendo entre las 07:00 y las 08:30 y entre las 17:30 y las 19:00 horas, durante los días hábiles de la semana, según el primer número de su placa, a partir del lunes 05 de febrero de 2018.",
        exceptions: `<ul>
          <li>Vehículos de emergencia (ambulancias incluidas las veterinarias, bomberos y demás equipos logísticos para atención de siniestros); vehículos de atención médica personalizada y con identificación permanente.</li>
          <li>Vehículos de transporte escolar debidamente legalizados y con identificación permanente.</li>
          <li>Vehículos para el transporte de alimentos perecederos, como cárnicos, lácteos y sus derivados, que se encuentren debidamente legalizados.</li>
          <li>Vehículos dotados tecnológicamente para el mantenimientos de redes de servicios públicos esenciales (energía, semaforización, telefonía, acueducto y alcantarillado, gas, sistema METRO), y con identificación permanente.</li>
          <li>Vehículos propiedad de medios de comuinicación que estén dotados de equipos que no permitan que sea reemplazado por otro vehículo, como el caso de transmóviles u otros de características especiales debidamente identificados.</li>
          <li>Vehículos oficiales y de representación debidamente acreditados, entendiéndose éstos como aquellos vehículos de propiedad de entidades públicas o al servicio de las mismas, destinados al desplazamiento de sus servidores públicos.</li>
          <li>Vehículos pertenecientes a las Fuerzas Militares, Policía Nacional y del INPEC para el transporte de personal detenido.</li>
          <li>Vehículos destinados al control de tráfico, las grúas y carros talleres o de asistencia técnica y/o jurídica, debidamente identificados.</li>
          <li>Vehículos adaptados para la movilización de personas descapacitadas o que en estos se transporten personas con discapacidad o que se encuentren en tratamientos que así lo requieran, tales como quimioterapia, radioterapia, diálisis y similares, la cual deberá estar expresamente certificada; al igual que lo dispuesto en la Resolución 4575 de 7 de noviembre de 2013, emitida por el Ministerio de Transporte en lo relacionado con las personas con dificultad de movilidad.</li>
          <li>Vehículos de transporte de valores debidamente acreditados.</li>
          <li>Las motocicletas de cuatro tiempos.</li>
          <li>Vehículos de transporte público colectivo.</li>
          <li>Vehículos recolectores de basura y mantenimiento del ornato público debidamente identificados.</li>
          <li>Vehículos de carga en cuya licencia de tránsito se refleje una capaciad de ocupantes no superior a tres (3) personas incluyendo el conductor y con capacidad de carga equivalente a 3.5 toneladas o más. En todo caso seguirán vigentes las restricciones establecidas para este tipo de vehículos.</li>
          <li>Vehículos convertidos a gas natural vehícular o que utilicen energía eléctrica en vez de combustible, los cuales deben estar registrados en la licencia de tránsito y/o portar la exención expedidad por la Secretaría de Movilidad.</li>
          <li>Coches fúnebres pero no el cortejo, siempre y cuando, se encuentren penamente identificados con los respectivos distintivos y logotipos de la empresa a la cual le prestan el servicio.</li>
          <li>Vehículos de Blindaje III o superior y que esté expresamente registrado en la licencia de tránsito.</li>
          <li>Vehículos de vigilancia privada debidamente identificados con el logo de la empresa.</li>
          <li>Vehículos de servicio particular que transportes tres (3) o más ocupantes, incluyendo el conductor.</li>
          <li>Vehículos consulares (placa azul), donde se desplace personal consular debidamente acreditado, como también cónsules honorarios, los cuales podrán tener como exento de la medida de tránsito, un vehículo automotor.</li>
          <li>Vehículos donde se transporten Magistrados, Jueces, Fiscales, Produradores, Obispos,Arzobispo, Diputados, Concejales, Contralores, Defensores Públicos, Personeros, Registrador Municipal y/o Especial, Departamental del Estado Civil correspondientes a los municipios que confirman el Valle de Aburrá, Congresistas, y personal de la Unidad Nacional de Protección, los cuales deben estar plenamente identificados.</li>
          <li>Vehículos que provengan de otras ciudades con turistas de paso, quienes deberán demostrar dicha calidad con el primer y último recibo del peaje que certifiquen tal situación y sólo para el primer día.</li>
          <li>En su defecto, los casos en los qeu por estricta y justificada necesidad, sean autorizados de manera temporal por la Secretaría de Movilidad de Envigado.</li>
        </ul>`
      },
      name: "Motos",
      na: [0, 6],
      pyp: medellin.categories.motos.pyp
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
      pyp: medellin.categories.taxis.pyp
    }
  }
};
