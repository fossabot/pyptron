const { pyp } = require('./globalHelpers')

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
