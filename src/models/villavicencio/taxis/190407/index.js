const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '24:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos automotores de servicio público de transporte terrestre individual de pasajeros en vehículos tipo taxi',
  ],
  excludedDays: [0, 6],
  skipHolidays: false,
  pypFunction(date) {
    const dateObject = newISODate(date)
    const datesDate = dateObject.getDate()
    if (datesDate === 31) {
      return []
    }
    return [datesDate % 10]
  },
})
