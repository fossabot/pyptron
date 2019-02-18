const medellinMotos = require('../../medellin/motos')

module.exports = {
  info: {
    vehicleClasses: medellinMotos.info.vehicleClasses,
    decrees: [
      {
        name: 'Decreto No. 014 del 31 de enero de 2018',
        url:
          'http://www.laestrella.gov.co/institucional/Normas/Decreto%20No.%20014%20del%2031%20de%20enero%20de%202018.PDF',
      },
    ],
    days: medellinMotos.info.days,
    hours: medellinMotos.info.hours,
    scheme: medellinMotos.info.scheme,
    observations:
      'En la jurisdicción del Municipio La Estrella la medida de	restricción vehicular se continuará aplicará en las siguientes vías:	<ul><li>Tramo de la autopista sur (carrera 50) en la jurisdicción del Municipio de La	Estrella.</li><li>Tramo de la variante a Caldas (carrera 48) en la jurisdicción del Municipio	de La Estrella</li><li>Tramo de la Carrera 62A, entre la Calle 73 sur y la Calle 75 sur</li><li>Tramo de la Calle 74 sur, entre la Carrera 62A y Carrera 54</li><ul>',
    exceptions: `<ul>
      <li>Vehículos de emergencia (ambulancias, incluidas las veterinarias, bomberos, y todos aquellos que transporten equipo y material logístico, así como los que prestan atención médica personalizada) y los vehículos requeridos para la atención de siniestros siempre que se encuentren demarcados con identificación permanente.</li>
      <li>Los vehículos particulares y oficiales que usen gas natural vehicular o energía eléctrica como combustible, siempre y cuando lo acrediten con la respectiva certificación en el momento de ser requerido por la autoridad en la vía pública.</li>
      <li>Vehículos de transporte escolar debidamente acreditados ante la autoridad competente, demarcados con identificación permanente.</li>
      <li>Vehículos para el transporte de alimentos perecederos debidamente acreditados ante la autoridad competente, y con identificación permanente.</li>
      <li>Vehículos dotados tecnológicamente para el mantenimiento de redes de servicios públicos esenciales (energía, semaforización, telefonía, acueducto y alcantarillado, gas, sistema METRO), demarcados con identificación permanente.</li>
      <li>Vehículos operativos de las empresas de servicios públicos domiciliarios, debidamente legalizados y con identificación permanente.</li>
      <li>Vehículos propiedad de medios de comunicación y los vehículos contratados y acreditados, mientras estén al servicio de alguno de los mencionados medios; además, los que estén dotados de equipos que no permitan que sea reemplazado por otro vehículo. En cualquier caso, deberán tener identificación visual externa.</li>
      <li>Vehículos pertenecientes a las Fuerzas Militares, Polocía Nacional, INPEC que sean especialmente destinados para el transporte de personal uniformado o detenido, según el caso.</li>
      <li>Vehículos destinados al control de tránsito, las grúas y carros talleres o de asistencia técnica y/o jurídica, debidamente identificados en forma visual externa.</li>
      <li>Los vehículos particualres y oficiales destinados al transporte de personas descapacitadas o pacientes y personal médico, que se desplacen en razón de tratamientos vitales como radioterapias, quimioterapias, diálisis o similares, siempre y cuando él o los discapacitados o pacientes estén ocupando el vehículo.</li>
      <li>Vehículos acreditados para transportar valores los cuales rtequerirán marcación permanente.</li>
      <li>Vehículos de transporte público colectivo.</li>
      <li>Vehículos de transporte público colectivos, tipo bus, buseta y/o microbús de servicio particular, de propiedad de las empresas destinadas al transporte de su personal.</li>
      <li>Vehículos recolectores de basura, debidamente acreditados y con identificación externa.</li>
      <li>Vehículos de carga, incluyendo aquellos en cuya matrícula se establezca una capacidad de pasajeros no superior a dos personas y cuenten con capacidad equivalente a 3.5 toneladas o más. En todo caso, seguirán vigentes las restricciones establecidas para el transporte de carga.</li>
      <li>Vehículos de servicio de transporte terrestre automotor especial.</li>
      <li>Vehículos con blindaje igual o superior a nivel 3, y que éste aparezca registrado en la respectiva licencia de tránsito del vehículo.</li>
      <li>Coche fúnebres, más no el cortejo fúnebre, siempre que se esté portando el logo de la funeraria a la cual pertenece el vehículo de manera permanente.</li>
      <li>Vehículos pertenecientes a empresas privadas de vigilancia con identificación visual externa permanentemente, previa acreditación de tal calidad ante la Secretaría de Transporte y Tránsito.</li>
      <li>Vehículos oficiales de representación debidamente acreditados, entiéndase estos como aquellos vehículos de propiedad de entidades públicas destinados al desplazamiento de sus servidores públicos.</li>
      <li>Vehículos consulares con placa de color azul asignada y en los cuales se desplace personal consular debidamente acreditado, así mismo, los cónsules honorarios podrán inscribir un solo vehículo por cónsul para circular en el mismo, siempre que éste figure como propietario del automotor.</li>
      <li>Vehículos particulares y oficiales en los que se transporten: Magistrados de los diferentes Tribunales, Jueces, Fiscales, Defensores Públicos y de Familia, Procuradores, Inspectores Urbanos de Policía, Comisarios de Familia, Corregidores, Arzobispo y Arzobispos Auxiliares, Concejales, Personeros, Contralores y Vice Contralores, Registrador Municipal y Departamental del Estado Civil correspondientes a los municipiosque conforman el Valle de Aburrá. Así mismo, para los vehículos particulares u oficiales en que se transporte Dipurados, Congresistas y personal de la Agencia Nacional de Protección, siempre y cuando estén ocupando el vehículo y se acredito como tal, con el carné expedido por la respectiva Entidad, cuando sea requerido por la autoridad en la vía pública.</li>
      <li>Vehículos con placas de municipios de otros departamentos, siempre y cuando su conductor demuestre la cailidad de turista con la exhibición del tiqueta del primer peaje de ingreso al departamento de Antioquia, el cual será válido como medio de prueba ante la autoridad competente y solo para el primer día.</li>
      <li>Aquellos casos en lso que por las necesidades en la prestación de un servicio sean autorizados por el Secretario de Transporte y Tránsito.</li>
      </ul>`,
  },
  name: medellinMotos.name,
  pyp: medellinMotos.pyp,
}
