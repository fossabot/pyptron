const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Vehículos automotores de servicio particular'],
    decrees: [
      {
        name: 'Decreto 222 de 2018',
        url: pypFuncs.buildAssetPath(
          'villavicencio',
          'decreto-222-del-25-de-julio-de-2018.pdf'
        ),
      },
      {
        name: 'Decreto 245 de 2017',
        url: pypFuncs.buildAssetPath(
          'villavicencio',
          'decreto-245-del-26-de-julio-de-2017.pdf'
        ),
      },
    ],
    days: ['Lunes a viernes'],
    hours: [
      {
        comment: '',
        hours: [['6:30', '19:30']],
        days: [],
      },
    ],
    scheme:
      'La prohibición a la circulación de vehículos automotores particulares se realizará según el último dígito de la placa única nacional y acorde con el día calendario hábil.',
    observations: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10W9kwMwYeJfueGAuk2eqXD982kOfLG-8" width="100%" height="480"></iframe>`,
    exceptions: `<ul>
      <li>Automotores destinados o contratados para el transporte y/o disposición de residuos y/o desechos hospitalarios, siempre y cuando cuenten con plena y pública identificación, consistente en los logos de la empresa contratante pintados o adheridos en la carrocería.</li>
      <li>Los vehículos que presten el servicio de transporte a diez (10) o más empleados, estudiantes y/o pacientes, que sean propiedad de las empresas, instituciones o entidades para las cuales preseten el servicio.</li>
      <li>Caravana presidencial. Grupo de vehículos que circula junto con el esquema de seguridad de la Presidencia de la República.</li>
      <li>Vehículo de servicio diplomático o consular. Automotor identificado con placas especiales asignadas por el Ministro de Relaciones Exteriores.</li>
      <li>Carrozas fúnebres. Vehículos destinados y/o adecuados técnicamente para el traslado de féretros.</li>
      <li>Vehículos automotores de organismos de seguridad del Estado. Los automotores que pertenezcan o hagan parte de los cuerpos de seguridad del Estado, Fuerzas Militares, Policía Naciona y Cuerpo Técnico de Investigación de la Fiscalía General de la Nación y los que ejerzan fuenciones legales de Policía Judicial.</li>
      <li>Vehículos de emergencia. Automotores debidamente identificados e iluminados, dispuestos para movilizar personas afectadas en salud, prevenir o atender desastres y/o calamidades o actividades policiales, debidamente registrados como tal con las normas y características que exige la actividad para la cual se matricules y los automotores que realizan atención médica domiciliaria, debidamente identificados, cuando en ellos se desplace personal médico en servicio.</li>
      <li>Vehículos de personas con discapacidad. Automotores que transporten o sean conducidos por personas con discapacidad permanente, cuya condición motora, sensorial o mental limite su movilidad, siempre y cuando cumplan las normas establecidas para la conducción de vehículos y previa autorización de la Secretaría de Movilidad.</li>
      <li>Vehículos de empresas de servicio públicos domiciliarios. Automotores destinados o contratados por las Empresas de Servicios Público Domiciliarios para el mantinimiento, instalación y reparación de las redes de servicios públicos, siempre y cuando cuenten con plena y pública identificación, consistente en los logos de la empresa prestadora o contratante pintados o adheridos de forma permanente.</li>
      <li>Vehículos destinados al control del tráfico y grúas. Automotores tipo grúa y aquellos destinados al control del tráfico de la Secretaría de Movilidad del Municipio de Villavicencio.</li>
      <li>Vehículos blindados. Automotores con nivel tres (3) o supreiro de blindaje, inscritos como tales en el registro automotor y autorizado por ls Superintendencia de Vigilancia y Seguridad Privada.</li>
      <li>Vehículos escolta: Conducidos por personal armado autorizado y registrado ante la Superintendencia de Vigilancia y Seguridad Privada.</li>
      <li>Vehículos destinados a enseñanza para conductores: solo se eximen de la restricción a los vehículos que circules con el instructor y el alumno, plenamente identificados.</li>
      <li>Los vehículos de transporte de carga, tanto de servicio particulares como público, clase camión o camioneta clasificados en el Registro Automotor como estacas, furgón o panel, con capacidad de carga mayor o igual a una (1) tonelada y que posean cabina sencilla, no estarán cobijados por las restricciones contenidas en el presente Decreto.</li>
      <li>Vehículos eléctricos: Automotores propulsados exclusivamente por motores eléctricos.</li>
      <ul>`,
    map: pypFuncs.buildAssetPath(
      'villavicencio',
      'mapa-pico-y-placa-villavicencio.jpg'
    ),
  },
  name: 'Particulares',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const startDate = '2017-08-01'
      const startNums = '9-0'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return pypFuncs.rotateBy(
        date,
        startDate,
        startNums,
        pypNums,
        'years',
        true
      )
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
