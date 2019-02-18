const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos automotores de servicio público de transporte terrestre individual de pasajeros en vehículos tipo taxi',
    ],
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
      {
        name: 'Decreto 010 de 2017',
        url: pypFuncs.buildAssetPath(
          'villavicencio',
          'decreto-010-del-24-de-enero-de-2017.pdf'
        ),
      },
      {
        name: 'Decreto 131 de 2016',
        url: pypFuncs.buildAssetPath(
          'villavicencio',
          'decreto-131-del-26-de-enero-de-2016.pdf'
        ),
      },
    ],
    days: ['Lunes a viernes'],
    hours: [
      {
        comment: '',
        hours: [['6:00', '24:00']],
        days: [],
      },
    ],
    scheme:
      'Según el último dígito de la placa única nacional y acorde con el día hábil de cada mes.',
    observations: `Los vehículos de servicio público de transporte terrestre automotor individual de pasajeros tipo taxi, que tengan restricción de circulación según el último dígito de la placa única nacional, podrán circular entre las 6:00 y las 7:00 horas y entre las 16:00 y las 17:00, solo por efectos de mantenimiento del vehículo y deberán cumplir las siguientes condiciones: <ul>
      <li>Portar en el vidrio delantero (lugar del pasajero) y en el vidrio trasero, un aviso que diga "FUERA DE SERVICIO", escrito en letra Arial de diez (10) centímetros de altura.</li>
      <li>En el vehículo solo se podrá movilizar el conductor.</li>
      <li>El vehículo deberá transitar sin la silla trasera o en su defecto solo se permitirá el espaldar de la silla.</li>
      </ul>`,
    exceptions: `La restricción de vehículos automotores de servicio público de transporte terrestre automotor individual de pasajeros en vehículos tipo taxi, se dará en la jurisdicción del Municipio de Villavicencio, y tendrá como límites los siguientes puntos sobre los corredores de acceso y salida de la ciudad: <ul>
      <li>Vía Puerto López a la altura del Puente sobre el Río Ocoa.</li>
      <li>Vía Acacías a la altura del sector de Ciudad Porfía (incluido Porfía).</li>
      <li>Vía Restrepo a la altura del monumento de las Arpas (Glorieta de Vanguardia).</li>
      <li>Vía antigua Restrepo a la altura del puente sobre el Caño Seco, contiguo al CAI Caudal.</li>
      <li>Vía antigua a Bogotá a la altura del sector de Súper Gas.</li>
      <li>Vía nueva a Bogotá a la altura del sector de Buenavista entrada al túnel (Misael Pastrana Borrero) sentido Bogotá - Villavicencio.</li>
      <li>Vía Catama a la altura del sector de la Reliquia (incluido la Reliquia).</li>
      </ul>`,
  },
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const dateObject = new Date(date)
      const datesDate = dateObject.getDate()
      if (datesDate === 31) {
        return 'NA'
      }
      return (datesDate % 10).toString(10)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
