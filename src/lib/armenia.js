import * as pypFuncs from "../utils/funcs";

export default {
  name: "Armenia",
  categories: {
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 083 de 2016",
            url: "https://cdn.pyphoy.com/armenia/decreto-083-de-2016.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: [
          "Centro de la ciudad: 7:30 - 19:30",
          "Toda la ciudad: 7:30 - 9:30, 11:30 - 14:30 y 17:30 - 19:30"
        ],
        scheme: "Último dígito del número de la placa según el esquema",
        exceptions: `Se exceptúa de la medida para la restricción vehicular los siguientes vehículos: <ul>
        <li>Vehículos de asistencia médica de urgencias, domiciliarios adscritos, en propiedad o alquiler de empresas cuyo objeto social sea la prestación de servicio de salud, para lo cual la persona natural o jurídica autorizada deberá tramitar ante el organismo de tránsito de Armenia la inscripción del vehículo autorizado para este servicio, prestando el contrato trabajo respectivo, certificado de existencia y Representación expedido por la Cámara de Comercio (con fecha de expedición no mayor a treinta (30) días) RUT, comprobante de pago de parafiscales y seguridad social del último mes, fotocopia de la cédula de ciudadanía, fotocopia de la licencia de conducción del conductor, fotocopia de la licencia de tránsito del vehículo, seguro obligatorio vigente, revisión técnico mecánica y encontrarse a paz y salvo por infracciones de tránsito.</li>
        <li>Los vehículos pertenecientes a las Fuerzas Armadas, a la Policia Nacional, los agentes y reguladores de Trásito y Transporte en sus respectivos horarios laborales.</li>
        <li>Carrozas fúnebres, más no el cortejo fúnebre.</li>
        <li>Los vehículos tipo ambulancia, debidamente habilitados por la autoridad competente.</li>
        <li>Vehículos pertenecientes al cuerpo de Bomberos, Cruz Roja, Defensa Civil y cualquiera institución dedicada exclusivamente a la atención de emergencias y que se encuentre plenamente identificados y cumpliendo del servicio.</li>
        <li>Vehículos adaptados y que transporten personas con discapacidad, únicamente cuando se utulicen como medio exclusivo de transporte de estas personas, siempre y cuando él o la persona con discapacidad estén ocupando el vehículo.  Para estos efectos se deberá presentar el certificado médico correspondiente y demostrar la disposición en el vehículo de los medios de ayuda individual (silla de ruedad, etc).</li>
        <li>Vehículos operativos de empresas de servicios públicos domiciliarios con logo que los identifique, con presentación del carnet de la empresa por parte del funcionario o el contratista.</li>
        <li>Grúas de servicio público y particular solo durante la prestación del servicio.</li>
        <li>Los vehículos destinados a la prestación del servicio de escoltas debidamente identificados y durante la prestación del servicio.</li>
        <li>Los vehículos de transporte de valores pertenecientes a las empresas autorizadas para tal fin.</li>
        <li>Los vehículos autorizados para transporte escolar privado de propiedad de los establecimientos educativos y sólo durante la prestación del servicio.</li>
        <li>Vehículos provenientes de otra ciudad o departamento que presenten el comprobante de pago de peaje con fecha del día que se solicite.</li>
        <li>Vehículos adscritos a empresas de comunicaciones radiales, escritas o televisivas plenamente identificados en su parte exterior con el logo del medio de comunicación. El comunicador deberá presentar el documento idóneo que lo acredita como tal.</li>
        <li>Vehículos destinados al transporte de alimentos perecederos debidamente registrados ante la autoridad sanitaria, para lo cual debe eschibir el documento que lo acredita.</li>
        <li>Vehículos operativos de empresas de servicios públicos domiciliarios con logo que los identifique, con la presentación del carnet de la empresa por parte del funcionario o el contratista.</li>
        <li>Vehículos pertenecientes a empresas de mensajería, adscritos a una empresa autorizada para realizar dicha labor, para lo cual deben de estar plenamente identificados y durante la prestación del servicio.</li>
        <li>Vehículos particulares en los que transporten magistrados de los diferentes tribunales, jueces, fiscales, Defensor(a) del Pueblo, Contralor(a) Municipal y Departamental, Personero(a), procuradores provinciales y regionales, Obispo, Director (a) del SENA, ICBF, Director (a) de la Cruz Roja y Defensa Civil, Director(a) INPEC, Director(a) de Gestión del Riesgo Municipal y Departamental, diputados y concejales, Registrador(a), vehículos asignados por la Agencia Nacional de Protección, siempre que dichos funcionarios se encuentren dentro del vehículo y ostentes dicha calidad, lo cual deberá acreditarse en el momento en que sea requerido por la autoridad de tránsito en la vía Pública.</li>
        </ul>`
      },
      name: "Particulares",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = [
            "1-2", // lunes
            "3-4", // martes
            "5-6", // miércoles
            "7-8", // jueves
            "9-0" // viernes
          ];
          return pyp[pypFuncs.getDay(date) - 1];
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
            name: "Decreto 083 de 2016",
            url: "https://cdn.pyphoy.com/armenia/decreto-083-de-2016.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: [
          "Centro de la ciudad: 7:30 - 19:30",
          "Toda la ciudad: 7:30 - 9:30, 11:30 - 14:30 y 17:30 - 19:30"
        ],
        scheme: "Primer dígito del número de la placa según el esquema",
        exceptions: `Se exceptúa de la medida para la restricción vehicular los siguientes vehículos: <ul>
        <li>Vehículos de asistencia médica de urgencias, domiciliarios adscritos, en propiedad o alquiler de empresas cuyo objeto social sea la prestación de servicio de salud, para lo cual la persona natural o jurídica autorizada deberá tramitar ante el organismo de tránsito de Armenia la inscripción del vehículo autorizado para este servicio, prestando el contrato trabajo respectivo, certificado de existencia y Representación expedido por la Cámara de Comercio (con fecha de expedición no mayor a treinta (30) días) RUT, comprobante de pago de parafiscales y seguridad social del último mes, fotocopia de la cédula de ciudadanía, fotocopia de la licencia de conducción del conductor, fotocopia de la licencia de tránsito del vehículo, seguro obligatorio vigente, revisión técnico mecánica y encontrarse a paz y salvo por infracciones de tránsito.</li>
        <li>Los vehículos pertenecientes a las Fuerzas Armadas, a la Policia Nacional, los agentes y reguladores de Trásito y Transporte en sus respectivos horarios laborales.</li>
        <li>Carrozas fúnebres, más no el cortejo fúnebre.</li>
        <li>Los vehículos tipo ambulancia, debidamente habilitados por la autoridad competente.</li>
        <li>Vehículos pertenecientes al cuerpo de Bomberos, Cruz Roja, Defensa Civil y cualquiera institución dedicada exclusivamente a la atención de emergencias y que se encuentre plenamente identificados y cumpliendo del servicio.</li>
        <li>Vehículos adaptados y que transporten personas con discapacidad, únicamente cuando se utulicen como medio exclusivo de transporte de estas personas, siempre y cuando él o la persona con discapacidad estén ocupando el vehículo.  Para estos efectos se deberá presentar el certificado médico correspondiente y demostrar la disposición en el vehículo de los medios de ayuda individual (silla de ruedad, etc).</li>
        <li>Vehículos operativos de empresas de servicios públicos domiciliarios con logo que los identifique, con presentación del carnet de la empresa por parte del funcionario o el contratista.</li>
        <li>Grúas de servicio público y particular solo durante la prestación del servicio.</li>
        <li>Los vehículos destinados a la prestación del servicio de escoltas debidamente identificados y durante la prestación del servicio.</li>
        <li>Los vehículos de transporte de valores pertenecientes a las empresas autorizadas para tal fin.</li>
        <li>Los vehículos autorizados para transporte escolar privado de propiedad de los establecimientos educativos y sólo durante la prestación del servicio.</li>
        <li>Vehículos provenientes de otra ciudad o departamento que presenten el comprobante de pago de peaje con fecha del día que se solicite.</li>
        <li>Vehículos adscritos a empresas de comunicaciones radiales, escritas o televisivas plenamente identificados en su parte exterior con el logo del medio de comunicación. El comunicador deberá presentar el documento idóneo que lo acredita como tal.</li>
        <li>Vehículos destinados al transporte de alimentos perecederos debidamente registrados ante la autoridad sanitaria, para lo cual debe eschibir el documento que lo acredita.</li>
        <li>Vehículos operativos de empresas de servicios públicos domiciliarios con logo que los identifique, con la presentación del carnet de la empresa por parte del funcionario o el contratista.</li>
        <li>Vehículos pertenecientes a empresas de mensajería, adscritos a una empresa autorizada para realizar dicha labor, para lo cual deben de estar plenamente identificados y durante la prestación del servicio.</li>
        <li>Vehículos particulares en los que transporten magistrados de los diferentes tribunales, jueces, fiscales, Defensor(a) del Pueblo, Contralor(a) Municipal y Departamental, Personero(a), procuradores provinciales y regionales, Obispo, Director (a) del SENA, ICBF, Director (a) de la Cruz Roja y Defensa Civil, Director(a) INPEC, Director(a) de Gestión del Riesgo Municipal y Departamental, diputados y concejales, Registrador(a), vehículos asignados por la Agencia Nacional de Protección, siempre que dichos funcionarios se encuentren dentro del vehículo y ostentes dicha calidad, lo cual deberá acreditarse en el momento en que sea requerido por la autoridad de tránsito en la vía Pública.</li>
        </ul>`
      },
      name: "Motos",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const pyp = [
            "1-2", // lunes
            "3-4", // martes
            "5-6", // miércoles
            "7-8", // jueves
            "9-0" // viernes
          ];
          return pyp[pypFuncs.getDay(date) - 1];
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
            name: "Decreto 083 de 2016",
            url: "https://cdn.pyphoy.com/armenia/decreto-083-de-2016.pdf"
          }
        ],
        days: ["Lunes a viernes hábiles"],
        hours: ["7:30 - 19:30"],
        scheme: "Primer dígito del número de la placa según el esquema"
      },
      name: "Taxis",
      na: [0, 6],
      pyp(date) {
        return pypFuncs.pyp(date, this.na, true, () => {
          const startDate = "2017-12-11";
          const startNums = "1-2";
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
