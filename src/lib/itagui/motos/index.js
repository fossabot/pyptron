const medellinMotos = require('../../medellin/motos')

module.exports = {
  info: {
    vehicleClasses: medellinMotos.info.vehicleClasses,
    decrees: [
      {
        name: 'Decreto 067 del 31 de enero de 2018',
        url:
          'https://www.transitoitagui.gov.co/wp-content/uploads/2018/02/DECRETO-067-DEL-31-1-2018-DECRETO-PICO-Y-PLACA.pdf',
      },
    ],
    days: medellinMotos.info.days,
    hours: medellinMotos.info.hours,
    scheme: medellinMotos.info.scheme,
    observations: medellinMotos.info.observations,
    exceptions: `Estarán exentos de la medida de Pico y Placa, en consideración a las necesidades de la ciudad, los siguientes vehículos:
      <ul>
        <li>Vehículos de emergencia (ambulancias incluidas las veterinarias, bomberos y todos aquellos que transporten equipo y material logístico para atención de emergencias, así como los que prestan atención médica personalizada) y los vehículos requeridos para la atención de siniestros, siempre que se encuentren demarcados con identificación permanente trasera.</li>
        <li>Los vehículos particulares y oficiales que usen gas natural vehicular, previa inscripción ante la secretaría de Movilidad de Itagüí, exención que será válida a partir del momento en que el peticionario reciba la comunicación de la Secretaría de Movilidad, aprobando esta situación. En el momento de ser requerido por la autoridad en la vía pública será igualmente exento, siempre y cuando lo acredite con la última certificación anual para el uso de gas natural vehícular vigente. Para aquellos vehículos que formalicen en la licencia de tránsito el cambio de combustible a gas natural vehícular y pertenezcan al parque autmomotor, matriculado en este organismo de tránsito, quedarán automáticamente exentos de la medida. Para la inscripción ante la Secretaría de Movilidad de Itagüí, deberán aportarse la solicitud respectiva acompañada con la copia del documento de identificación del propietario del automotor y copia de la licencia de tránsito, en la cual conste el cambio de combustible o copia de la última certificación anual vigente para el uso de gas natural vehicular.</li>
        <li>Vehículos eléctricos que pertenezcan al parque automotor matriculado en esta secretaría de Movilidad, quedarán automáticamente exentos de la medida. Para aquellos vehículos elécticos que pertenezcan a otros organismos de tránsito, previa inscripción ante la secretaría de Movilidad de Itagüí; exención que será válida a partir del momento en que el peticionario reciba la comunicación de la secretaría de Movilidad, aprobando esta situación. En el momento de ser requerido por la autoridad en la vía pública será igualmente exento, siempre y cuando lo acredite con la licencia de tránsito. Para la inscripción ante la secretaría de Movilidad de Itagüí, deberá aportarse la solicitud respectiva acompañada con la copia del documento de identificación del propietario del automotor y copia de la licencia de tránsito.</li>
        <li>Vehículos de servicio de transporte terrestre automotor especial, demarcados con identificación permanente trasera; así como los vehículos colectivos tipo bus, buseta y/o microbús de servicio particular de propiedad de las empresas destinadas al transporte de su personal.</li>
        <li>Vehículos destinados al transporte de alimentos y/o elementos perecederos debidamente acreditados y vinculados a la actividad comercial, ante la autoridad competente y con identificación permanente trasera.</li>
        <li>Los vehículos con capacidad de carga en cuya licencia de tránsito se establezca una capacidad de pasajeros no superior a dos (2) personas y cuenten con capacidad equivalente a 3.5 toneladas o más. Así mismo, los vehículos de servicio público de transporte terrestre automotor, cualquiera sea su capacidad de carga, en ambos casos estarán exentos de la presente medida.</li>
        <li>Vehículos dotados tecnológicamente para el mantenimiento de redes de servicios públicos esenciales (energía, semaforización, telefonía, acueducto y alcantarillado, gas Sistema de Transporte Masivo), así mismo los vehículos de las empresas de servicios públicos domiciliarios demarcados con identificación permanente trasera; igualmente los vehículos recolectores de basura con identificación visual externa.</li>
        <li>Vehículos de propiedad de medios de comunicación debidamente identificados; así como los vehículos contratados y acreditados, mientras están al servicio de los medios de comunicación; además, aquellos que estén dotados de equipos que no permitan que sean reemplazados por otro vehículo. En cualquier caso deberán tener identifición visual externa.</li>
        <li>Vehículos pertenecientes a las Fuerzas Militares, Policía Nacional e INPEC.</li>
        <li>Vehículos destinados al control de tránsito, las grúas, carros talleres, los de asistencia técnica y/o jurídica, debidamente identificados en forma visual externa.</li>
        <li>Vehículos particulares y oficiales destinados al transporte de personas en situación de discapacidad o pacientes y/o personal médico, que se desplacen en ellos en razón de tratamientos médicos que por su complejidad y frecuencia lo requieran, durante el tiempo que dura el tratamiento o que por las cartacterísticas del pacientes no pueda transportarse por sí mismo. En todo caso deberá acreditarse dicho tratamiento y duración por el médico tratante o a través de la historia clínica o certificación emitida por éste.</li>
        <li>Vehículos acreditados para transporte de valores, los cuales requerirán marcación permanente en la parte trasera.</li>
        <li>Vehículos de transporte público colectivo.</li>
        <li>Vehículos con blindaje igual o superior a nivel 3 y que esté registrado en la respectiva licencia de tránsito del vehículo, previa inscripcipón ante la secreetaría de Movilidad de Itagüí. Para esta inscripción deberá aportar copia de la cédula de ciudadanía del propietario, copia de la licencia de tránsito.</li>
        <li>Coches funerarios, más no el cortejo fúnebre, siempre que se esté protando el logo de la funeraria a la cual pertenece el vehículo demanera permanente.</li>
        <li>Vehículos pertenecientes a empresas privadas de vigilancia, siempre que porten identificación visual externa permanente.</li>
        <li>Vehículos oficiales de representación debidamente acreditados, entendiéndose éstos como aquellos vehículos de propiedad de entidades públicas destinados al desplazamiento de sus servidores públicos.</li>
        <li>Vehículos consulares con placa de color azul asignada y en los cuales se desplace personal consular debidamente acreditado; así mismo los cónsules honorarios podrán inscribir un solo vehículo por cónsul para circular en el mismo, siempre que éste figure como propietario del automotor y realice previa inscripción.</li>
        <li>Vehículos particulares y oficiales en los que se transporten; Magistrados de los diferentes Tribunales, Jueces, Fiscales, Defensores Públicos y de Familia, Procuradores, Inspectores Urbanos de Policía de Primera Categoría, Comisarios de Familia, Corregidores, Obispos, Arzobispo y presbíteros, Concejales, Personeros, Contralores y Vice Contralores, Registrador Municipal y/o Especial, Departamental del Estado Civil. Lo anterior aplica para el personal perteneciente a los municipios que conforman el Área Metropolitana del Valle de Aburrá. Así mismo, para los vehículos particulares u oficiales en que se transporten Diputados, Congresistas y personal de la Agencia Nacional de Protección.</li>
        <li>Los vehículos con placas de municipios de otros departamentos, siempre y cuando su conductor demuestre la calidad de turista con la exhibición del tiquete del primer peaje de ingreso al departamento de Antioquia, el cual será válido como medio de prueba ante la autoridad competente y solo para el primer día de estadía en el municipio.</li>
        <li>Aquellos casos en los que por las necesidades en la prestación de un servicio sean autorizadas por la Secretaría de Movilidad.</li>
      </ul>`,
  },
  name: medellinMotos.name,
  pyp: medellinMotos.pyp,
}
