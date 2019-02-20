const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: ['Vehículos de Transporte Público Colectivo (TPC)'],
    decrees: [
      {
        name: 'Decreto 444 de 2014',
        url:
          'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=59702',
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
      'Lunes a sábado (No se aplicará en los días domingos y festivos establecidos por la Ley)',
    ],
    hours: [
      {
        comment: 'Todo el día',
        hours: [[]],
        days: [],
      },
    ],
    scheme:
      'Cíclico de acuerdo con el último número de la placa del vehículo (2 dígitos por día según calendario establecido)',
    observations:
      'Los vehículos de servicio público de transporte colectivo de pasajeros con restricción, podrán circular con no más de un (1) acompañante, únicamente para atender labores de mantenimiento, alistamiento, reparación o revisión técnico mecánica, portando en un lugar visible aviso que exprese claramente que se encuentran fuera de servicio.',
  },
  name: 'Transporte Público Colectivo',
  pyp(date) {
    const options = {
      excludedDays: [0],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2018-01-01'
      const startNums = '5-6'
      const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
      return pypFuncs.rotateByWeek(date, startDate, startNums, pypNums, true)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
