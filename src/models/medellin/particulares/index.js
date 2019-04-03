const Category = require('../../../classes/category')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { licensePlateScheme } = require('../../../helpers/global-helpers')
const {
  newISODate,
  formatDate,
  datesDiff,
} = require('../../../helpers/date-helpers')
const {
  normalizeArrayIndex,
  moveArrayElementsToTheRight,
} = require('../../../helpers/array-helpers')

module.exports = new Category({
  decrees: [
    {
      name: 'Decreto 0116 de 2018',
      url:
        'https://www.medellin.gov.co/movilidad/jdownloads/Normas/Normatividad/Decretos%20Municipales/2018/decreto_0116_de_2018.pdf',
    },
  ],
  exceptions,
  hours: [
    {
      comment: 'Modelos posteriores a 1996',
      hours: [['7:00', '8:30'], ['17:30', '19:00']],
      days: [],
    },
    {
      comment: 'Modelos anteriores o iguales a 1996',
      hours: [['5:00', '8:30'], ['16:30', '21:00']],
      days: [],
    },
  ],
  maps: [{ name: 'Mapa pico y placa Medellín 2019', url: 'cdn:jpg' }],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos particulares y oficiales'],
  excludedDays: [0],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2018-02-05'
    const dateObject = newISODate(date)
    const formatedDate = formatDate(dateObject)
    const dow = dateObject.getDay()
    if (formatedDate >= '2019-02-23' && formatedDate <= '2019-04-06') {
      if (dow === 6) {
        const weeksLapse = datesDiff({
          startDate: '2019-02-23',
          endDate: date,
          period: 'weeks',
        })
        const weekendsNums = [[1, 3, 5, 7, 9], [0, 2, 4, 6, 8]]
        const index = normalizeArrayIndex(weeksLapse, weekendsNums.length)
        return weekendsNums[index]
      }
      const pypNums = [
        [6, 7, 8, 9, 0, 1], // lunes
        [0, 1, 2, 3, 4, 5], // martes
        [4, 5, 6, 7, 8, 9], // miércoles
        [8, 9, 0, 1, 2, 3], // jueves
        [2, 3, 4, 5, 6, 7], // viernes
      ]
      return pypNums[dow - 1]
    }
    const pypNums = [
      [4, 5, 6, 7], // lunes
      [8, 9, 0, 1], // martes
      [2, 3, 4, 5], // miércoles
      [6, 7, 8, 9], // jueves
      [0, 1, 2, 3], // viernes
    ]
    const lapse = datesDiff({
      startDate,
      endDate: date,
      interval: 6,
      period: 'months',
    })
    const newPypNums = moveArrayElementsToTheRight(pypNums, lapse)
    const index = dow - 1
    return index in newPypNums ? newPypNums[index] : []
  },
})
