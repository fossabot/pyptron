const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Restricción de circulación de motocarros, según el color del mismo',
    ],
    decrees: [
      {
        name: 'Decreto 288 de julio de 2017',
        url: pypFuncs.buildAssetPath('soledad', 'decreto-288-de-2017.pdf'),
      },
    ],
    days: ['Todos los días de la semana'],
    hours: [
      {
        comment: 'Todo el día',
        hours: [[]],
        days: [],
      },
    ],
    scheme:
      'En materia de circulación nocturna de motocicletas, ciclomotores, mototriciclos, tricimotos y cuatrimotos, no podrán circular entre las 10 de la noche y las 5:00 de la mañana del día siguiente, de domingo a sábado. Para los motocarros la restricción rige a partir de las 11:00 de la noche.',
    observations:
      'En consecuencia, con la medida de ‘pico y color’, se establecen medidas los días 31 de los meses de enero, marzo, julio, agosto, octubre y diciembre la prohibición de circulación.',
  },
  name: 'Motocarros',
  pyp(date) {
    const options = {
      excludedDays: [],
      skipHolidays: false,
    }
    const pypFunction = () => {
      const pyp = ['0-2-4-6-8- naranja', '1-3-5-7-9- azul']
      switch (pypFuncs.formatDate(date, 'MMDD')) {
        case '0131':
          return '0-2-4-6-8- naranja'
        case '0331':
          return '1-3-5-7-9- azul'
        case '0731':
          return '0-2-4-6-8- naranja'
        case '0831':
          return '1-3-5-7-9- azul'
        case '1031':
          return '0-2-4-6-8- naranja'
        case '1231':
          return '1-3-5-7-9- azul'
        default:
          return pyp[pypFuncs.getDate(date) % 2]
      }
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
