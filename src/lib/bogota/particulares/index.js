const pypFuncs = require('../../../utils/funcs')

module.exports = {
  name: 'Particulares',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      if (
        pypFuncs.formatDate(date) >= '2018-12-26T00:00:00-05:00' &&
        pypFuncs.formatDate(date) <= '2019-01-04T00:00:00-05:00'
      ) {
        return 'NA'
      }
      const pyp = ['0-2-4-6-8', '1-3-5-7-9']
      return pyp[pypFuncs.getDate(date) % 2]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
  info: {
    vehicleClasses: ['Vehículos automotores de servicio particular'],
    decrees: [
      {
        name: 'Decreto 515 del 22 de Noviembre de 2016',
        url:
          'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=55963',
      },
      {
        name: 'Decreto 575 del 17 de diciembre de 2013',
        url:
          'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=67497',
      },
      {
        name: 'Decreto 159 del 11 de abril de 2014',
        url:
          'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=57155',
      },
      {
        name: 'Calendario pico y placa primer semestre 2018 unificado',
        url: 'cdn:pdf',
      },
      {
        name: 'Calendario pico y placa segundo semestre 2018 unificado',
        url: 'cdn:pdf',
      },
    ],
    days: ['Lunes a viernes hábiles'],
    hours: [
      {
        comment: 'Lunes a viernes',
        hours: [['6:00', '8:30'], ['15:00', '19:30']],
        days: [1, 2, 3, 4, 5],
      },
    ],
    scheme: `<ul>
      <li>Día par hábil: placa último dígito par.</li>
      <li>Día impar hábil: placa último dígito impar.</li>
      <li>Sábado no podrán circular vehículos con placas terminadas en número par.</li>
      <li>Domingos no podrán circular vehículos con placas terminadas en número impar.</li>
      <ul>`,
    observations:
      'No aplicará desde el día hábil siguiente al veinticinco (25) de diciembre de cada año, hasta el viernes hábil antes del descanso ordenado por la Ley 51 de 1983 para la festividad correspondiente al seis (6) de enero del año siguiente.',
    exceptions: `<ul>
      <li>Vehículos automotores propulsados exclusivamente por motores eléctricos.</li>
      <li>Caravana presidencial. Grupo de vehículos que hagan parte del esquema de seguridad de la Presidencia de la República y están al servicio de actividades inherentes.</li>
      <li>Vehículos de servicio diplomático o consular. Automotor indentificado con placas especiales asignadas por el Ministerio de Relaciones Exteriores.</li>
      <li>Carrozas fúnebres. Vehículos destinados y/o adecuados técnicamente para el traslado de féretros, propiedad de las funerarias o agencias mortuorias.</li>
      <li>Vehículos de organismos de seguridad del Estado. Los automotores que pertenezcan o hagan parte de los cuerpos de seguridad del Estado, Fuerzas Militares, Polocía Nacional y Cuerpo Técnico de Investigación de la Fiscalía General de La Nacioón y los que ejerzan funciones legales de policia judicial.</li>
      <li>Vehículos de emergencia. Automotores debidamente identificados e iluminados, dispuestos para movilizar personas afectadas en salud, prevenir o atender desastres y/o calamidades, o actividades policiales, debidamente registrados como tal con las normas y características que exige la actividad para la cual se matricules, y los automotores propiedad de las empresas que prestan atención medica domiciliaria, debidamente identificados, solo cuando en ellos se desplace personal médico en servicio.</li>
      <li>Vehículos utilizados para el transporte de personas en condición de Discapacidad: Automotores que transporten o sean conducidos por pesonas cuya condición motora, sensorial o mental limite o restrija de manera permanente su movilidad. La condición de discapacidad permanente que limita la movilidad debe ser claramente acreditada con la certificación médica correspondiente, expedidad por la EPS, IPS o ESE. La excepción aplica únicamente para la inscripción de un (1) vehículo por persona en condición de discapacidad.</li>
      <li>Vehículos de empresas de servicios públicos domiciliarios. Automotores destinados o contratados por las Empresas de Servicio Públicos Domiciliarios, exclusivamente para el mantenimiento, instalación y/o reparación de las redes de servicios públicos domiciliarios en la ciudad de Bogotá D.C., siempre y cuando cuentes con plena y pública identificación, consistente en los logos de la empresa contratante pintados o adheridos en la carrocería.</li>
      <li>Vehículos destinados al control del tráfico y grúas. Automotores tipo grúa y aquellos destinados al control del tráfico en el Distrito Capital.</li>
      <li>Vehículos de control de emisiones y vertimientos. Vehículos utilizados por la Secretaría Distrital De Ambiente o por el Ministerio de Ambiente y Desarrollo Sostenible o quein haga sus veces, para la revisión, atención y prevenció de emisiones y vertimientos contaminantes, siempre y cuando tengan los logos pintados o adheridos en la carrocería.</li>
      <li>Motocicletas.</li>
      <li>Vehículos blindados. Automotores con nivel tres (3) o superior de blindaje, insctritos en el Registro Distrital Automotor y autorizado el blindaje por la Superintendencia de Vigilancia y Seguridad Privada.</li>
      <li>Vehículos escolta: Automotores que estén al servicio de actividades inherentes a la protección de personas debidamente autorizados por la Superintendencia de Vigilancia y Seguridad Privada o que hagan parte de esquemas de seguridad autorizados por los organismos del estado, y solo durante la prestación del servicio.</li>
      <li>Vehículos de medios de comunicación. Automotores de propiedad de los medios de comunicación masiva de radio, prensa y televisión, que porten pintados o adheridos en la corrocería en forma visible los distintivos del medio de comunicación y que transporten personal o equipos técnicos de comunicación para el desarrollo de la labor periodística. Para efectos de la inscripción en el registro de exceptuados, se deberá presentar licencia expedida por la Autoridad Nacional o quien haga sus veces, donde se autoriza como medio de comunicación.</li>
      <li>Vehículos de autoridades judiciales. Vehículos de propiedad de los/as, Jueces/zas, Fiscales/as y los/as Procuradores/as Delegados/as ante las Altas Cortes, a quienes el Consejo Seccional de la Judicatura, la Fiscalia General de la Nación y la Procuraduría General de la Nación certifiquen desempeñar dicha labor en Bogotá, D.C., o en el Departamento de Cundinamarca, y no contar con asignación de un vehículo oficial para su transporte.</li>
      <li>Vehículos de transporte escolar. Vehículos propiedad de instituciones edicativas y únicamente cuando sean empleados para el transporte de sus estudiantes. Estos deberán operar y estar plenamente identificados de confirmidad con las normas que regulan el transporte escolar.</li>
    </ul>
    <p>La Secretaría Distrital de Movilidad llevará a cabo un registro de vehículos exceptuados, para efectos de evitar la imposición de comparendos por medios técnicos y tecnológicos y definirá las condiciones necesarias para la inscripción de dichos vehículos. La inscripción en el registro de exceptuados será válida mientras subsistan las condiciones que configuran la excepción y estará sujeta a la verificación y depuración.</p>
    <p>Se prohíbe la expedición de permisos especiales de circulación por parte de las autoridades de tránsito. Los automotores exceptuados podrán circular con la simple demostración de las condiciones señaladas, y en consecuencia no requerirán de la expedición de permiso alguno. En cuanto a los controles por medios tecnológicos, bastará con la inscripción en registro referido en el párrafo anterior.</p>
    `,
  },
}
