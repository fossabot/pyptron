const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Vehículos tipo motocicletas'],
    decrees: [
      {
        name: 'Decreto 288 de 2017',
        url: 'cdn:pdf',
      },
    ],
    days: ['Lunes a viernes'],
    hours: [
      {
        comment: '',
        hours: [['5:00', '22:00']],
        days: [],
      },
    ],
    scheme:
      'Restricción de circulación para Motocicletas, Motociclos, Ciclomotores, Mototriciclos, Tricimotos y Cuatrimotos, conforme al último dígito de la placa',
    observations:
      'En materia de circulación nocturna de motocicletas, ciclomotores, mototriciclos, tricimotos y cuatrimotos, no podrán circular entre las 10 de la noche y las 5:00 de la mañana del día siguiente, de domingo a sábado. Para los motocarros la restricción rige a partir de las 11:00 de la noche.',
    exceptions: `Las prohibiciones del Pico y Placa no son aplicables a los siguientes vehículos públicos que para el ejercicio de sus funciones, en vía pública o privadas abiertas al público utilicen motocicletas:<ul>
    <li>Miembros de la fuerza pública.</li>
    <li>Policía judicial.</li>
    <li>Agentes de tránsito y transporte.</li>
    <li>Miembros de la defensa civil, cruz roja, bomberos y gestión de riesgo.</li>
    <li>Personal adscrito al servicio público de salud y hospitalario.</li>
    <li>Propietarios de motocicletas cuyo cilindraje sea igual o superios a 598 centímetros cúbicos.</li>
    <li>Servidores públicos y trabajadores de empresas prestadoras de servicios públicos en ejercicio de sus funciones.</li>
    <ul></ul>`,
  },
  name: 'Motos',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: false,
    }
    const pypFunction = () => {
      if (new Date(date).getDate() === 30) {
        return '0-1-2-3-4-5-6-7-8-9'
      }
      const pyp = [
        '1-3', // lunes
        '2-4', // martes
        '5-7', // miércoles
        '6-8', // jueves
        '9-0', // viernes
      ]
      return pyp[new Date(date).getDay() - 1]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
