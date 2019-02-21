const { arrRotate, pyp, rotateByMonth, rotateByWeek } = require('./funcs')

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
        const options = {
          excludedDays: [],
          skipHolidays: true,
        }
        expect(pyp(pypDate, () => true, options)).toBe(dateCase[1])
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
        const options = {
          excludedDays: [0, 6],
          skipHolidays: true,
        }
        expect(pyp(pypDate, () => true, options)).toBe(dateCase[1])
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
    const options = {
      excludedDays: [],
      skipHolidays: false,
    }
    expect(() => pyp(aYearFromNow, () => true, options)).toThrowError(
      'Date out of range'
    )
    expect(() => pyp('2017-12-31', () => true, options)).toThrowError(
      'Date out of range'
    )
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
