const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Motocicletas y motocarros de servicio particular'],
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
    observations: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10W9kwMwYeJfueGAuk2eqXD982kOfLG-8" width="100%" height="680"></iframe>`,
    exceptions: `<ul>
      <li>Motocicletas que pertenezcan o estén contratadas por las empresas dedicadas a los servicio de seguridad vigilancia privada o de escoltas, siempre y cuando estén prestando el servicio y plenamente identificados.</li>
      <li>Motocicletas cuya propiead pertenezca a las Fuerzas Armadas, a la Policía Nacional, Rama Judicial y a la Fiscalía.</li>
      <li>Motocicletas dedicadas al control y vigilancia del tránsito y transporte, durante la prestación del servicio.</li>
      <li>Motocicletas pertenecientes a los organismos de socorro y de atención de emergencias, plenamente identificadas.</li>
      <li>Motocicletas en las que por necesidad en la prestación de un servicio sean autorizadas por la Secretaría de Movilidad, dependencia que definirá las condiciones necesarías para la solicitud e inscripción de los vehículos que requieren excepción, los cuales deben pertenecer a la persona natural o jurídica en quien concurran las condiciones de excepción.</li>
      <li>Motocicletas vinculadas a establecimientos de comercio o empresas que realicen actividades de mensajería, domicilios, reparto de mercancías o cobranzas debidamente identificadas con logos y/o distintivos pintados o adheridos de forma permanente al vehículos y/o en los cuales los conductores se encuentren debidamente uniformados e identificados como personal de los establecimeintos mencionados, previa autorización de la Secretaría de Movilidad.</li>
      <li>Motocicletas de empresas de servicios públicos domiciliarios. Motocicletas destinadas o contratadas porl as Empresas de Servicios Públicos Domiciliarios para el mantenimientos, instalación, y reparación de las redes de servicios públicos, siempre y cuando cuenten con plena y pública identificación, consistente en los logos de la empresa contratante pintados o adheridos de forma permanente, previa autorización de la Secretaría de Movilidad.</li>
      <li>Motocicletas eléctricas. Motocicletas propulsadas exclusivamente por motores eléctricos.</li>
      <ul>`,
    map: pypFuncs.buildAssetPath(
      'villavicencio',
      'mapa-pico-y-placa-villavicencio.jpg'
    ),
  },
  name: 'Motos',
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
