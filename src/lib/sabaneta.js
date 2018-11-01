import medellin from "./medellin";

export default {
  name: "Sabaneta",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos particulares y oficiales"],
        decrees: [
          {
            name: "Decreto Nº 29 del 30 de enero de 2018",
            url:
              "http://www.sabaneta.gov.co/institucional/Normas/DECRETO_029_2018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: medellin.categories.particulares.info.hours,
        scheme:
          "Restringe la circulación de vehículos particulares y oficiales",
        observations:
          "En la jurisdicción del municipio de Sabaneta la medida aplica en las siguientes vías: <ul><li>Variante a Caldas, Calle 84 sur entre carrera 26 y carrera 49.</li><li>Avenida Regional, Carrera 49 entre Calle 50 sur y Calle83 sur.</li><li> Avenida Las Vegas, Carrera 48 entre Calle 50 Sur y Calle 77 Sur.</li><li>Avenida El Poblado, Carrera 43 A entre Calle 50 Sur y Calle 66 Sur</li></ul>",
        exceptions: `Se exceptúan de la presente medida, en consideración a las necesidades de la ciudad, los siguientes vehículos:<ul>
        <li>Vehículos de emergencia (ambulancias, incluidas las veterinarias, bomberos, y todos aquellos que transporten equipo y material logístico, así como los que prestan atención médica personalizada) y los vehículos requeridos para la atención de siniestros siempre que se encuentren demarcados con identificación permanente.</li>
        <li>Los vehículos particulares y oficiales que usen gas natural vehicular o energía eléctrica como combustible, siempre y cuando lo acrediten con la respectiva certificación en el momento de ser requerido por la autoridad en la vía pública.</li>
        <li>Vehículos de transporte escolar debidamente acreditados ante la autoridad competente, demarcados con identificación permanente.</li>
        <li>Vehículos para el transporte de alimentos perecederos debidamente acreditados ante la autoridad competente, y con identificación permanente.</li>
        <li>Vehículos dotados tecnológicamente para el mantenimiento de redes de servicios públicos esenciales (energía, semaforización, telefonía, acueducto y alcantarillado, gas, sistema METRO), demarcados con identificación permanente.</li>
        <li>Vehículos propiedad de medios de comunicación y los vehículos contratados y acreditados, mientras estén al servicio de alguno de los mencionados medios; además, los que estén dotados de equipos que no permitan que sea reemplazado por otro vehículo. En cualquier caso, deberán tener identificación visual externa. Para el sistema de fotodetección se requiere acreditación ante la Secretaría de Movilidad.</li>
        <li>Vehículos pertenecientes a las Fuerzas Militares, Policía Nacional, INPEC que sean especialmente destinados para el transporte de personal detenido.</li>
        <li>Vehículos destinados al control de tránsito, las grúas y carros talleres o de asistencia técnica debidamente identificados en forma visual externa.</li>
        <li>Vehículos particulares y oficiales para el transporte de personas descapacitadas o pacientes y personal médico, que se desplacen en razón de tratamientso vitales como radioterapias, quimioterapias, diálisis o similares, siempre y cuando él o los discapacitados o pacientes estén ocupando el vehículo. Para las infracciones generadas por fotodetección, esta exclusión o exención solo operará frente a los vehículos previamente registrados ante la Secretaría de Movilidad o la Entidad que aquella designe.</li>
        <li>Vehículos acreditados para transportar valores.</li>
        <li>Vehículos de transporte público colectivo.</li>
        <li>Vehículos colectivos tipo bus, busetas y/o microbús de servicio particular, de propiedad de las empresas destinadas al transporte de su personal.</li>
        <li>Vehículos recolectores de basura, debidamente acreditados y con identificación externa.</li>
        <li>Vehículos de carga, incluyendo aquellos en cuya matrícula se establezca una capacidad de pasajeros no superior a dos personas. En todo caso, seguirán vigentes las restricciones establecidas para el transporte de carga.</li>
        <li>Vehículos de servicio de transporte terrestre automotor especial.</li>
        <li>Vehículos con blindaje igual o superior a nivel 3, previa inscripción ante la Secretaría de Movilidad.</li>
        <li>Coches funerarios, más no el cortejo fúnebre.</li>
        <li>Vehículos pertenecientes a empresas privadas de vigilancia, con identificación visual externa permanente, previa acreditación de tal calidad ante la Secretaria de Movilidad.</li>
        <li>Vehículos oficiales de representación debidamente acreditados.</li>
        <li>Vehículos consulares con placa de color azul asignada y en los cuales se desplace personal consular debidamente acreditado y para los cónsules honorarios solo un vehículo y que figure como propietario del mimso.</li>
        <li>Vehículos particulares y oficiales en los que transporte magistrados de los diferentes tribunales, juecesm fiscales, defensores públicos, procuradores judiciales, inspectores urbanos de policía de primera categoría y comisario sde familia, Arzobispo, y Arzobispos Auxiliares, Concejales, Personeros, Contralores y Vice contralores, Registrador municipal y/o Especial, Departamental del Estado Civil correspondientes a los municipios que conformen el Valle de Aburra, siempre y cuando estén ocupando el vehículo y se acredite como tal, con el carné expedido por la respectiva Entidad, cuando sea requerido por la autoridad en la vía pública. Para las infracciones generadas por fotodetección esta exclusión o exención solo operará frente a los vehículos previamente registrados ante la Secretaría de Movilidad o la entidad que aquella designe.</li>
        <li>Vehículos particulares u oficiales en que se transporten los honorables diputados de la Asamblea de Antioqui, siempre que estos personajes se encuentren dentro del vehículo y ostenten esta calidad, la cual deberá acreditar en el momento en que sea requerido por la autoridad de tránsito en vía pública. Para las infracciones generadas por fotodetección esta exclusión o exención solo operará frente a los vehiculos previamente registrados ante la Secretaría de Movilidad o la entidad que aquella designe.</li>
        <li>Vehículos con placas de municipios de otros departamenteos, siempre y cuando su conductor demuestre la calidad de turista con la exhibición del tiquete del primer peaje de ingreso al departamenteo de Antioquia, el cual será válido como medio de prueba ante la autoridad competente y solo para el primer día.</li>
        <li>Aquellos casos en los que por las necesidades en la prestación de un servicio sean autorizados por el Secretario de Movilidad.</li>
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
            name: "Decreto Nº 29 del 30 de enero de 2018",
            url:
              "http://www.sabaneta.gov.co/institucional/Normas/DECRETO_029_2018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: medellin.categories.motos.info.hours,
        scheme:
          "Restringe la circulación de motos de dos tiempos según el primer número de su placa",
        observations:
          "En la jurisdicción del municipio de Sabaneta la medida aplica en las siguientes vías: <ul><li>Variante a Caldas, Calle 84 sur entre carrera 26 y carrera 49.</li><li>Avenida Regional, Carrera 49 entre Calle 50 sur y Calle83 sur.</li><li> Avenida Las Vegas, Carrera 48 entre Calle 50 Sur y Calle 77 Sur.</li><li>Avenida El Poblado, Carrera 43 A entre Calle 50 Sur y Calle 66 Sur</li></ul>",
        exceptions: `Se exceptúan de la presente medida, en consideración a las necesidades de la ciudad, los siguientes vehículos:<ul>
          <li>Vehículos de emergencia (ambulancias, incluidas las veterinarias, bomberos, y todos aquellos que transporten equipo y material logístico, así como los que prestan atención médica personalizada) y los vehículos requeridos para la atención de siniestros siempre que se encuentren demarcados con identificación permanente.</li>
          <li>Los vehículos particulares y oficiales que usen gas natural vehicular o energía eléctrica como combustible, siempre y cuando lo acrediten con la respectiva certificación en el momento de ser requerido por la autoridad en la vía pública.</li>
          <li>Vehículos de transporte escolar debidamente acreditados ante la autoridad competente, demarcados con identificación permanente.</li>
          <li>Vehículos para el transporte de alimentos perecederos debidamente acreditados ante la autoridad competente, y con identificación permanente.</li>
          <li>Vehículos dotados tecnológicamente para el mantenimiento de redes de servicios públicos esenciales (energía, semaforización, telefonía, acueducto y alcantarillado, gas, sistema METRO), demarcados con identificación permanente.</li>
          <li>Vehículos propiedad de medios de comunicación y los vehículos contratados y acreditados, mientras estén al servicio de alguno de los mencionados medios; además, los que estén dotados de equipos que no permitan que sea reemplazado por otro vehículo. En cualquier caso, deberán tener identificación visual externa. Para el sistema de fotodetección se requiere acreditación ante la Secretaría de Movilidad.</li>
          <li>Vehículos pertenecientes a las Fuerzas Militares, Policía Nacional, INPEC que sean especialmente destinados para el transporte de personal detenido.</li>
          <li>Vehículos destinados al control de tránsito, las grúas y carros talleres o de asistencia técnica debidamente identificados en forma visual externa.</li>
          <li>Vehículos particulares y oficiales para el transporte de personas descapacitadas o pacientes y personal médico, que se desplacen en razón de tratamientso vitales como radioterapias, quimioterapias, diálisis o similares, siempre y cuando él o los discapacitados o pacientes estén ocupando el vehículo. Para las infracciones generadas por fotodetección, esta exclusión o exención solo operará frente a los vehículos previamente registrados ante la Secretaría de Movilidad o la Entidad que aquella designe.</li>
          <li>Vehículos acreditados para transportar valores.</li>
          <li>Vehículos de transporte público colectivo.</li>
          <li>Vehículos colectivos tipo bus, busetas y/o microbús de servicio particular, de propiedad de las empresas destinadas al transporte de su personal.</li>
          <li>Vehículos recolectores de basura, debidamente acreditados y con identificación externa.</li>
          <li>Vehículos de carga, incluyendo aquellos en cuya matrícula se establezca una capacidad de pasajeros no superior a dos personas. En todo caso, seguirán vigentes las restricciones establecidas para el transporte de carga.</li>
          <li>Vehículos de servicio de transporte terrestre automotor especial.</li>
          <li>Vehículos con blindaje igual o superior a nivel 3, previa inscripción ante la Secretaría de Movilidad.</li>
          <li>Coches funerarios, más no el cortejo fúnebre.</li>
          <li>Vehículos pertenecientes a empresas privadas de vigilancia, con identificación visual externa permanente, previa acreditación de tal calidad ante la Secretaria de Movilidad.</li>
          <li>Vehículos oficiales de representación debidamente acreditados.</li>
          <li>Vehículos consulares con placa de color azul asignada y en los cuales se desplace personal consular debidamente acreditado y para los cónsules honorarios solo un vehículo y que figure como propietario del mimso.</li>
          <li>Vehículos particulares y oficiales en los que transporte magistrados de los diferentes tribunales, juecesm fiscales, defensores públicos, procuradores judiciales, inspectores urbanos de policía de primera categoría y comisario sde familia, Arzobispo, y Arzobispos Auxiliares, Concejales, Personeros, Contralores y Vice contralores, Registrador municipal y/o Especial, Departamental del Estado Civil correspondientes a los municipios que conformen el Valle de Aburra, siempre y cuando estén ocupando el vehículo y se acredite como tal, con el carné expedido por la respectiva Entidad, cuando sea requerido por la autoridad en la vía pública. Para las infracciones generadas por fotodetección esta exclusión o exención solo operará frente a los vehículos previamente registrados ante la Secretaría de Movilidad o la entidad que aquella designe.</li>
          <li>Vehículos particulares u oficiales en que se transporten los honorables diputados de la Asamblea de Antioqui, siempre que estos personajes se encuentren dentro del vehículo y ostenten esta calidad, la cual deberá acreditar en el momento en que sea requerido por la autoridad de tránsito en vía pública. Para las infracciones generadas por fotodetección esta exclusión o exención solo operará frente a los vehiculos previamente registrados ante la Secretaría de Movilidad o la entidad que aquella designe.</li>
          <li>Vehículos con placas de municipios de otros departamenteos, siempre y cuando su conductor demuestre la calidad de turista con la exhibición del tiquete del primer peaje de ingreso al departamenteo de Antioquia, el cual será válido como medio de prueba ante la autoridad competente y solo para el primer día.</li>
          <li>Aquellos casos en los que por las necesidades en la prestación de un servicio sean autorizados por el Secretario de Movilidad.</li>
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
            name: "Decreto Nº 29 del 30 de enero de 2018",
            url:
              "http://www.sabaneta.gov.co/institucional/Normas/DECRETO_029_2018.pdf"
          }
        ],
        days: ["Días hábiles de la semana - lunes a viernes."],
        hours: medellin.categories.taxis.info.hours,
        scheme: "De acuerdo con el último número de la placa del vehículo",
        observations:
          "En la jurisdicción del municipio de Sabaneta la medida aplica en las siguientes vías: <ul><li>Variante a Caldas, Calle 84 sur entre carrera 26 y carrera 49.</li><li>Avenida Regional, Carrera 49 entre Calle 50 sur y Calle83 sur.</li><li> Avenida Las Vegas, Carrera 48 entre Calle 50 Sur y Calle 77 Sur.</li><li>Avenida El Poblado, Carrera 43 A entre Calle 50 Sur y Calle 66 Sur</li></ul>"
      },
      name: "Taxis",
      na: [0, 6],
      pyp: medellin.categories.taxis.pyp
    }
  }
};
