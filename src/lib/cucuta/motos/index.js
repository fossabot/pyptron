const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos automotores particulares de dos tiempos tipo motocicleta, mototriciclos, cuatrimotos y motocarros',
    ],
    decrees: [
      {
        name: 'Decretos 0239 del 4 de abril del 2017',
        url:
          'http://www.areacucuta.com/wp-content/uploads/2017/04/Decreto-Pico-y-Placa-Placa-y-D%C3%ADa.pdf',
      },
      {
        name: 'Decretos 0330 del 22 de mayo del 2017',
        url:
          'http://cucutaonline.com/wp-content/uploads/2017/05/Decreto-0330-pico-placa-modificado.pdf',
      },
    ],
    days: ['Lunes a viernes hábiles'],
    hours: [
      {
        comment: '',
        hours: [['7:30', '9:00'], ['11:30', '13:30'], ['17:30', '19:00']],
        days: [],
      },
    ],
    scheme:
      'El ‘pico y placa’ contempla restricciones en la movilidad para vehículos particulares de placa Nacional (automóviles, motocicletas, camionetas, camiones, volquetes) matriculados en Cúcuta, Villa del Rosario, Los Patios y El Zulia',
    observations: `Aplica en el cuadrante del centro que encierran las siguientes avenidas y calles:<ul>
      <li>Diagonal Santander: En sus dos calzadas desde la Glorieta de El Terminal (no incluye la glorieta), hasta llegar al cruce que conduce a la avenida Los Libertadores.</li>
      <li>Avenida Los Libertadores: Desde el cruce con Diagonal Santander sentido norte-sur (Corponor), hasta la calle 18.</li>
      <li>Calle 18: Desde la Avenida Los Libertadores hasta la avenida 4.</li>
      <li>Avenida 4: Desde la calle 17 hasta la calle 18.</li>
      <li>Avenida 8: Desde la calle 2 hasta la calle 17.</li>
      <li>Calle 2: Desde la avenida 8 hasta la avenida 7 del barrio El Callejón.</li>
      <li>Avenida 7: Desde la calle 2 hasta la Glorieta de El Terminal (no incluye la glorieta).</li></ul>`,
    exceptions: `Exceptúense de la medida del Pico y Placa los siguientes vehículos:<ul>
        <li>Vehículos destinados a cubrir emergencias (ambulancias, bomberos, defensa civil y equipos logísticos para atención de siniestros) operaciones de servicios públicos domiciliarios (Aguas Kpital, Alumbrado Público, Centrales Eléctricas CENS, GAS, Telefonía, Aseo Urbano) que sean de placa pública.</li>
        <li>Vehículos de atención médica personalizada con identificación permanente.</li>
        <li>Vehículos para el Transporte de alimentos perecderos debidamente identificados y autorizados.</li>
        <li>Caravana presidencial</li>
        <li>Vehículos pertenecientes a las Fuerzas Militares, Policía Nacional, CTI, unidades criminalísticas y del INPEC para el transporte de personal detenido.</li>
        <li>Vehículos conducidos por personas en estado de discapacidad que porten el símbolo INTERNACIONAL DE ACCESIBILIDAD (SIA) o que transporten a dichas personas. En caso que no sea evidente la limitación física, el conductor deberá acreditarse con el carné que expida la respectiva EPS, indicando el grado de discapacidad.</li>
        <li>Vehículos identificados y acreditados para el transporte de valores.</li>
        <li>Vehículos de blindaje igual o superior a nivel tres (3).</li>
        <li>Coches fúnebres, más no el cortejo funerario.</li>
        <li>Vehículos debidamente acreditados para transporte especial (escolar y turismo).</li>
        <li>Vehículos oficiales al servicio de Magistrados, Jueces, Fiscales y personal de la Veeduría de la Defensoría del Pueblo en ejercicio de sus funciones.</li>
        <li>Vehículos oficiales al Servicio del Ministerio Público: Procurador Regional, Procuradores Provinciales y Defensor del Pueblo.</li>
        <li>Vehículos oficiales de: Gerentes Departamentales de la Contraloría de la República, Contralo Departamental del Norte de Santander, Contralor Municipal de Cúcuta, Personero Municipal de Cúcuta, Concejales del Municipio de Cúcuta, Diputados del Departamento Norte de Santander.</li>
        <li>Vehículos y grúas destinados al control del tráfico en la ciudad de San José de Cúcuta.</li>
        <li>Los vehículos con placa nacional de propiedad de los medios de comunicación que estén debidamente identificados.</li>
      </ul>`,
  },
  name: 'Motos',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const pyp = [
        '0-9', // lunes
        '1-8', // martes
        '2-7', // miércoles
        '3-6', // jueves
        '4-5', // viernes
      ]
      return pyp[pypFuncs.getDay(date) - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
