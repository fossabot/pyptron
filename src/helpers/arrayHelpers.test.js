const {
  moveArrayElementsToTheRight,
  rotateByMonth,
  rotateByWeek,
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
      const result = rotateByMonth({
        date: monthCase.date,
        startDate,
        array,
      })
      expect(result).toBe(monthCase.result)
    })
  })
  it('should return rotate array by week in reverse', () => {
    const array = ['1-2', '3-4', '5-6', '7-8', '9-0']
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
      const result = rotateByWeek({
        date: weekCase.date,
        startDate,
        array,
        reverse: true,
      })
      expect(result).toBe(weekCase.result)
    })
  })
})
