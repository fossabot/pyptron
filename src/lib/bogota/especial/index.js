const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos de servicio público de transporte terrestre automotor especial, clase automóvil, camioneta o campero, con capacidad para cuatro (4) pasajeros (sin incluir conductor)',
    ],
    decrees: [
      {
        name: 'Decreto 248 del 14 de junio de 2016',
        url:
          'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=66359',
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
      'Lunes a sábado (No se aplicará en los días festivos establecidos por la Ley).',
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
    observations: '',
  },
  name: 'Servicio de Transporte Especial',
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
