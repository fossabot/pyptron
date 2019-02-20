const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos de transporte público individual de pasajeros - Taxis',
    ],
    decrees: [
      {
        name: 'Decreto 660 del 27 de agosto de 2001',
        url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4643',
      },
      {
        name: 'Decreto 058 del 10 de marzo de 2003',
        url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=7182',
      },
      {
        name: 'Decreto 051 del 20 de febrero de 2004',
        url:
          'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=12124',
      },
      {
        name: 'Calendario pico y placa primer semestre 2018 unificado',
        url: 'cdn:pdf',
      },
      {
        name: 'Calendario pico y placa segundo semestre 2018 unificado',
        url: 'cdn:pdf',
      },
    ],
    days: [
      'Lunes a sábado (No se aplicará en los días festivos establecidos por la Ley)',
    ],
    hours: [
      {
        comment: '',
        hours: [['5:30', '21:00']],
        days: [],
      },
    ],
    scheme:
      'Cíclico de acuerdo con el último número de la placa del vehículo (2 dígitos por día según calendario establecido)',
    exceptions: `<ul>
    <li>Vehículos vinculados al transporte masivo de pasajeros bien sean articulados o alimentadores.</li>
    <li>Vehículos de tranporte público colectivo intermunicipal de pasajeros cuyo destino u origen sea el Terminal de Transporte de Bogotá.</li>
    <li>Vehículos de servicios especiales de transporte de asalariados y escolares debidamente autorizados.</li>
    <li>Vehículos de carga.</li>
    <li>Vehículos de servicios especiales de turismo, salvo aquellos a los cuales alude el artículo primero del presente Decreto.</li>
  </ul>`,
  },
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [0],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2018-01-01'
      const startNums = '7-8'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return pypFuncs.rotateByWeek(date, startDate, startNums, pypNums, true)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
