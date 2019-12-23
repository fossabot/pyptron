const {
  generateISOString,
  getNthDayOfMonth,
  datesDiff,
  rangeInclude,
} = require('./date-helpers')

describe('test for generateISOString', () => {
  it(`should append the time offset to the date`, () => {
    expect(generateISOString('2018-01-01')).toBe(
      '2018-01-01T00:00:00.000-05:00'
    )
    expect(generateISOString('2018-01-01T00:00:00.000-05:00')).toBe(
      '2018-01-01T00:00:00.000-05:00'
    )
  })
})

describe('test if a date is between a range', () => {
  it('returns true for a date between the given range', () => {
    expect(
      rangeInclude({
        date: '2019-12-01',
        startDate: '2019-12-01',
        endDate: '2019-12-30',
      })
    ).toBe(true)
    expect(
      rangeInclude({
        startDate: '2019-12-01',
        endDate: '2019-12-30',
        date: '2019-12-30',
      })
    ).toBe(true)
  })
  it('returns false for a date outside the range', () => {
    expect(
      rangeInclude({
        startDate: '2019-11-29',
        endDate: '2019-11-29',
        date: '2019-11-30',
      })
    ).toBe(false)
    expect(
      rangeInclude({
        date: '2019-11-30',
        startDate: '2019-12-01',
        endDate: '2019-12-01',
      })
    ).toBe(false)
    expect(
      rangeInclude({
        startDate: '2019-12-01',
        endDate: '2019-12-30',
        date: '2020-12-01',
      })
    ).toBe(false)
  })
})
describe('test for getting nth day of a given month', () => {
  const days = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  }
  it('should return the first sunday of a given month of a given year', () => {
    const firstSundays = [
      '01/07/2018',
      '02/04/2018',
      '03/04/2018',
      '04/01/2018',
      '05/06/2018',
      '06/03/2018',
      '07/01/2018',
      '08/05/2018',
      '09/02/2018',
      '10/07/2018',
      '11/04/2018',
      '12/02/2018',
    ]
    firstSundays.forEach(firstSunday => {
      const date = new Date(firstSunday)
      const year = date.getFullYear()
      const month = date.getMonth()
      const firstSundayDate = getNthDayOfMonth({
        year,
        month,
        dayOfWeek: days.sunday,
        index: 0,
      })
      expect(firstSundayDate.toISOString()).toBe(date.toISOString())
    })
  })

  it('should return the second friday of a given month of a given year', () => {
    const secondFridays = [
      '01/10/2020',
      '02/14/2020',
      '03/13/2020',
      '04/10/2020',
      '05/08/2020',
      '06/12/2020',
      '07/10/2020',
      '08/14/2020',
      '09/11/2020',
      '10/9/2020',
      '11/13/2020',
      '12/11/2020',
    ]
    secondFridays.forEach(secondFriday => {
      const date = new Date(secondFriday)
      const year = date.getFullYear()
      const month = date.getMonth()
      const secondFridayDate = getNthDayOfMonth({
        year,
        month,
        dayOfWeek: days.friday,
        index: 1,
      })
      expect(secondFridayDate.toISOString()).toBe(date.toISOString())
    })
  })
  it('should return the third saturday of a given month of a given year', () => {
    const thirdSaturdays = [
      '01/20/2018',
      '02/17/2018',
      '03/17/2018',
      '04/21/2018',
      '05/19/2018',
      '06/16/2018',
      '07/21/2018',
      '08/18/2018',
      '09/15/2018',
      '10/20/2018',
      '11/17/2018',
      '12/15/2018',
    ]
    thirdSaturdays.forEach(thirdSaturday => {
      const date = new Date(thirdSaturday)
      const year = date.getFullYear()
      const month = date.getMonth()
      const thirdSaturdayDate = getNthDayOfMonth({
        year,
        month,
        dayOfWeek: days.saturday,
        index: 2,
      })
      expect(thirdSaturdayDate.toISOString()).toBe(date.toISOString())
    })
  })
  it('should return the last friday of a given month of a given year', () => {
    const lastFridays = [
      '01/26/2018',
      '02/23/2018',
      '03/30/2018',
      '04/27/2018',
      '05/25/2018',
      '06/29/2018',
      '07/27/2018',
      '08/31/2018',
      '09/28/2018',
      '10/26/2018',
      '11/30/2018',
      '12/28/2018',
    ]
    lastFridays.forEach(lastFriday => {
      const date = new Date(lastFriday)
      const year = date.getFullYear()
      const month = date.getMonth()
      const lastFridayDate = getNthDayOfMonth({
        year,
        month,
        dayOfWeek: days.friday,
        index: -1,
      })
      expect(lastFridayDate.toISOString()).toBe(date.toISOString())
    })
  })
  it('should return the last sunday of a given month of a given year', () => {
    const lastSundays = [
      '01/28/2018',
      '02/25/2018',
      '03/25/2018',
      '04/29/2018',
      '05/27/2018',
      '06/24/2018',
      '07/29/2018',
      '08/26/2018',
      '09/30/2018',
      '10/28/2018',
      '11/25/2018',
      '12/30/2018',
    ]
    lastSundays.forEach(lastSunday => {
      const date = new Date(lastSunday)
      const year = date.getFullYear()
      const month = date.getMonth()
      const lastFridayDate = getNthDayOfMonth({
        year,
        month,
        dayOfWeek: days.sunday,
        index: -1,
      })
      expect(lastFridayDate.toISOString()).toBe(date.toISOString())
    })
  })
  it('should return the second last friday of a given month of a given year', () => {
    const secondLastFridays = [
      '01/19/2020',
      '02/16/2020',
      '03/22/2020',
      '04/19/2020',
      '05/24/2020',
      '06/21/2020',
      '07/19/2020',
      '08/23/2020',
      '09/20/2020',
      '10/18/2020',
      '11/22/2020',
      '12/20/2020',
    ]
    secondLastFridays.forEach(secondLastFriday => {
      const date = new Date(secondLastFriday)
      const year = date.getFullYear()
      const month = date.getMonth()
      const lastFridayDate = getNthDayOfMonth({
        year,
        month,
        dayOfWeek: days.sunday,
        index: -2,
      })
      expect(lastFridayDate.toISOString()).toBe(date.toISOString())
    })
  })
})

