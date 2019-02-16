const pypFuncs = require('../utils/funcs')

module.exports = {
  name: 'Quibdó',
  categories: {
    motos: [
      {
        from: '2016-09-01',
        info: {
          vehicleClasses: ['Motocicletas de todo cilindraje'],
          decrees: [
            {
              name: 'Decreto 222 de 2016',
              url: pypFuncs.buildAssetPath('quibdo', 'decreto-222-de-2016.pdf'),
            },
          ],
          days: [
            'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
          ],
          hours: [
            {
              comment: '',
              hours: [['7:30', '19:30']],
              days: [],
            },
          ],
          scheme: 'Conforme al último dígito numérico de la placa',
          observations: '',
          exceptions: `<ul>Se exceptúan de la aplicación de la restricción por Pico y Placa los vehículos que se encuentren al servicio de las siguientes entidades siempre y cuando se movilicen en ejercicio de sus funciones y sus ocupantes se identifiquen plenamente:
        <li>La Policía Nacional y Fuerzas Militares, Fiscalía General de la Nación, Cuerpo Técnico de Investigación, Personería Municipal, Defensoría del Pueblo, Procuraduría General de la Nación, Instituto Nacional Penitenciario y Carcelario.</li>
        <li>Autoridades de Tránsito y Transporte.</li>
        <li>Organismos de socorro como Cruz Roja, Cuerpo de Bomberos, Defensa Civil, Unidad Nacional para la Gestión de Riesgo de Desastres UNGRD, Regional y local.</li>
        <li>Personal operativo de servicios públicos domiciliarios.</li>
        <li>Medios de Comunicación (con sus respectivos permisos para el órgano de tránsito).</li>
        <li>Escoltas de funcionarios del orden nacional, departamental y municipal.</li>
        <li>Supervisores del personal de seguridad privada.</li>
        <li>Entrega de alimentos, medicamentos y mensajería a domicilio.</li>
        <li>Personal de entidades de salud que atienden hospitalización domiciliaria, debidamente acreditados y uniformados.</li>
        </ul>Los conductores de los vehículos anteriormente relacionados, deberán portar su respectivo carné y distintivos de la institución o empresa que acrediten la condición de excepción, certificado de existencia y representación legal del ente respectivo y la certificación original debidamente expedida por el representante legal en la que indique como mínimo nombre del conductor, identificación y placa del vehículo automotor, acreditando que el vehículo presta servicio. El vehículo podrá circular demostrando su condición de excepción a través de los documentos relacionados y por lo tanto no rquiere la expedición de permiso alguno.`,
        },
        name: 'Motos',
        pyp(date) {
          return pypFuncs.pyp({
            date,
            excludedDays: [0, 6],
            skipHolidays: true,
            processingFunction() {
              const pyp = [
                '1-2-3-4', // lunes
                '5-6-7-8', // martes
                '9-0-1-2', // miércoles
                '3-4-5-6', // jueves
                '7-8-9-0', // viernes
              ]
              return pyp[pypFuncs.getDay(date) - 1]
            },
          })
        },
      },
    ],
    particulares: [
      {
        from: '2016-09-01',
        info: {
          vehicleClasses: ['Vehículos automotores de servicio particular'],
          decrees: [
            {
              name: 'Decreto 222 de 2016',
              url: pypFuncs.buildAssetPath('quibdo', 'decreto-222-de-2016.pdf'),
            },
          ],
          days: [
            'Lunes a viernes hábiles (No se aplicará en los días festivos establecidos por la Ley)',
          ],
          hours: [
            {
              comment: '',
              hours: [['7:30', '19:30']],
              days: [],
            },
          ],
          scheme: 'Conforme al último dígito numérico de la placa',
          observations: '',
          exceptions: `<ul>Se exceptúan de la aplicación de la restricción por Pico y Placa los vehículos que se encuentren al servicio de las siguientes entidades siempre y cuando se movilicen en ejercicio de sus funciones y sus ocupantes se identifiquen plenamente:
        <li>La Policía Nacional y Fuerzas Militares, Fiscalía General de la Nación, Cuerpo Técnico de Investigación, Personería Municipal, Defensoría del Pueblo, Procuraduría General de la Nación, Instituto Nacional Penitenciario y Carcelario.</li>
        <li>Autoridades de Tránsito y Transporte.</li>
        <li>Organismos de socorro como Cruz Roja, Cuerpo de Bomberos, Defensa Civil, Unidad Nacional para la Gestión de Riesgo de Desastres UNGRD, Regional y local.</li>
        <li>Personal operativo de servicios públicos domiciliarios.</li>
        <li>Medios de Comunicación (con sus respectivos permisos para el órgano de tránsito).</li>
        <li>Escoltas de funcionarios del orden nacional, departamental y municipal.</li>
        <li>Supervisores del personal de seguridad privada.</li>
        <li>Entrega de alimentos, medicamentos y mensajería a domicilio.</li>
        <li>Personal de entidades de salud que atienden hospitalización domiciliaria, debidamente acreditados y uniformados.</li>
        </ul>Los conductores de los vehículos anteriormente relacionados, deberán portar su respectivo carné y distintivos de la institución o empresa que acrediten la condición de excepción, certificado de existencia y representación legal del ente respectivo y la certificación original debidamente expedida por el representante legal en la que indique como mínimo nombre del conductor, identificación y placa del vehículo automotor, acreditando que el vehículo presta servicio. El vehículo podrá circular demostrando su condición de excepción a través de los documentos relacionados y por lo tanto no rquiere la expedición de permiso alguno.`,
        },
        name: 'Particulares',
        pyp(date) {
          return pypFuncs.pyp({
            date,
            excludedDays: [0, 6],
            skipHolidays: true,
            processingFunction() {
              const pyp = [
                '1-2', // lunes
                '3-4', // martes
                '5-6', // miércoles
                '7-8', // jueves
                '9-0', // viernes
              ]
              return pyp[pypFuncs.getDay(date) - 1]
            },
          })
        },
      },
    ],
  },
}
