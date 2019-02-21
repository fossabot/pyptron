const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Vehículos automotores de servicio particular'],
    decrees: [
      {
        name: 'Decreto 20181000000015 del 2 de enero de 2018',
        url:
          'https://www.popayan.gov.co/sites/default/files/decreto_20181000000015_02012018.pdf',
      },
    ],
    days: ['Lunes a viernes hábiles'],
    hours: [
      {
        comment: '',
        hours: [['7:00', '19:00']],
        days: [],
      },
    ],
    scheme: 'Último dígito del número de la placa según el esquema',
    exceptions: `<ul>
    <li>Vehículos que conforman las caravanas presidenciales, Directores, Gerentes de Entidades del orden nacional con sede en la Ciudad de Popayán, Alcalde, Gobernador y Cuerpo Diplomático.</li>
    <li>Vehículos asignados por la Rama Judicial y/o cualquier otro organismo de seguridad del Estado a Magistrados de los Tribunales Contencioso Administrativo, Superior, Corte Suprema de Justicia, Corte Constitucional, Consejo Superior de la Judicatura, Consejo de Estado, altos funcionarios de la Fiscalía, Jueces de la República, cuya propiedad se encuentre registrada en la licencia de tránsito, Defensor del Pueblo, Gerente de la Contraloría General de la República Regional Cauca, Contralor Departamental, Municipal, Delegados de la Registraduría Nacional del Estado Civil. Concejales del Municipio de Popayán y Diputados de la Asamblea Departamental del Cauca.</li>
    <li>Vehículos pertenecientes a las Fuerzas Militares, Policia Nacional, Cuerpos Oficiales armados. (CTI-INPEC), cuya propiedad conste en la licencia de tránsito.</li>
    <li>Vehículos de emergencia (ambulancias, vehículos adscritos al Cuerpo de Bomberos, Equipos Logísticos para atención de desastres, rescates y siniestros), destinados al transporte del personal acreditado.</li>
    <li>Vehículos de atención médica humana personalizada, el cual debe estar identificado con los embremas institucionales.</li>
    <li>Vehículos dotados tecnológicamente para el mantenimiento de servicios públicos esenciales, como (energía, telefonía, acueducto y alcantarillado, recolección de basuras, gas).</li>
    <li>Vehículos destinados al control de tráfico y las grúas o carros de asistencia técnica debidamente identificados.</li>
    <li>Vehículos adaptados para el transporte de personal en condición de discapacidad, destinados al transporte del personal en condición de discapacidad o situación médica especial, siempre y cuando se encuentre ocupando el vehículo o realizando gestiones propias de salud del beneficiario.</li>
    <li>Vehículos de servicio especial de tranporte escolar, empresarial y turístico debidamente identificados.</li>
    <li>Vehículos pertenecientes al servicio hotelero turístico, cuya propiead se encuentra a nombre de la respectiva empresa u hotel turístico y conste en la licencia de tránsito, y/o a turistas registrados en hoteles turísticos, a quienes en el evento que sean requeridos por la autoridad de tránsito, deberán presentar la documentación del vehículo en regla, factura de hostpedaje y tiquetes de peajes de ingreso, además del pasaporte especial turístico vigente del hotel, expedido exclusivamente por la Secretaría de Tránsito y Transporte.</li>
    <li>Vehículos que transportan los alimentos perecederos, los cuales deben poseer las debidas autorizaciones vigentes si lo exige la ley, de igual forma, los vehículos utilizados por restaurantes para venta de alimentos a domicilio a quienes la Secretaría de Tránsito y Transporte autorizará hasta 3 vehículos como máximo; Vehículos de entidades bancarias, farmacias, siempre y cuando los vehículos están a nombre del establecimiento de comercio y/o se acredite por el representante legal que son destinados a facilitar la actividad laboral de sus trabajadores.</li>
    <li>Vehículos pertenecientes a los medios de comunicación que estén dotados de quipos que no permitan que sea reemplazado por otro vehículo con características especiales, los cuales deben estar debidamente identificados.</li>
    <li>Vehículos de seguridad, acreditados antes la Empresa autorizada para el transporte de valores debidamente identificados.</li>
    <li>Los vehículos de Carrozas Fúnebres, que se encuentren prestando el servicio.</li>
    <li>Vehículos de propiedad del I.C.B.F. destinados exclisivamente al traslado de menores infractores o en situación de riesgo.</li>
    <li>Vehículos destinados al transporte exclusivo de personas con medidas de protección emanadas por la UNP -Unidad Nacional de Protección-.</li>
    </ul>`,
  },
  name: 'Particulares',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const semester = new Date(date).getMonth() < 6 ? 0 : 1
      const pyp = [
        [
          '3-4', // lunes
          '5-6', // martes
          '7-8', // miércoles
          '9-0', // jueves
          '1-2', // viernes
        ],
        [
          '1-2', // lunes
          '3-4', // martes
          '5-6', // miércoles
          '7-8', // jueves
          '9-0', // viernes
        ],
      ]
      return pyp[semester][new Date(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
