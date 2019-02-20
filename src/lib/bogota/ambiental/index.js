const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos de Transporte Público Colectivo de pasajeros',
      'Vehículos de Transporte de Carga',
    ],
    decrees: [
      {
        name: 'Decreto 325 del 16 de agosto de 2006',
        url:
          'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=21050',
      },
      {
        name: 'Decreto 174 de 2006',
        url:
          'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=56330',
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
      'Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)',
    ],
    hours: [
      {
        comment: 'Transporte Público Colectivo',
        hours: [['6:00', '10:00']],
        days: [],
      },
      {
        comment: 'Transporte de Carga',
        hours: [['9:00', '10:00']],
        days: [],
      },
    ],
    scheme:
      'Para todos los vehículos de transporte de carga (incluye servicio público y particular).',
    observations: '',
    exceptions: `<ul>
      <li>
        <strong>Vehículos de Transporte Público Colectivo de Pasajeros</strong>:
        <ul>
          <li>No será aplicable a los vehículos vinculados a las empresas de transporte público colectiro que se acojan al "Programa de Autorregulación Ambiental".
          </li>
        </ul>
      </li>
      <li>
        <strong>Vehículos de Transporte de Carga</strong>:
        <ul>
          <li>No será aplicable a los vehículos de transporte de carga de cinco toneladas o menos de peso bruto vehícular.</li>
          <li>No será aplicable a los vehículos particulares de carga, así como a los vinculados a las empresas de transporte de carga que se acojan al "Programa de Autorregurlación Ambiental.</li>
        </ul>
      </li>
    </ul>`,
  },
  name: 'Ambiental',
  pyp(date) {
    const options = {
      excludedDays: [0],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2018-01-01'
      const startNums = '9'
      const pypNums = ['0', '1', '2', '3', '4', '5', '6', '7', '9', '8']
      return pypFuncs.rotateByDay(date, startDate, startNums, pypNums)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
