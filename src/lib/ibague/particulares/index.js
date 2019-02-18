const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Vehículos particulares y oficiales'],
    decrees: [
      {
        name: 'Decreto 0037 de 13 de Enero de 2017',
        url:
          'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2017/16370-DEC-20170116.pdf',
      },
      {
        name: 'Decreto 0946 del 31 de octubre de 2018',
        url: pypFuncs.buildAssetPath('ibague', 'decreto-0946-de-2018.pdf'),
      },
    ],
    days: ['Días hábiles de la semana - lunes a viernes.'],
    hours: [
      {
        comment: '',
        hours: [['6:00', '9:00'], ['11:30', '14:30'], ['17:00', '19:30']],
        days: [],
      },
    ],
    scheme:
      'Restringir la circulación de vehículos particulares (carros) en toda el área urbana de la ciudad de Ibagué. Exceptuando tránsito vehícular por las variantes nacionales',
    observations:
      'Se exceptúan de esta restricción todos los vehículos paarticulares en tránsito por la Ciudad de Ibagué sector urbano, deben hacer uso de las vías nacionales (variantes), (i) procedente del departamento del Quindio -vía Bogotá, y viceversa (ii) Ibagué-Alvarado y viceversa.',
    exceptions: `Exceptúese de la restricción a la circulación por Pico y Placa, los siguientes vehículos automotores de registro particular, por medio de los cuales se realiza alguna de las suguientes actividades, o se transporta personas cumpliendo misiones y que se encuentres debidamente identificados y certificados, dadas las obligaciones y responsabilidades que para cada una se facultan:<ul>
    <li>De polocía, fuerzas militares, organismos de seguridad o escoltas y perdiodistas.</li>
    <li>Des servicios públicos domiciliarios (acueducto, telefonía, energía, gas y recolectores de basura.</li>
    <li>Motocicletas.</li>
    <li>De distribución de bienes y alimentos.</li>
    <li>De transporte de valores y vehículos de seguridad.</li>
    <li>De atención médica domiciliaria, transporte de enfermos en caso de emergencia, tales como ambulancias, bomberos, defensa civil, cruz roja, incluyendo médicos que demuestren que requieren desplazarse para el ejercicio vital de sus funciones profesionales.</li>
    <li>De servicio funerario.</li>
    <li>Vehículos procedentes de otras regiones y que se encuentren de paso por la ciudad, situación que se acreditará, con el respectivo recibo de pago del peaje fechado el mismo día de tránsito por la Ciudad.</li>
    <li>Vehículos que tengan adaptados mecanismos para desplazar discapacitados, o en los que ellos se desplacen.</li>
    </ul>No serán objeto de la restricción a la circulación por Pico y Placa, los vehículos automotores de registro oficial, diplomático y consular.`,
  },
  name: 'Particulares',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const pyp = [
        '0-1', // lunes
        '2-3', // martes
        '4-5', // miércoles
        '6-7', // jueves
        '8-9', // iernes
      ]
      return pyp[pypFuncs.getDay(date) - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
