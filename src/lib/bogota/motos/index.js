const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Motocicletas'],
    decrees: [],
    days: ['Lunes a viernes hábiles'],
    hours: [
      {
        comment: 'Lunes a viernes',
        hours: [['6:00', '19:30']],
        days: [1, 2, 3, 4, 5],
      },
      {
        comment: 'Sábados',
        hours: [['6:30', '18:00']],
        days: [6],
      },
      {
        comment: 'Domingos',
        hours: [['6:30', '15:00']],
        days: [0],
      },
    ],
    scheme: `<ul>
        <li>Día par hábil: placa último dígito par.</li>
        <li>Día impar hábil: placa último dígito impar.</li>
        <li>Sábado no podrán circular vehículos con placas terminadas en número par.</li>
        <li>Sábado no podrán circular vehículos con placas terminadas en número impar.</li>
        <ul>`,
    observations:
      'No aplicará desde el día hábil siguiente al veinticinco (25) de diciembre de cada año, hasta el viernes hábil antes del descanso ordenado por la Ley 51 de 1983 para la festividad correspondiente al seis (6) de enero del año siguiente.',
    exceptions: `<ul>
      <li>Vehículos de transporte público.</li>
      <li>Vehículos y motocicletas conducidos por personas en condición de discapacidad o para su transporte.</li>
      <li>Vehículos y motocicletas de emergencia.</li>
      <li>Vehículos de transporte escolar de propiedad de instituciones educativas y únicamente cuando sean empleados para el transporte de sus estudiantes. Estos deberán operar y estar plenamente identificados de conformidad con las normas que regulan el transporte escolar.</li>
      <li>Vehículos de transporte con capacidad para movilizar más de diez (10) pasajeros.</li>
      <li>Vehículos y motocicletas destinados a operativos de las empresas de servicios públicos domiciliarios.</li>
      <li>Vehículos y motocicletas destinados al control del tráfico y las grúas que prestan el servicio a la Secretaría Distrital de Movilidad.</li>
      <li>Caravana Presidencial.</li>
      <li>Vehículos y motocicletas Militares, de Policía Nacional y de Organismos de Seguridad del Estado.</li>
      <li>Vehículos y motocicletas asignados al Cuerpo Diplomático.</li>
      <li>Vehículos con blindaje de nivel tres (3) o superior.</li>
      <li>Vehículos y motocicletas propulsados exclusivamente por motores eléctricos.</li>
      <li>Vehículos y motocicletas escolta que estén al servicio de actividades inherentes a la protección de personas debidamente autorizados por la Superintendencia de Vigilancia y Seguridad Privada o que hagan parte de esquemas de seguridad autorizados por los organismos del Estado, y sólo durante la prestación del servicio.</li>
      <li>Carrozas fúnebres.</li>
      <li>Motocicletas vinculadas a empresas que prestan el servicio de mensajería debidamente identificadas, o con logos y/o distintivos pintados o adheridos al vehículo y/o plena identificación del conductor del vehículo.</li>
      <li>Motocicletas vinculadas a establecimientos de comercio que ofrezcan el servicio de domicilio y sean utilizadas exclusivamente para dicha labor y cuenten con identificación, consistente en los logos y/o distintivos pintados o adheridos al vehículo y/o plena identificación del conductor del vehículo.</li>
      <li>Vehículos y motocicletas vinculados a escuelas de enseñanza automovilística que cumplan con las condiciones establecidas en la normatividad vigente. Vehículos y motocicletas destinados para el control operacional de Transmilenio.</li>
      <li>Vehículos y motocicletas destinadas al control de emisiones y vertimientos. Automotores y motocicletas utilizados por la Secretaria Distrital de Ambiente o por el Ministerio de Ambiente y Desarrollo Sostenible o quien haga sus veces, para la revisión, atención y prevención de emisiones y vertimientos contaminantes, siempre y cuando cuenten con plena y pública identificación, consistente en los logos pintados o adheridos en el vehículo y/o plena y pública identificación del conductor del vehículo.</li></ul>`,
  },
  name: 'Motos',
  pyp(date) {
    const options = {
      excludedDays: [],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const day = pypFuncs.getDay(date)
      if (
        pypFuncs.formatDate(date) >= '2018-12-26T00:00:00-05:00' &&
        pypFuncs.formatDate(date) <= '2019-01-04T00:00:00-05:00'
      ) {
        return 'NA'
      }
      if (day === 6) {
        return '0-2-4-6-8'
      }
      if (day === 0) {
        return '1-3-5-7-9'
      }
      const pyp = ['0-2-4-6-8', '1-3-5-7-9']
      return pyp[pypFuncs.getDate(date) % 2]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
