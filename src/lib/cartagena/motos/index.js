const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos tipo motocicleta de cualquier modalidad y cilindraje, incluyendo cuatrimotos, tricimotos, motocarros y bicicletas con pedalea asistido con motor.',
    ],
    decrees: [
      {
        name: 'Decreto 1035 del 5 de septiembre de 2018',
        url: pypFuncs.buildAssetPath(
          'cartagena',
          'decreto-1035-del-5-de-septiembre-de-2018.pdf'
        ),
      },
    ],
    days: ['Lunes a viernes.'],
    hours: [
      {
        comment: '',
        hours: [['5:00', '23:00']],
        days: [],
      },
    ],
    scheme: `<ol>
      <li>Restringir en todo el territorio del Distrito Turístico y Cultural de Cartagena de Indias la circulación de los vehículos tipo motocicleta de cualquier modalidad y cilindraje, incluyendo las cuatrimotos, tricimotos, motocarros y bicicletas con pedaleo asistido con motor, mediante la implementación de la medida de Pico y Placa que operará así: <ul><li>Los días pares solo circularán motocicletas cuyas placas terminen en números pares, incluyendo el 0.</li><li>Los días impares solo circularán motocicletas cuyas placas terminen en números impares.</li></ul>
      Se exceptúan de esta medida: <ul>
      <li>Las motocicletas de organismo de seguridad del Estado, Fuerzas Militares, Armada Nacional, Policía Nacional, y Cuerpo Técnico de Investigación de la Fiscalía General de la Nación, y los que ejerzan funciones legales de Policía Nacional.</li>
      <li>Las moticicletas de autoridades de tránsito.</li>
      <li>Las motocicletas del personal de organismos de socorro.</li>
      <li>Las motocicletas de escoltas, supervisores, vigilantes y coordinadores adscritos a emrpesas de vigilancia en ejercicio de sus funciones.</li>
      <li>Las motocicletas de propiedad y al servicio de las empresas de servicios públicos domiciliario.</li>
      <li>Las motocicletas de mensajeros y domiciliarios de restaurantes y droguerías para reparto de alimentos y medicamentos.</li>
      </ul></li>
      <li>Restringir temporalmente en todo el territorio del Destrito Turístico y Cultural de Cartagena de Indias el segundo y último viernes de cada mes la circulación de vehículos tipo motocicleta de cualquier modalidad y cilindraje, incluyendo cuatrimotos, tricimotos, motocarros y cibicletas con pedaleo asistido con motor.
      Se exceptúan de esta medida: <ul>
      <li>Las motocicletas de organismo de seguridad del EStado, Fuerzas Militares, Armada NAcional, Policía Nacional, y Cuerpo Técnico de Investigación de la Fiscalía General de la Nación y los que ejerzan funciones legales de Policía Nacional.</li>
      <li>Las motocicletas de autoridades de tránsito.</li>
      <li>Las motocicletas de notificadores de juzgados y tribunales.</li>
      <li>Las motocicletas de personal de las entidades estatales que ejerzan fucniones de mensajería.</li>
      <li>Las motocicletas del personal de organismos de socorro.</li>
      <li>Las motocicletas de escoltas, supervisores, vigilantes y coordinadores adscritos a empresas de vigilancia en ejercicio de sus funciones.</li>
      <li>Las motocicletas de domiciliarios de droguería para el reparto de medicamentos.</li>
      </ul>
      </li>
      <li>Restringir el ingreso y la circulación de los vehículos automotores denominados motocicletas de cualquier modalidad y cilindraje, incluyendo cuatrimotos, tricimotos, motocarros y bicicletas con pedaleo asistido con motor, en el centro amurallado de la ciudad de cartagena de INdias y en el barrio Getsemaní.
      Se exceptúan de esta medida: <ul>
      <li>Las motocicletas de organismos de seguridad del Estado, Fuerzas Militares, Armada Nacional, Policía Nacional, y Cuerpo Técnico de investigación de la fiscalía General de la Nación y los que ejerzan funciones legales de Policía Nacional.</li>
      <li>Las motocicletas de autoridades de tránsito.</li>
      <li>Las motocicletas de notificadores de juzgados y tribunales.</li>
      <li>Las motocicletas del personal de las entidades estatales que ejerzan funciones de mensajería.</li>
      <li>Las motocicletas del personal de organismos de socorro.</li>
      <li>Las motocicletas de escoltas, supervisores, vigilantes y coordinadores adscritos a empresas de vigilancia en ejercicio de sus funciones.</li>
      <li>Las motocicletas de propiedad y al servicio de las empresas de servicios públicos domiciliario.</li>
      </ul>
      </li>
      </ol>`,
  },
  name: 'Motos',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const dateObject = new Date(date)
      if (dateObject.getDay() === 5) {
        const year = dateObject.getFullYear()
        const month = dateObject.getMonth()
        const secondFriday = pypFuncs.getNthDayOfMonth(year, month, 5, 1)
        if (
          pypFuncs.formatDate(dateObject, 'YYMMDD') ===
          pypFuncs.formatDate(secondFriday, 'YYMMDD')
        ) {
          return '0-1-2-3-4-5-6-7-8-9'
        }
        const lastFriday = pypFuncs.getNthDayOfMonth(year, month, 5, -1)
        if (
          pypFuncs.formatDate(dateObject, 'YYMMDD') ===
          pypFuncs.formatDate(lastFriday, 'YYMMDD')
        ) {
          return '0-1-2-3-4-5-6-7-8-9'
        }
      }
      const pyp = ['1-3-5-7-9', '0-2-4-6-8']
      return pyp[pypFuncs.getDate(date) % 2]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
