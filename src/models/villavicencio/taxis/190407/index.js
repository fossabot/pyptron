const PypData = require('../../../../classes/pyp-data')
const { licensePlateScheme } = require('../../../../helpers/global-helpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { newISODate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  startDate: '2019-04-07',
  decrees: [
    { name: 'Decreto 222 del 25 de julio de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 245 del 26 de julio de 2017', url: 'cdn:pdf' },
    { name: 'Decreto 010 del 24 de enero de 2017', url: 'cdn:pdf' },
    { name: 'Decreto 131 del 26 de enero de 2016', url: 'cdn:pdf' },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['6:00', '24:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
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
