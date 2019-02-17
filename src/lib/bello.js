const medellin = require('./medellin')

const medellinParticulares = medellin.categories.particulares
const medellinMotos = medellin.categories.motos
const medellinTaxis = medellin.categories.taxis

module.exports = {
  name: 'Bello',
  categories: {
    particulares: {
      info: {
        vehicleClasses: medellinParticulares.info.vehicleClasses,
        decrees: [
          {
            name: 'Decreto pico y placa enero de 2017',
            url:
              'http://www.bello.gov.co/index.php/component/k2/item/download/219_e570e9fbf71412d35ba571a0635ba25b',
          },
          {
            name: 'Decreto pico y placa febrero de 2018',
            url:
              'http://www.bello.gov.co/index.php/component/k2/item/download/941_94bced8a97224f77da7427d07b1da1b1',
          },
        ],
        days: medellinParticulares.info.days,
        hours: medellinParticulares.info.hours,
        scheme: medellinParticulares.info.scheme,
        observations:
          'Quedan excluidas de la aplicación de la medida, las vías de la zona rural, la vía regional en jurisdicción de Bello, la autopista norte en el tramo comprendido entre la glorieta de la estación del Metro de Niquia y Jardines de la Fe, límites con el Municipio de Copacabana (incluyendo la Glorieta) y la Autopista Medellín - Bogotá, en jurisdicción de Bello. La Autopista Norte en el tramo comprendido entre la carrera 50 por calle 24A (Intercambio Vial Juan Ignacio Castrillón), hasta la glorieta de la estación del Metro Niquia será objeto de Pico y Placa',
        exceptions: `Estarán exentos de la medida del Pico y Placa, en consideración a las necesidades de la Ciudad, los siguientes vehículos:<ul>
          <li>Vehículos de emergencia (ambulancias incluidas  las veterinarias, bomberos y todos aquellos que transporten equipo y material logístico para atención de emergencias, así como los que prestan atención médica personalizada) y los vehículos requeridos para la atención de siniestros, siempre que se encuentren demarcados con identificación permanente trasera.</li>
          <li>Los vehículos particulares y oficiales que usen gas natural vehícular en vez de combustible, previa inscripción ante la Secretaría de Movilidad de Bello; exención que será válida a partir del momento en que el peticionario reciba la comunicación de la Secretaría de Movilidad, aprobando esta situación. En el momento de ser requerido por la autoridad en la vía pública será igualmente exento, siempre y cuando lo acredite con la última certificación anual para el uso de gas natural vehicular vigente. Para aquellos vehículos que formalicen en la licencia de tránsito el cambio de combustible a gas natural vehicular y pertenezcan al parque automotor, matriculado en este Organismo de Tránsito, quedarán automáticamente exentos de la medida. Para la inscripción ante la Secretaría de Movilidad de Bello, deberá aportarse la solicitud respectiva acompañada con la copia del documento de identificación del propietario del automotor y copia de la licencia de tránsito, en la cual conste el cambio de combustible o copia de la última certificación anual vigente para el uso de gas natural vehicular.</li>
          <li>Vehículos eléctricos que pertenezcan al partque automotor matriculado en esta Secretaría de Movilidad, quedarán automáticamente exentos de la medida. Para aquellos vehículos eléctricos que pertenezcan a otros organismos de tránsito, previa inscripción ante la Secretaría de Movilidad de Bello; exención que será válida a partir del momento en que el peticionario reciba la comunicación de la Secretaría de Movilidad, aprobando esta situación. En el momento de ser requerido por la autoridad en la vía pública será igualmente exento, siempre y cuando lo acredite con la licencia de tránsito. Para la inscripción ante la Secretaría de Movilidad de Bello, deberá aportarse la solicitud respectiva acompañada con la copia del documento de identificación del propietario del automotor y copia de la licencia de tránsito.</li>
          <li>Vehículos de servicio de transporte terrestre automotor especial, demarcados con identificación permanente trasera; así como los vehículos colectivos tipo bus, buseta y/o microbús de servicio particular de propiead de las empresas destinadas al transporte de su personal.</li>
          <li>Vehículos destinados al transporte de alimentos y/o elementos perecederos, debidamente acreditados y vinculados a la actividad comercial, ante la Secretaría de Movilidad de Bello, los cuales deberán contar con identificación permanente trasera e inscripción previa ante este Organismo de Tránsito.</li>
          <li>Los vehículos con capacidad de carga en cuya licencia de tránsito se establezca una capacidad de pasajeros no superior a dos (2) personas y que cuenten con capacidad equivalente a 3.5 toneladas o más. Asimismo, los vehículos de servicio público de transporte terrestre automotor, cualquiera sea su capacidad de carga, en ambos casos estarán exentos de la presente medida. Seguirán vigentes las restricciones establecidas para el transporte de carga que el Municipio haya establecido.</li>
          <li>Vehículos dotados tecnológicamente para el mantenimiento de redes de servicios públicos esenciales (energía, semaforización, telefonía, acueducto y alcantarillado, gas,Sistema de Transporte Masivo), así como los vehículos de las empresas de servicios públicos domiciliarios; los cuales deberán contar con demarcación e identificación permanente trasera; igualmente los vehículos recolectores de basura con identificación visual externa y los de mantenimiento del ornato público debidamente identificados.</li>
          <li>Vehículos de propiedad de medios de comunicación debidamente identificados; así como los vehículos contratados y acreditados, mientras estén al servicio de los medios de comunicación; además, aquellos que estén dotados de equipos que no permitan que sean reemplazados por otro vehículo. En cualquier caso, deberán tener identificación visual externa. </li>
          <li>Vehículos de propiead de las Fuerzas Militares, Policía Nacional e INPEC.</li>
          <li>Vehículos destinados al control del tránsito, las grúas, carros talleres, los de asistencia técnica y/o jurídica, debidamente identificados en forma visual externa.</li>
          <li>Vehículos particulares y oficiales destinados al transporte de personas en situación de discapacidad o pacientes y/o personal médico, que se desplacen en ellos en razón de tratamientoss médicos que por su complejidad y frecuencia lo requeiran, tales como: quimioterapia, radioterapia, diálisis y similares; durante el tiempo que dure el tratamiento o que por las características del paciente no pueda transportarse por sí mismo. En todo caso deberá acreditarse dicho tratamiento y duración por el médico tratante o a través de la historia clínica o certificación emitida por éste. De igual forma se tendrá en cuenta lodispuesto en la Resolución 4575 del 7 de nomviembre de 2013, emitida por el Ministerio de Transporte en lo relacionado con las personas con dificultad de movilidad.</li>
          <li>Vehículos acreditados para transporte de valores, los cuales requerirán marcación permanente en la parte trasera.</li>
          <li>Vehículos de transporte público colectivo.</li>
          <li>Las motocicletas de cuatro (4) tiempos.</li>
          <li>Vehículos con blindaje igual o superior a nivel 3 y que esté registrado en la respectiva licencia de tránsito del vehículo, previa inscripción ante la Secretaría de Movilidad de Bello. Para esta inscripción deberá aportar la copia de la cédula de ciudadanía del propietario, copia de la licencia de tránsito y copia de la Resolución de la Superintendencia de Vigilancia y Seguridad privada que autorice el blindaje del automotor.</li>
          <li>Coche funerarios, más no el cortejo fúnebre, siempre que se esté portando el logo de la funeraria a la cual pertenece el vehículo de manera permanente.</li>
          <li>Vehículos pertenecientes a empresas privadas de vigilancia, siempre que porten identificación visual externa permanente.</li>
          <li>Vehículos oficiales de representación debidamente acreditados, entendiéndose éstos como aquellos vehículos de propiedad de entidades públicas destinados al desplazamiento de sus servidores públicos.</li>
          <li>Vehículos consulares con placa de color azul asignada y en los cuales se desplace personal consular debidamente acreditado; así mismo los cónsules honorarios podrán inscribir un sóo vehículo por cónsul para circular en el mismo, siempre que éste figure como proietario del automotor y realice previa inscripción.</li>
          <li>Vehículos particulares y oficiales en los que se tranporten Magistrados de los diferentes Tribunales, Jueces, Fiscales, Defensores Públicos y de Familia, Procuradores, Inspectores Urbanos de Policía de Primera Categoría, Comisarios de Familia, Corregidores, Obispos, Arzobispos y presbíteros, Concejales, Personeros, Contralores y Vice Contralores, Registrador Municipal y/o Especieal, Departamental del Estado Civil. Lo anterior aplica para el personal perteneciente a los municipios que conforman el Área Metropolitana del Valle de Aburrá. Así mismo, para los vehículos particulares u oficiales en que se transporten Diputados, Congresistas y personal de la Agencia Nacional de Protección.</li>
          <li>Los vehículos con placas de munucipios de otros departamentos, siempre y cuando su conductor demuestre la calidad de turista con la exhibición del tiquete del primer peaje de ingreso al departamente de Antioquia, el cual será válido como medio de prueba ante la autoridad competente y solo para el primer día de estadía en el Municipio.</li>
          <li>Los demás casos en los que, por estricta y justificada necesidad, sean autorizados de manera temporal por la Secretaría de Movilidad de Bello.</li>
        </ul>`,
      },
      name: medellinParticulares.name,
      pyp: medellinParticulares.pyp,
    },
    motos: {
      info: {
        vehicleClasses: medellinMotos.info.vehicleClasses,
        decrees: [
          {
            name: 'Decreto 053 del 29 de enero de 2018',
            url:
              'http://www.Bello.gov.co/secretaria-movilidad/SiteAssets/008_DOCUMENTOS/DOCUMENTOS/2018/01/DECRETO%20053%20DE%202018.pdf',
          },
        ],
        days: medellinMotos.info.days,
        hours: medellinMotos.info.hours,
        scheme: medellinMotos.info.scheme,
        observations: medellinMotos.info.observations,
        exceptions: `Estarán exentos de la medida del Pico y Placa, en consideración a las necesidades de la Ciudad, los siguientes vehículos:<ul>
        <li>Vehículos de emergencia (ambulancias incluidas  las veterinarias, bomberos y todos aquellos que transporten equipo y material logístico para atención de emergencias, así como los que prestan atención médica personalizada) y los vehículos requeridos para la atención de siniestros, siempre que se encuentren demarcados con identificación permanente trasera.</li>
        <li>Los vehículos particulares y oficiales que usen gas natural vehícular en vez de combustible, previa inscripción ante la Secretaría de Movilidad de Bello; exención que será válida a partir del momento en que el peticionario reciba la comunicación de la Secretaría de Movilidad, aprobando esta situación. En el momento de ser requerido por la autoridad en la vía pública será igualmente exento, siempre y cuando lo acredite con la última certificación anual para el uso de gas natural vehicular vigente. Para aquellos vehículos que formalicen en la licencia de tránsito el cambio de combustible a gas natural vehicular y pertenezcan al parque automotor, matriculado en este Organismo de Tránsito, quedarán automáticamente exentos de la medida. Para la inscripción ante la Secretaría de Movilidad de Bello, deberá aportarse la solicitud respectiva acompañada con la copia del documento de identificación del propietario del automotor y copia de la licencia de tránsito, en la cual conste el cambio de combustible o copia de la última certificación anual vigente para el uso de gas natural vehicular.</li>
        <li>Vehículos eléctricos que pertenezcan al partque automotor matriculado en esta Secretaría de Movilidad, quedarán automáticamente exentos de la medida. Para aquellos vehículos eléctricos que pertenezcan a otros organismos de tránsito, previa inscripción ante la Secretaría de Movilidad de Bello; exención que será válida a partir del momento en que el peticionario reciba la comunicación de la Secretaría de Movilidad, aprobando esta situación. En el momento de ser requerido por la autoridad en la vía pública será igualmente exento, siempre y cuando lo acredite con la licencia de tránsito. Para la inscripción ante la Secretaría de Movilidad de Bello, deberá aportarse la solicitud respectiva acompañada con la copia del documento de identificación del propietario del automotor y copia de la licencia de tránsito.</li>
        <li>Vehículos de servicio de transporte terrestre automotor especial, demarcados con identificación permanente trasera; así como los vehículos colectivos tipo bus, buseta y/o microbús de servicio particular de propiead de las empresas destinadas al transporte de su personal.</li>
        <li>Vehículos destinados al transporte de alimentos y/o elementos perecederos, debidamente acreditados y vinculados a la actividad comercial, ante la Secretaría de Movilidad de Bello, los cuales deberán contar con identificación permanente trasera e inscripción previa ante este Organismo de Tránsito.</li>
        <li>Los vehículos con capacidad de carga en cuya licencia de tránsito se establezca una capacidad de pasajeros no superior a dos (2) personas y que cuenten con capacidad equivalente a 3.5 toneladas o más. Asimismo, los vehículos de servicio público de transporte terrestre automotor, cualquiera sea su capacidad de carga, en ambos casos estarán exentos de la presente medida. Seguirán vigentes las restricciones establecidas para el transporte de carga que el Municipio haya establecido.</li>
        <li>Vehículos dotados tecnológicamente para el mantenimiento de redes de servicios públicos esenciales (energía, semaforización, telefonía, acueducto y alcantarillado, gas,Sistema de Transporte Masivo), así como los vehículos de las empresas de servicios públicos domiciliarios; los cuales deberán contar con demarcación e identificación permanente trasera; igualmente los vehículos recolectores de basura con identificación visual externa y los de mantenimiento del ornato público debidamente identificados.</li>
        <li>Vehículos de propiedad de medios de comunicación debidamente identificados; así como los vehículos contratados y acreditados, mientras estén al servicio de los medios de comunicación; además, aquellos que estén dotados de equipos que no permitan que sean reemplazados por otro vehículo. En cualquier caso, deberán tener identificación visual externa. </li>
        <li>Vehículos de propiead de las Fuerzas Militares, Policía Nacional e INPEC.</li>
        <li>Vehículos destinados al control del tránsito, las grúas, carros talleres, los de asistencia técnica y/o jurídica, debidamente identificados en forma visual externa.</li>
        <li>Vehículos particulares y oficiales destinados al transporte de personas en situación de discapacidad o pacientes y/o personal médico, que se desplacen en ellos en razón de tratamientoss médicos que por su complejidad y frecuencia lo requeiran, tales como: quimioterapia, radioterapia, diálisis y similares; durante el tiempo que dure el tratamiento o que por las características del paciente no pueda transportarse por sí mismo. En todo caso deberá acreditarse dicho tratamiento y duración por el médico tratante o a través de la historia clínica o certificación emitida por éste. De igual forma se tendrá en cuenta lodispuesto en la Resolución 4575 del 7 de nomviembre de 2013, emitida por el Ministerio de Transporte en lo relacionado con las personas con dificultad de movilidad.</li>
        <li>Vehículos acreditados para transporte de valores, los cuales requerirán marcación permanente en la parte trasera.</li>
        <li>Vehículos de transporte público colectivo.</li>
        <li>Las motocicletas de cuatro (4) tiempos.</li>
        <li>Vehículos con blindaje igual o superior a nivel 3 y que esté registrado en la respectiva licencia de tránsito del vehículo, previa inscripción ante la Secretaría de Movilidad de Bello. Para esta inscripción deberá aportar la copia de la cédula de ciudadanía del propietario, copia de la licencia de tránsito y copia de la Resolución de la Superintendencia de Vigilancia y Seguridad privada que autorice el blindaje del automotor.</li>
        <li>Coche funerarios, más no el cortejo fúnebre, siempre que se esté portando el logo de la funeraria a la cual pertenece el vehículo de manera permanente.</li>
        <li>Vehículos pertenecientes a empresas privadas de vigilancia, siempre que porten identificación visual externa permanente.</li>
        <li>Vehículos oficiales de representación debidamente acreditados, entendiéndose éstos como aquellos vehículos de propiedad de entidades públicas destinados al desplazamiento de sus servidores públicos.</li>
        <li>Vehículos consulares con placa de color azul asignada y en los cuales se desplace personal consular debidamente acreditado; así mismo los cónsules honorarios podrán inscribir un sóo vehículo por cónsul para circular en el mismo, siempre que éste figure como proietario del automotor y realice previa inscripción.</li>
        <li>Vehículos particulares y oficiales en los que se tranporten Magistrados de los diferentes Tribunales, Jueces, Fiscales, Defensores Públicos y de Familia, Procuradores, Inspectores Urbanos de Policía de Primera Categoría, Comisarios de Familia, Corregidores, Obispos, Arzobispos y presbíteros, Concejales, Personeros, Contralores y Vice Contralores, Registrador Municipal y/o Especieal, Departamental del Estado Civil. Lo anterior aplica para el personal perteneciente a los municipios que conforman el Área Metropolitana del Valle de Aburrá. Así mismo, para los vehículos particulares u oficiales en que se transporten Diputados, Congresistas y personal de la Agencia Nacional de Protección.</li>
        <li>Los vehículos con placas de munucipios de otros departamentos, siempre y cuando su conductor demuestre la calidad de turista con la exhibición del tiquete del primer peaje de ingreso al departamente de Antioquia, el cual será válido como medio de prueba ante la autoridad competente y solo para el primer día de estadía en el Municipio.</li>
        <li>Los demás casos en los que, por estricta y justificada necesidad, sean autorizados de manera temporal por la Secretaría de Movilidad de Bello.</li>
      </ul>`,
      },
      name: medellinMotos.name,
      pyp: medellinMotos.pyp,
    },
    taxis: {
      info: {
        vehicleClasses: medellinTaxis.info.vehicleClasses,
        decrees: [
          {
            name: 'Decreto 053 del 29 de enero de 2018',
            url:
              'http://www.bello.gov.co/secretaria-movilidad/SiteAssets/008_DOCUMENTOS/DOCUMENTOS/2018/01/DECRETO%20053%20DE%202018.pdf',
          },
        ],
        days: medellinTaxis.info.days,
        hours: medellinTaxis.info.hours,
        scheme: medellinTaxis.info.scheme,
        observations: medellinTaxis.info.observations.replace(
          'Medellín',
          'Bello'
        ),
      },
      name: medellinTaxis.name,
      pyp: medellinTaxis.pyp,
    },
  },
}