describe('Get months difference between two dates according to an interval', () => {
  it('should return the number of months between two dates when no interval given', () => {
    expect(
      datesDiff({
        startDate: '2017-12-02',
        endDate: '2018-02-01',
        period: 'months',
      })
    ).toBe(1)
    expect(
      datesDiff({
        startDate: '2019-01-01',
        endDate: '2018-01-01',
        period: 'months',
      })
    ).toBe(-12)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-01-01',
        period: 'months',
      })
    ).toBe(0)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-01-31',
        period: 'months',
      })
    ).toBe(0)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-02-01',
        period: 'months',
      })
    ).toBe(1)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2019-01-01',
        period: 'months',
      })
    ).toBe(12)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2019-02-01',
        period: 'months',
      })
    ).toBe(13)
  })
  it('should return the number of quarters between two dates when interval is 3', () => {
    expect(
      datesDiff({
        startDate: '2018-07-01',
        endDate: '2018-01-01',
        period: 'months',
        interval: 3,
      })
    ).toBe(-2)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-01-01',
        period: 'months',
        interval: 3,
      })
    ).toBe(0)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-02-01',
        period: 'months',
        interval: 3,
      })
    ).toBe(0)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-03-01',
        period: 'months',
        interval: 3,
      })
    ).toBe(0)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-04-01',
        period: 'months',
        interval: 3,
      })
    ).toBe(1)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-07-01',
        period: 'months',
        interval: 3,
      })
    ).toBe(2)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-12-01',
        period: 'months',
        interval: 3,
      })
    ).toBe(3)
  })
  it('should return the number of semesters between two dates when interval is 6', () => {
    expect(
      datesDiff({
        startDate: '2019-01-01',
        endDate: '2018-01-01',
        period: 'months',
        interval: 6,
      })
    ).toBe(-2)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-01-01',
        period: 'months',
        interval: 6,
      })
    ).toBe(0)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-06-01',
        period: 'months',
        interval: 6,
      })
    ).toBe(0)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-07-01',
        period: 'months',
        interval: 6,
      })
    ).toBe(1)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-12-01',
        period: 'months',
        interval: 6,
      })
    ).toBe(1)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2019-01-01',
        period: 'months',
        interval: 6,
      })
    ).toBe(2)
  })
})

describe('Get year difference between two dates', () => {
  it('should return the number of years between two dates', () => {
    expect(
      datesDiff({
        startDate: '2019-01-01',
        endDate: '2018-01-01',
        period: 'years',
      })
    ).toBe(-1)
    expect(
      datesDiff({
        startDate: '2019-01-01',
        endDate: '2017-01-01',
        period: 'years',
      })
    ).toBe(-2)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-01-01',
        period: 'years',
      })
    ).toBe(0)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-01-31',
        period: 'years',
      })
    ).toBe(0)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2018-02-01',
        period: 'years',
      })
    ).toBe(0)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2019-01-01',
        period: 'years',
      })
    ).toBe(1)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2019-02-01',
        period: 'years',
      })
    ).toBe(1)
    expect(
      datesDiff({
        startDate: '2018-01-01',
        endDate: '2020-01-01',
        period: 'years',
      })
    ).toBe(2)
  })
})
