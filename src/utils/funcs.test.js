const {
  arrRotate,
  getNthDayOfMonth,
  monthsDiff,
  pyp,
  rotateByMonth,
  rotateByWeek,
} = require('./funcs')

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
      const firstSundayDate = getNthDayOfMonth(year, month, days.sunday, 0)
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
      const secondFridayDate = getNthDayOfMonth(year, month, days.friday, 1)
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
      const thirdSaturdayDate = getNthDayOfMonth(year, month, days.saturday, 2)
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
      const lastFridayDate = getNthDayOfMonth(year, month, days.friday, -1)
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
      const lastFridayDate = getNthDayOfMonth(year, month, days.sunday, -1)
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
      const lastFridayDate = getNthDayOfMonth(year, month, days.sunday, -2)
      expect(lastFridayDate.toISOString()).toBe(date.toISOString())
    })
  })
})

describe('test for holidays', () => {
  const times = ['T00:00:00.0000-05:00', 'T23:59:59.999-05:00']
  const dateCases = [
    ['2019-01-01', 'NA'],
    ['2019-01-02', true],
    ['2018-03-18', true],
    ['2018-03-19', 'NA'],
    ['2018-07-20', 'NA'],
    ['2018-08-07', 'NA'],
    ['2018-12-25', 'NA'],
    ['2018-12-25', 'NA'],
  ]
  dateCases.forEach(dateCase => {
    it(`should return ${dateCase[1]} for ${dateCase[0]}`, () => {
      times.forEach(time => {
        const pypDate = dateCase[0] + time
        expect(pyp(pypDate, [], true, () => true)).toBe(dateCase[1])
      })
    })
  })
})

describe('test for excluded days', () => {
  const times = ['T00:00:00.0000-05:00', 'T23:59:59.999-05:00']
  const dateCases = [
    ['2018-07-30', true], // lunes
    ['2018-07-31', true], // martes
    ['2018-08-01', true], // miércoles
    ['2018-08-02', true], // jueves
    ['2018-08-03', true], // viernes
    ['2018-08-04', 'NA'], // sábado
    ['2018-08-05', 'NA'], // domingo
  ]
  dateCases.forEach(dateCase => {
    it(`should return 'NA' for ${dateCase[0]}`, () => {
      times.forEach(time => {
        const pypDate = dateCase[0] + time
        expect(pyp(pypDate, [0, 6], true, () => true)).toBe(dateCase[1])
      })
    })
  })
})

describe("test for 'out of range' error", () => {
  it('shoul return an error for a date out of range', () => {
    const d = new Date()
    const year = d.getFullYear()
    const month = d.getMonth()
    const day = d.getDate()
    const aYearFromNow = new Date(year + 1, month, day + 1)
    expect(() => pyp(aYearFromNow, [], false, () => true)).toThrowError(
      'Date out of range'
    )
    expect(() => pyp('2017-12-31', [], false, () => true)).toThrowError(
      'Date out of range'
    )
  })
})

describe('Get months difference between two dates according to an interval', () => {
  it('should return the number of months between two dates when no interval given', () => {
    expect(monthsDiff('2019-01-01', '2018-01-01')).toBe(-12)
    expect(monthsDiff('2018-01-01', '2018-01-01')).toBe(0)
    expect(monthsDiff('2018-01-01', '2018-01-31')).toBe(0)
    expect(monthsDiff('2018-01-01', '2018-02-01')).toBe(1)
    expect(monthsDiff('2018-01-01', '2019-01-01')).toBe(12)
    expect(monthsDiff('2018-01-01', '2019-02-01')).toBe(13)
  })
  it('should return the number of quarters between two dates when interval is 3', () => {
    expect(monthsDiff('2018-07-01', '2018-01-01', 3)).toBe(-2)
    expect(monthsDiff('2018-01-01', '2018-01-01', 3)).toBe(0)
    expect(monthsDiff('2018-01-01', '2018-02-01', 3)).toBe(0)
    expect(monthsDiff('2018-01-01', '2018-03-01', 3)).toBe(0)
    expect(monthsDiff('2018-01-01', '2018-04-01', 3)).toBe(1)
    expect(monthsDiff('2018-01-01', '2018-07-01', 3)).toBe(2)
    expect(monthsDiff('2018-01-01', '2018-12-01', 3)).toBe(3)
  })
  it('should return the number of semesters between two dates when interval is 6', () => {
    expect(monthsDiff('2019-01-01', '2018-01-01', 6)).toBe(-2)
    expect(monthsDiff('2018-01-01', '2018-01-01', 6)).toBe(0)
    expect(monthsDiff('2018-01-01', '2018-06-01', 6)).toBe(0)
    expect(monthsDiff('2018-01-01', '2018-07-01', 6)).toBe(1)
    expect(monthsDiff('2018-01-01', '2018-12-01', 6)).toBe(1)
    expect(monthsDiff('2018-01-01', '2019-01-01', 6)).toBe(2)
  })
})

describe('Rotate an array', () => {
  it('should rotate an array according to the offset', () => {
    const arr = ['a', 'b', 'c', 'd', 'e']
    const arrCases = [
      { offset: 0, result: arr },
      { offset: 1, result: ['e', 'a', 'b', 'c', 'd'] },
      { offset: -1, result: ['b', 'c', 'd', 'e', 'a'] },
      { offset: 3, result: ['c', 'd', 'e', 'a', 'b'] },
      { offset: -3, result: ['d', 'e', 'a', 'b', 'c'] },
      { offset: 12, result: ['d', 'e', 'a', 'b', 'c'] },
      { offset: -12, result: ['c', 'd', 'e', 'a', 'b'] },
      { offset: arr.length, result: arr },
      { offset: -arr.length, result: arr },
      { offset: arr.length * 2, result: arr },
      { offset: -arr.length * 2, result: arr },
    ]
    arrCases.forEach(arrCase => {
      expect(arrRotate(arr, arrCase.offset)).toEqual(arrCase.result)
    })
  })
})

describe('Rotate by', () => {
  it('should return rotate array by month', () => {
    const startNums = '3-4'
    const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
    const startDate = '2015-06-01'
    const monthCases = [
      {
        date: '2015-06-01',
        result: '3-4',
      },
      {
        date: '2015-10-01',
        result: '1-2',
      },
      {
        date: '2018-02-08',
        result: '5-6',
      },
      {
        date: '2018-03-06',
        result: '9-0',
      },
    ]
    monthCases.forEach(monthCase => {
      const result = rotateByMonth(
        monthCase.date,
        startDate,
        startNums,
        pypNums
      )
      expect(result).toBe(monthCase.result)
    })
  })
  it('should return rotate array by week in reverse', () => {
    const startNums = '1-2'
    const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
    const startDate = '2018-01-08'
    const weekCases = [
      {
        date: '2018-01-08',
        result: '1-2',
      },
      {
        date: '2018-01-15',
        result: '3-4',
      },
      {
        date: '2018-02-08',
        result: '5-6',
      },
      {
        date: '2018-03-06',
        result: '9-0',
      },
    ]
    weekCases.forEach(weekCase => {
      const result = rotateByWeek(
        weekCase.date,
        startDate,
        startNums,
        pypNums,
        true
      )
      expect(result).toBe(weekCase.result)
    })
  })
})
