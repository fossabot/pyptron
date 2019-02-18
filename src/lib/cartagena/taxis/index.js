const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos de transporte público individual de pasajeros - Taxis',
    ],
    decrees: [
      {
        name: 'Decreto 1483 de diciembre de 2018',
        url: '',
      },
      {
        name: 'Decreto 1659 de diciembre de 2017',
        url: pypFuncs.buildAssetPath(
          'cartagena',
          'decreto-1659-de-diciembre-de-2017.pdf'
        ),
      },
    ],
    days: [
      'Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)',
    ],
    hours: [
      {
        comment: 'Todo el día',
        hours: [[]],
        days: [],
      },
    ],
    scheme: 'Último dígito del número de la placa',
    observations:
      'El pico y placa operará de acuerdo con el último dígito de la fecha del calendario.',
  },
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const dateObject = new Date(date)
      const datesDate = dateObject.getDate()
      if (datesDate === 31) {
        return 'NA'
      }
      if (dateObject.getDay() === 5) {
        const year = dateObject.getFullYear()
        const month = dateObject.getMonth()
        const secondFriday = pypFuncs.getNthDayOfMonth(year, month, 5, 1)
        if (
          pypFuncs.formatDate(dateObject, 'YYMMDD') ===
          pypFuncs.formatDate(secondFriday, 'YYMMDD')
        ) {
          return 'NA'
        }
        const lastFriday = pypFuncs.getNthDayOfMonth(year, month, 5, -1)
        if (
          pypFuncs.formatDate(dateObject, 'YYMMDD') ===
          pypFuncs.formatDate(lastFriday, 'YYMMDD')
        ) {
          return 'NA'
        }
      }
      return (datesDate % 10).toString(10)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
