const {
  moveArrayElementsToTheRight,
  getArrayElementAfterRotating,
} = require('./arrayHelpers')

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
      expect(moveArrayElementsToTheRight(arr, arrCase.offset)).toEqual(
        arrCase.result
      )
    })
  })
})

describe('Rotate by', () => {
  it('should return rotate array by month', () => {
    const array = ['3-4', '5-6', '7-8', '9-0', '1-2']
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
      const result = getArrayElementAfterRotating({
        date: monthCase.date,
        startDate,
        array,
        period: 'months',
      })
      expect(result).toBe(monthCase.result)
    })
  })
  it('should return rotate array by week', () => {
    const array = ['1-2', '3-4', '5-6', '7-8', '9-0']
    const startDate = '2018-01-08'
    const weekCases = [
      {
        date: '2018-01-08', // 0 semanas - Lunes
        result: '1-2',
      },
      {
        date: '2018-01-15', // 1 semamas - Lunes
        result: '9-0',
      },
      {
        date: '2018-02-08', // 4 semanas - Jueves
        result: '9-0',
      },
      {
        date: '2018-03-06', // 8 semanas - Martes
        result: '7-8',
      },
    ]
    weekCases.forEach(weekCase => {
      const result = getArrayElementAfterRotating({
        date: weekCase.date,
        startDate,
        array,
        period: 'weeks',
      })
      expect(result).toBe(weekCase.result)
    })
  })
  it('should return rotate array by week in reverse', () => {
    const array = ['1-2', '3-4', '5-6', '7-8', '9-0']
    const startDate = '2018-01-08'
    const weekCases = [
      {
        date: '2018-01-08', // 0 semanas - Lunes
        result: '1-2',
      },
      {
        date: '2018-01-15', // 1 semamas - Lunes
        result: '3-4',
      },
      {
        date: '2018-02-08', // 4 semanas - Jueves
        result: '5-6',
      },
      {
        date: '2018-03-06', // 8 semanas - Martes
        result: '9-0',
      },
    ]
    weekCases.forEach(weekCase => {
      const result = getArrayElementAfterRotating({
        date: weekCase.date,
        startDate,
        array,
        period: 'weeks',
        reverse: true,
      })
      expect(result).toBe(weekCase.result)
    })
  })
  it('should return rotate array by week with interval = 2', () => {
    const array = ['1-2', '3-4', '5-6', '7-8', '9-0']
    const startDate = '2018-01-08'
    const weekCases = [
      {
        date: '2018-01-08', // 0 semanas - Lunes
        result: '1-2',
      },
      {
        date: '2018-01-17', // 1 semamas - Jueves
        result: '5-6',
      },
      {
        date: '2018-02-08', // 4 semanas - Jueves
        result: '3-4',
      },
      {
        date: '2018-03-06', // 8 semanas - Martes
        result: '5-6',
      },
    ]
    weekCases.forEach(weekCase => {
      const result = getArrayElementAfterRotating({
        date: weekCase.date,
        startDate,
        array,
        period: 'weeks',
        interval: 2,
      })
      expect(result).toBe(weekCase.result)
    })
  })
  it('should return rotate array by year', () => {
    const array = ['1-2', '3-4', '5-6', '7-8', '9-0']
    const startDate = '2018-01-08'
    const weekCases = [
      {
        date: '2018-01-08', // 0 semanas - Lunes
        result: '1-2',
      },
      {
        date: '2019-01-09', // 1 año - Miércoles
        result: '7-8',
      },
      {
        date: '2020-02-07', // 2 años - Viernes
        result: '3-4',
      },
    ]
    weekCases.forEach(weekCase => {
      const result = getArrayElementAfterRotating({
        date: weekCase.date,
        startDate,
        array,
        period: 'years',
        reverse: true,
      })
      expect(result).toBe(weekCase.result)
    })
  })
})
