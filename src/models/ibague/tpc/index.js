const Category = require('../../../classes/category')
const { licensePlateScheme } = require('../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { datesDiff } = require('../../../helpers/date-helpers')

module.exports = new Category({
  decrees: [
    {
      name: 'Decreto 0387 del 11 de abril de 2016',
      url:
        'http://www.ibague.gov.co/portal/admin/archivos/normatividad/2016/13967-DEC-20160415.pdf',
    },
  ],
  exceptions,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Transporte público colectivo municipal de pasajeros'],
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2016-04-10'
    const pyp = [
      [1, 2], // lunes
      [0, 3], // martes
      [4, 9], // miércoles
      [5, 6], // jueves
      [7, 8], // viernes
    ]
    const daysLapse =
      datesDiff({ startDate, endDate: date, period: 'days' }) - 1
    return pyp[daysLapse % pyp.length]
  },
})
