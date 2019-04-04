const { getHoliday } = require('pascua')
const { datesDiff, newISODate } = require('../helpers/date-helpers')

module.exports = class Category {
  constructor(options) {
    this.decrees = options.decrees
    this.exceptions = options.exceptions
    this.excludedDays = options.excludedDays
    this.getPypNums = this.getPypNums.bind(this)
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

  getPypNums(options) {
    const { date, days } = options
    const maxDays = 30
    const currentDate = new Date(date)
    const totalDays = days > maxDays ? maxDays : days

    const pypNumbers = []

    for (let i = 0; i < totalDays; i += 1) {
      pypNumbers.push({
        date: currentDate.toISOString(),
        numbers: this.pyp(currentDate),
      })
      currentDate.setDate(currentDate.getDate() + 1)
    }
    return pypNumbers
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
