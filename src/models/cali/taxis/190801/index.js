const PypData = require('../../../../classes/pyp-data')
const exceptions = require('../190407/exceptions.md')
const observations = require('../190407/observations.md')
const { datesDiff } = require('../../../../helpers/date-helpers')
const { normalizeArrayIndex } = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-08-01',
  exceptions,
  hours: [{ comment: '', hours: [['06:00', '05:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis.',
  ],
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2019-08-01'
    const daysDiff = datesDiff({
      startDate,
      endDate: date,
      period: 'days',
      skipHolidays: this.skipHolidays,
      daysOfWeekToSkip: this.excludeDays,
    })
    const pypNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const index = normalizeArrayIndex(daysDiff, pypNums.length)
    return [pypNums[index]]
  },
})
