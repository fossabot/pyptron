const { licensePlateScheme } = require('../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../helpers/dateHelpers')
const { datesDiff } = require('../../../helpers/dateHelpers')
const { normalizeArrayIndex } = require('../../../helpers/arrayHelpers')

module.exports = {
  days: ['Días hábiles de la semana - lunes a viernes.'],
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
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos particulares y oficiales'],
  excludedDays: [0],
  skipHolidays: true,
  pypFunction(date) {
    // const startDate = '2018-02-05'
    const dow = newISODate(date).getDay()
    if (dow === 6) {
      const weeksLapse = datesDiff({
        startDate: '2019-02-23',
        endDate: date,
        period: 'weeks',
      })
      const weekendsNums = ['1-3-5-7-9', '0-2-4-6-8']
      const index = normalizeArrayIndex(weeksLapse, weekendsNums.length)
      return weekendsNums[index]
    }
    const pypNums = [
      '6-7-8-9-0-1', // '4-5-6-7', // lunes
      '0-1-2-3-4-5', // '8-9-0-1', // martes
      '4-5-6-7-8-9', // '2-3-4-5', // miércoles
      '8-9-0-1-2-3', // '6-7-8-9', // jueves
      '2-3-4-5-6-7', // '0-1-2-3', // viernes
    ]
    return pypNums[dow - 1]
    // const lapse = pypFuncs.monthsDiff(startDate, date, 6)
    // const newPypNums = pypFuncs.moveArrayElementsToTheRight(pypNums, lapse)
    // return newPypNums[newISODate(date).getDay() - 1]
  },
}
