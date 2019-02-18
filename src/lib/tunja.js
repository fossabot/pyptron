const pypFuncs = require('../utils/funcs')

module.exports = {
  name: 'Tunja',
  categories: {
    taxis: {
      info: {
        vehicleClasses: [
          'Vehículos de transporte público individual de pasajeros - Taxis',
        ],
        decrees: [
          {
            name: 'Decreto No. 0201 del 13 de junio de 2016',
            url:
              'http://tunja-boyaca.gov.co/apc-aa-files/63353630666563646636613430366433/2016-decreto-0201-del-13jun2016.pdf',
          },
          {
            name: 'Decreto 0151 del 22 de marzo 2013',
            url:
              'http://www.tunja-boyaca.gov.co/apc-aa-files/63353630666563646636613430366433/decreto-no_0151-del-22mar2013.pdf',
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
      },
      name: 'Taxis',
      pyp(date) {
        const options = {
          excludedDays: [0, 6],
          skipHolidays: true,
        }
        const pypFunction = () => {
          const startDate = '2015-06-01'
          const startNums = '3-4'
          const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
          return pypFuncs.rotateByMonth(date, startDate, startNums, pypNums)
        }
        return pypFuncs.pyp(date, pypFunction, options)
      },
    },
    particulares: {
      info: {
        vehicleClasses: ['Vehículos automotores de servicio particular'],
        decrees: [
          {
            name: 'Decreto No. 0201 del 13 de junio de 2016',
            url:
              'http://tunja-boyaca.gov.co/apc-aa-files/63353630666563646636613430366433/2016-decreto-0201-del-13jun2016.pdf',
          },
          {
            name: 'Decreto 0151 del 22 de marzo 2013',
            url:
              'http://www.tunja-boyaca.gov.co/apc-aa-files/63353630666563646636613430366433/decreto-no_0151-del-22mar2013.pdf',
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
        observations: `Queda excluida de la restricción establecida la infraestructura de transporte (vías y glorietas) que conforman los siguientes Corredores Principales, dentro del perímetro urbano de la ciudad de Tunja:
          <ul>
          <li>Corredor Longitudinal 1 (Norte-Sur): Ingreso a Tunja – Avenida Norte – Glorieta Norte.</li>
          <li>Corredor Longitudinal 2 (Sur-Norte): Ingreso a Tunja – Avenida Sur – Avenida Oriental – Glorieta Norte.</li>
          <li>Corredor Transversal 1 (Oriente-Occidente): Ingreso a Tunja – Avenida Paseo de la Gobernación – Glorieta Casa del Gobernador – Calle 32 – Glorieta Norte.</li>
          <li>Corredor Transversal 2 (Occidente-Oriente): Ingreso a Tunja – Vía Moniquirá-Tunja – Diagonal 38 – Glorieta Norte.</li>
          <li>Corredor Complementario: Ingreso a Tunja – Transversal 15 – Calle 22 – Avenida Colón – Avenida Maldonado – Glorieta Norte.</li></ul>`,
        exceptions: `<ul>
        <li>Caravanas de vehículos para el transporte de funcionarios del orden Nacional, Departamenteal y Municipal; y vehículos con placa oficial para el transporte de funcionarios del orden Nacional, Departamental y Municipal.</li>
        <li>Vehículos de servicio diplomático o consular o automotor identificados con placas especiales asignadas por el Ministerio de Relaciones Exteriores, y vehículos de las autoridades eclesiásticas.</li>
        <li>Carrozas fúnebres o vehículos destinados y/o adecuados técnicametne para el traslado de ferétros.</li>
        <li>Vehículos de organismos de seguridad del Estado, es decir los automotores que pertenezcan o hagan parte de los cuerpos de seguridad del Estado, Fuerzas Militares, Policial Nacional y Cuerpo Técnico de Investigación de la Fiscalía General de la Nacioón y los que ejerzan funciones legales de policia judicial.</li>
        <li>Vehículos de emergencia, es decir los automotores debidamente identificados e ilumidados, dispuestos para movilizar personas afectadas en salud, prevenir o atender desastres y/o calamidades, o actividades policiales, debidamente registrados como tal con las normas y características que exige la actividad para la cual se matricule, y los automotores que realizan atención médica domiciliaria debidamente identificados, cuando en ellos se desplace personal médico en servicio.</li>
        <li>Vehículos de personas con discapacidad, es decir automotores que transporten o sean conducidos por personas con discapacidad permanente, cuya condición motora, sensorial o mental limite su movilidad, siempre y cuando cumplan las normas establecidas para la conducción de vehículos y tengan el debido distintivo.</li>
        <li>Vehículos de empresas de servicios públicos domiciliarios, es decir los automotores destinados o contratados por las Empresas de Servicios Públicos Domiciliarios para el mantenimiento, instalación y reparación de las redes de servicios públicos, siempre y cuando cuenten con plena y pública identificación, consistente en los logos de la empresa contratante pintados o adheridos en la carrocería.</li>
        <li>Vehículos destinados al control del tráfico y grúas, es decir los automotores tipo grúa y aquellos destinados al control del tráfico en la ciudad de Tunja.</li>
        <li>Vehículos de control de emisiones y vertimientos, es decir los vehículos utilizados por las autoridades ambientales y de desarrollo para la revisión, atención y prevención de emisiones y verimientos contaminantes, siempre y cuando tengan los logos pintados o adheridos en la carrocería.</li>
        <li>Vehículos blindados, es decir los automotores con nivel tres (3) o superior de blindaje, inscritos como tales en el Registro Automotor Municipal y autorizado el blindaje por la Superintendencia de Vigilancia y Seguridad Privada.</li>
        <li>Vehículos escolta, es decir aquellos conducidos por personal armado autorizado y registrado ante la Superintendencia de Vigilancia y Seguridad Privada.</li>
        <li>Vehículos de medios de comunicación, es decir automotores de propiedad de los medios de comunicación, que porten pintados o adheridos en la carrocería en forma visible los distintivos del medio de comunicación y que transporten personal o equipos técnicos de comunicación para el desarrollo de la labor periodística.</li>
        <li>Vehículos de autoridades judiciales, es decir los automotores de propiedad de Magistrados(as) de las Salas Penales del Tribunal de Boyacá, los(as) Jueces(as) Penales y los Fiscales a quienes el Consejo Seccional de la Judicatura y la Fiscalía certifiquen que desempeñan dicha labor en la ciudad de Tunja, poseen alto riesgo de seguridad, previo estudio y que no tienen asignado un vehículo oficial para su transporte y custodia.</li>
        </ul>La secretaría de Tránsito y Transporte de Tunja definirá las condiciones necesarias para la inscripción de los vehículos exceptuados en el Registro Automotor Municipal de Tunja, los cuales deben pertenecer a la persona natural o jurídica en quien concurran las condiciones de excepción.`,
        map: pypFuncs.buildAssetPath('tunja', 'mapa-pico-y-placa-tunja.jpg'),
      },
      name: 'Particulares',
      pyp(date) {
        const options = {
          excludedDays: [0, 6],
          skipHolidays: true,
        }
        const pypFunction = () => {
          const pyp = [
            '3-4', // lunes
            '5-6', // martes
            '7-8', // miércoles
            '9-0', // jueves
            '1-2', // viernes
          ]
          return pyp[pypFuncs.getDay(date) - 1]
        }
        return pypFuncs.pyp(date, pypFunction, options)
      },
    },
  },
}
