const { readdir } = require('fs')
const { pypWrapper, generateMap } = require('./pypHelpers')
const cities = require('../models')

const dir = './src/models'
let totalCities = 0

beforeAll(done => {
  readdir(dir, (err, files) => {
    totalCities = files.length - 1 // -1 para quitar index.js
    done()
  })
})

describe('Generate pyp object maps of global info with the slug and the key', () => {
  it('should return a categories map for a given city', () => {
    const categoriesMap = generateMap(cities.bogota.categories)
    const categories = Object.keys(categoriesMap)
    expect(typeof categoriesMap).toBe('object')
    expect(categories.length).toBeGreaterThan(0)
    categories.forEach(category => {
      expect(Object.keys(categoriesMap[category]).length).toBe(3)
      expect(typeof categoriesMap[category].name).toBe('string')
      expect(categoriesMap[category].name.length).toBeGreaterThan(0)
      expect(typeof categoriesMap[category].key).toBe('string')
      expect(categoriesMap[category].key.length).toBeGreaterThan(0)
      expect(typeof categoriesMap[category].emoji).toBe('string')
      expect(categoriesMap[category].emoji.length).toBeGreaterThan(0)
    })
  })
  it('should return map with all cities containing name, key, categories', () => {
    const citiesMap = generateMap(cities)
    const citiesNames = Object.keys(citiesMap)
    expect(citiesNames.length).toBe(totalCities)
    citiesNames.forEach(city => {
      expect(typeof citiesMap[city]).toBe('object')
      expect(Object.keys(citiesMap[city]).length).toBe(3)
      expect(typeof citiesMap[city].name).toBe('string')
      expect(citiesMap[city].name.length).toBeGreaterThan(0)
      expect(typeof citiesMap[city].key).toBe('string')
      expect(citiesMap[city].key.length).toBeGreaterThan(0)
      expect(typeof citiesMap[city].categories).toBe('object')
    })
  })
})

describe('test for holidays', () => {
  const times = ['T00:00:00.0000-05:00', 'T23:59:59.999-05:00']
  const dateCases = [
    ['2019-01-01', []],
    ['2019-01-02', true],
    ['2018-03-18', true],
    ['2018-03-19', []],
    ['2018-07-20', []],
    ['2018-08-07', []],
    ['2018-12-25', []],
    ['2018-12-25', []],
  ]
  dateCases.forEach(dateCase => {
    it(`should return ${dateCase[1]} for ${dateCase[0]}`, () => {
      times.forEach(time => {
        const pypDate = dateCase[0] + time
        const options = {
          excludedDays: [],
          skipHolidays: true,
        }
        expect(pypWrapper(pypDate, () => true, options)).toEqual(dateCase[1])
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
    ['2018-08-04', []], // sábado
    ['2018-08-05', []], // domingo
  ]
  dateCases.forEach(dateCase => {
    it(`should return [] for ${dateCase[0]}`, () => {
      times.forEach(time => {
        const pypDate = dateCase[0] + time
        const options = {
          excludedDays: [0, 6],
          skipHolidays: true,
        }
        expect(pypWrapper(pypDate, () => true, options)).toEqual(dateCase[1])
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
    expect(() => pypWrapper(aYearFromNow, () => true, options)).toThrowError(
      'Date out of range'
    )
    expect(() => pypWrapper('2017-12-31', () => true, options)).toThrowError(
      'Date out of range'
    )
  })
})
