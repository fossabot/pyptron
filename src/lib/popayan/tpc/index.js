const pypFuncs = require('../../../utils/funcs')
const { daysDiff } = require('../../../utils/dateHelpers')

module.exports = {
  info: {
    vehicleClasses: [
      'Transporte Público de servicio de carga con capacidad menor a una y media toneladas',
    ],
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
  },
  name: 'Transporte Público de Carga',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2018-01-04'
      const specialDates = ['2018-01-05', '2018-04-12', '2018-04-13']
      const daysLapse = daysDiff(startDate, date, [0, 6], true, specialDates)
      return String(daysLapse % 10)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
