const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Vehículos automotores de servicio particular'],
    decrees: [
      {
        name: 'Decreto 349 de 2017',
        url: 'cdn:pdf',
      },
      {
        name: 'Decreto 070 de 2018',
        url: 'cdn:pdf',
      },
    ],
    days: [
      'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
    ],
    hours: [
      {
        comment: '',
        hours: [['7:00', '19:00']],
        days: [],
      },
    ],
    scheme: 'Último dígito del número de la placa según el esquema',
    observations: '',
    exceptions: `Exceptúense de las prohibiciones por Pico y Placa las siguientes categorías de vehículos:<ul>
      <li>Vehículos utilizados por la caravana presidencial.</li>
      <li>Vehículos de servicio diplomático o consular. Automotores identificados con las placas especiales por el Ministerio de Relaciones Exteriores.</li>
      <li>Vehículos de organismos de seguridad del Estado, los automotores que pertenezcan o hagan parte de las Fuerzas Armadas de Colombia, Polocía Nacional, Agencia Nacional de Inteligencia, Cuerpo Técnico de Investigación de la Fiscalía General de la Nación, INPEC, Fiscalia General de la Nación y los que ejerzan fucniones legales de Policía Nacional.</li>
      <li>Vehículos de entidades oficiales, gobernación del Magdalena, Alcaldía de Santa Marta, autoridades de tránsito.</li>
      <li>Vehículos de los secretarios, Directores, Jefes de Oficina de la Alcaldía Distrital que se encuentren en el ejercicio de sus funciones.</li>
      <li>Vehículos de los Directores, Generales o Presidentes de las entidades Descentralizadas Distritales.</li>
      <li>Vehículos de autoridades judiciales, automotores de uso exclusivo de jueces y magistrados con jurisdicción y asiento permanente en la ciudad.</li>
      <li>Vehículos de organismo de control Procuraduría (Regional y Provincial), Contraloría (Departamenteal y Distrital), Personería y Defensoría del PUeblo.</li>
      <li>Vehículos de uso exclusivo de los Concejales del Distrito de Santa Marta y Diputados del Departamento del Magdalena.</li>
      <li>Vehículos gúnebres, carrozas gúnebres destinados y/o adecuados técnicamente para el traslado de féretros.</li>
      <li>Vehículos de emergencia. Automotores debidamente identificados e iluminados dispuestos para movilizar personas afectadas en salud, prevenir o atender desastres y/o calamidades, o actividades policiales, debidamente registrados como tal con las normas y características que exige la actividad para l acual se matricules y los automotores propiedad de las empresas que prestan atención médica domiciliaria debidamente identificados, solo cuando en ellos se desplace personal médico en servicio.</li>
      <li>Vehículos particulares adapatados para el servicio de personas con discapacidad cuya condición motora, sensorial o mental limite o restrinja de manera permanente su movilidad, siempre y cuando se utilicen como medio de trasporte de estas personas. La condición de discapacidad permanente que limita la movilidad debe ser claramente acreeditada con la certificación médica correspondiente, expedida por la EPS.</li>
      <li>Vehículos destinados al control del tráfico, automotores tipo grúa y aquellos destinados al control del tráfico en el Distrito de Santa Marta.</li>
      <li>Vehículos utilizados para la distribución de mercancías, insumos o productos perecederos, únicamente cuando se utilicen como medio de transporte distribución de estos, siempre y cuando dichos vehículos tengan los distintivos de la empresa comercial debidamente acreditada y no vulnere ninguan de las disposiciones del Decreto Distrital 202 del 15 de agosto de 2015, 137 de junio de 2016 y 180 de 28 de julio de 2016, demás decretos distritales modificatorios y/o reglamentarios.</li>
      <li>Vehículos de las empresas de vigilancia, departamenteos de seguridad adscritos a la Superintendencia de Vigilancia y Seguridad Privada.</li>
      <li>Vehículos blindados. Automotores con nivel tres (3) o superior de blindaje, inscritos como tales por la Superintendencia de Vigilancia y Seguridad Privada.</li>
      <li>Vehículos escoltas. Automotores que estén al servicio de actividades inherentes a la protección de personas debidamente autorizados por la Unidad Nacional de Protección y que hagan parte de esquemas de seguridad autorizados por los organismos del Estado y solo durante la prestación del servicio.</li>
      <li>Vehículos para el transporte de valores.</li>
      <li>Vehículos usados y debidamente resgitrados para la enseñanza automovilística.</li>
      <li>Vehículos que transporten residuos hospitalarios.</li>
      <li>Vehículos de medios de comunicación. Automotores de propiead de los medios de comunicación masiva de radio, prensa y televsión, que porten pintados o adheridos en la carrocería en forma visible los distintivos del medio de comunicación y que transporten personal o equipos técnicos de comunicación para el desarrollo de la labor periodística.</li>
      <li>Vehículos de las empresas operadoras de servicios públicos domiciliarios exclusivamente para el mantenimiento, instalación y/o reparación de las redes de servicios públicos en la ciudad, siempre y cuando cuenten con plena y pública identificación, consistente en los logos de la empresa contratante pintado o adherido en la carrocería.</li>
      <li>Vehículos de transporte escolar. Vehículos de propiedad de instituciones aducativas y únicamente cuando sean empleados para el transporte de sus estudiantes. Estos deberán operar y estar plenamente identificados de conformidad con las normas que regulan el transporte escolar.</li>
      <li>Vehículos institucionales de servicio público o particular para el transporte de empleados, identificados y marcados con los logos de la empresa y de capacidad inferios a 24 pasajeros.</li>
      <li>Vehículos destinados al transporte de turismo de servicio público o particular debidamente registrados en el Registro Nacional de Turismo, identificados con distintivos y logos de la empresa operadora de turismo y de capacidad inferior 16 pasajeros.</li>
      <li>Vehículos de uso exclusivo de los Ediles.</li>
    </ul>`,
  },
  name: 'Particulares',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const pyp = [
        '8-9', // lunes
        '0-1', // martes
        '2-3', // miércoles
        '4-5', // jueves
        '6-7', // viernes
      ]
      return pyp[new Date(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}