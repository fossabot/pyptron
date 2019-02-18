const pypFuncs = require('../utils/funcs')

module.exports = {
  name: 'Pasto',
  categories: {
    particulares: {
      info: {
        vehicleClasses: ['Vehículos automotores de servicio particular'],
        decrees: [
          {
            name: 'Decreto 0201 del 18 de mayo de 2017',
            url:
              'http://www.pasto.gov.co/index.php/decretos/decretos-2017?download=10061:dec_0201_18_may_2017',
          },
        ],
        days: [
          'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
        ],
        hours: [
          {
            comment: '',
            hours: [['7:30', '19:00']],
            days: [],
          },
        ],
        scheme:
          'Se restringe el tránsito de vehículos automotores en la ciudad de San Juan de Pasto de acuerdo con el último dígito numérico de la placa del vehículo, sujetándose a los ciclos y dias señalados',
        observations: '',
        exceptions: `<ul>Se exceptúan de la aplicación de la restricción por Pico y Placa, los vehículos automotores que estén destinados a los siguientes servicios o actividades, siempre que su conductor y ocupantes se encuentren debidamente identificados y en ejercicio de sus funciones, actividades laborales o en desarrollo de su objeto contractual:
        <li>Transporte público colectivo municipal, especial y de pasajeros por carretera con ruta desde y hacia el terminal de transporte de Pasto y parqueadero mixto.</li>
        <li>Transporte de alimentos perecederos, alimentos preparados y medicamentos.</li>
        <li>Transporte de personas con limitaciones de salud y los vehículos diseñados, construidos o destinados exclusivamente al transporte de personas con discapacidad.</li>
        <li>Vehículos destinados al transporte de materiales de construcción.</li>
        <li>Vehículos de la Policía Nacional, Fuerzas Militares, Fiscalía General de la Nación y Cuerpo Técnico de Investigación, del Instituto Nacional Penitenciario y Carcelario -INPEC-.</li>
        <li>Vehículos de propiedad o al servicio del estado en cualquiera de sus órdenes o niveles.</li>
        <li>Vehículos de las Autoridades de Tránsito y Transporte, y grúas al servicio de los organismos de tránsito.</li>
        <li>Los vehículos de los Organismos de socorro: Cruz Roja, Cuerpo de Bomberos, Defensa Civil y de entidades u organismos no gubernamentales que realicen atención a víctimas.</li>
        <li>Vehículos de los Organismos regionales y locales de prevención y atención de emergencias y desastres DPAED.</li>
        <li>Carrozas o coches fúnebres, más no el cortejo fúnebre.</li>
        <li>Los vehículos operativos de las empresas de servicios públicos y privadas domiciliarios que tengan logo de la empresa en su carrocería.</li>
        <li>Vehículos de los medios de comunicación debidamente acreditados y sólo cuando se movilicen en desarrollo de actividades propias de su profesión u oficio.</li>
        <li>Vehículos de servicios de escolta de funcionarios del orden nacional, departamental y municipal, debidamente identificados.</li>
        <li>Vehículos de supervisores de seguridad privada debidamente identificados con los respectivos emblemas en la carrocería y solo cuando este en ejercicio de sus funciones.</li>
        <li>Los vehículos al servicio de centros hospitalarios de urgencia y aquellos destinados a la atención médica domiciliaria, debidamente identificados, cuando en ellos se desplace personal médico o paramédico en servicio.</li>
        <li>Vehículos al servicio de centros veterinarios de urgencia.</li>
        <li>Vehículos en los que se transportan defensores públicos, los Procuradores Regional y Provincial, y el Director de Fiscalía, siempre y cuando estén en ejercicio de sus funciones.</li>
        <li>Integrantes activos del Grupo Cívico de Tránsito de Pasto, siempre y cuando se encuentren en ejercicio de sus funciones.</li>
        <li>Vehículos de transporte de los integrantes de la Rama Judicial, Entidades del Gobierno, Congreso de la República, Asamblea Departamental, Concejo Municipal, Magistrados, Jueces, Fiscales y servidores públicos que por la naturaleza de su cargo requieren un nivel calificativo de seguridad, aportando para el efecto las correspondientes credenciales y certificaciones, expedidas por la autoridad competente.</li>
        <li>Vehículos destinados al transporte escolar autorizado.</li>
        <li>Vehículos de propiedad de directivos docentes, docentes y administrativos del sector educativo que trabajan en zonas rurales del Municipio de Pasto o Municipios aledaños, en cumplimiento de sus funciones.</li>
        </ul>`,
      },
      name: 'Particulares',
      pyp(date) {
        const options = {
          excludedDays: [0, 6],
          skipHolidays: true,
        }
        const pypFunction = () => {
          const startDate = '2018-01-01'
          const startNums = '8-9'
          const pypNums = ['0-1', '2-3', '4-5', '6-7', '8-9']
          return pypFuncs.rotateByWeek(
            date,
            startDate,
            startNums,
            pypNums,
            true
          )
        }
        return pypFuncs.pyp(date, pypFunction, options)
      },
    },
    motos: {
      info: {
        vehicleClasses: ['Motocicletas'],
        decrees: [
          {
            name: 'Decreto 0201 del 18 de mayo de 2017',
            url:
              'http://www.pasto.gov.co/index.php/decretos/decretos-2017?download=10061:dec_0201_18_may_2017',
          },
        ],
        days: [
          'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
        ],
        hours: [
          {
            comment: '',
            hours: [['7:30', '19:00']],
            days: [],
          },
        ],
        scheme:
          'Se restringe el tránsito de vehículos automotores en la ciudad de San Juan de Pasto de acuerdo con el último dígito numérico de la placa del vehículo, sujetándose a los ciclos y dias señalados',
        observations: '',
      },
      name: 'Motos',
      pyp(date) {
        const options = {
          excludedDays: [0, 6],
          skipHolidays: true,
        }
        const pypFunction = () => {
          const startDate = '2018-01-01'
          const startNums = '8-9'
          const pypNums = ['0-1', '2-3', '4-5', '6-7', '8-9']
          return pypFuncs.rotateByWeek(
            date,
            startDate,
            startNums,
            pypNums,
            true
          )
        }
        return pypFuncs.pyp(date, pypFunction, options)
      },
    },
  },
}
