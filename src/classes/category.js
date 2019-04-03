const { getHoliday } = require('pascua')
const { datesDiff, newISODate } = require('../helpers/date-helpers')

module.exports = class Category {
  constructor(options) {
    this.decrees = options.decrees
    this.exceptions = options.exceptions
    this.excludedDays = options.excludedDays
    this.hours = options.hours
    this.maps = options.maps
    this.observations = options.observations
    this.pyp = this.pyp.bind(this)
    this.pypFunction = options.pypFunction
    this.scheme = options.scheme
    this.skipHolidays = options.skipHolidays
    this.vehicleClasses = options.vehicleClasses
    this.zones = options.zones
  }

  pyp(date) {
    const dateObject = newISODate(date)
    const startDate = '2018-01-01'
    if (
      datesDiff({
        startDate,
        endDate: dateObject,
        period: 'days',
      }) <= 0
    ) {
      throw new Error('Date out of range')
    }

    if (
      datesDiff({
        startDate: new Date(),
        endDate: dateObject,
        period: 'months',
      }) >= 12
    ) {
      throw new Error('Date out of range')
    }
    if (
      this.excludedDays.includes(dateObject.getDay()) ||
      (this.skipHolidays && getHoliday(dateObject))
    ) {
      return []
    }

    return this.pypFunction(dateObject)
  }
}
