const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos automotores con capacidad de carga de treinta (30) toneladas o superior',
    ],
    decrees: [
      {
        name: 'Decreto 222 del 25 de julio de 2018',
        url: 'cdn:pdf',
      },
      {
        name: 'Decreto 245 del 26 de julio de 2017',
        url: 'cdn:pdf',
      },
      {
        name: 'Decreto 010 del 24 de enero de 2017',
        url: 'cdn:pdf',
      },
      {
        name: 'Decreto 131 del 26 de enero de 2016',
        url: 'cdn:pdf',
      },
    ],
    days: ['Lunes a viernes'],
    hours: [
      {
        comment: '',
        hours: [['6:00', '8:00'], ['17:00', '19:30']],
        days: [],
      },
    ],
    scheme:
      'Prohíbase el tránsito de vehículos automotores con capacidad de carga de treinta (30) toneladas o superior por las vías públicas del perímetro urbano de la ciudad de Villavicencio de lunes a viernes entre las 6:00 y las 8:00 horas y desde las 17:00 hasta las 19:30 horas.',
    observations: `A partir de los siguientes sectores: <ul>
      <li>Vía a Puerto López a la altura de puente sobre el Rio Ocoa.</li>
      <li>Vía a Acacias a la altura del Sector Porfía (inclido Ciudad Porfía).</li>
      <li>Vía a Restrepo a la altura del monumento a las Arpas (Glorieta Vanguardia).</li>
      <li>Vían antigua a Restrepo a la altura del Ranchón del Maporal.</li>
      <li>Vía antigua a Bogotá a la altura del sector Súper Gas.</li>
      <li>Vía nueva a Bogotá a la altura del sector Buenavista entrada túnel sentido Bogotá - Villavicencio.</li>
      </ul>`,
    exceptions: `La anterior restricción no aplica para la producción agrícola, ganadera, de alientos perecederos, vehículos de emergencia, los que transporten valores, oxígeno hospitalario, los de las fuerzas militares o de policía y de las empresas de servicio públicos domiciliarios.`,
  },
  name: 'Transporte de Carga',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: false,
    }
    const pypFunction = () => '0-1-2-3-4-5-6-7-8-9'
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
