const Category = require('../../../classes/category')
const { licensePlateScheme } = require('../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = new Category({
  ...Category.getCategoryMetainfo('carga'),
  decrees: [
    {
      name: 'Decreto 060 de 2019',
      url:
        'https://es.scribd.com/document/400064441/Decreto-060-de-2019#fullscreen  info,from_embed',
    },
    {
      name: 'Decreto 325 del 16 de agosto de 2006',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=21050',
    },
    {
      name: 'Decreto 174 de 2006',
      url: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=56330',
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
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '10:00']], days: [] }],
  maps: [
    {
      name: 'Pico y placa ambiental carga dos toneladas nuevo',
      url: 'cdn:jpg',
    },
  ],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos de Transporte de Carga de más de dos toneladas'],
  excludedDays: [],
  skipHolidays: false,
  pypFunction() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // const startDate = '2018-01-01'
    // const pypNums = ['9', '8', '0', '1', '2', '3', '4', '5', '6', '7']
    // return getArrayElementAfterRotating({
    //   date,
    //   startDate,
    //   array: pypNums,
    //   period: 'days',
    // })
  },
})
