const { readdir } = require('fs')
const {
  getCategories,
  getCities,
  getPyp,
  getPypData,
  getPypInfo,
} = require('./pyptron')

const dir = './src/models'
let totalCities = 0

beforeAll(done => {
  readdir(dir, (err, files) => {
    totalCities = files.length
    done()
  })
})

describe('Generate pyp object maps of global info with the slug and the key', () => {
  it('should return map with all categories for a given city', () => {
    const categoriesMap = getCategories('bogota')
    const categories = Object.keys(categoriesMap)
    expect(typeof categoriesMap).toBe('object')
    expect(categories.length).toBeGreaterThan(0)
    categories.forEach(category => {
      expect(Object.keys(categoriesMap[category]).length).toBe(2)
      expect(typeof categoriesMap[category].name).toBe('string')
      expect(categoriesMap[category].name.length).toBeGreaterThan(0)
      expect(typeof categoriesMap[category].key).toBe('string')
      expect(categoriesMap[category].key.length).toBeGreaterThan(0)
    })
  })
  it('should return map with all cities containing name, key, categories', () => {
    const citiesMap = getCities()
    const cities = Object.keys(citiesMap)
    expect(typeof citiesMap).toBe('object')
    expect(cities.length).toBe(totalCities)
    cities.forEach(city => {
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

describe('Generate pyp data objects', () => {
  it('should return data for three days for all categories', () => {
    const date = '2018-03-06T00:00:02.000-05:00'
    const days = 3
    const result = getPypData('bogota', date, days)
    expect(result.data.length).toBe(3)
    expect(result.name).toBe('Bogotá')
    expect(result.path).toBe('bogota')
    const categories = Object.keys(result.info)
    expect(categories.length).toBeGreaterThan(0)
    const categoryKeys = [
      'days',
      'decrees',
      'exceptions',
      'hours',
      'maps',
      'observations',
      'scheme',
      'vehicleClasses',
      'name',
      'path',
    ]
    categories.forEach(category => {
      expect(Object.keys(result.info[category])).toEqual(categoryKeys)
    })
    const { data } = result
    expect(data.length).toBe(days)
    data.forEach(elem => {
      expect(elem.date).toEqual(
        expect.stringMatching(
          /20\d{2}-[0-1]\d{1}-[0-3]\d{1}T\d{2}:\d{2}:\d{2}.\d{3}Z/
        )
      )
      elem.categories.forEach(category => {
        expect(category).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            path: expect.stringMatching(/[a-z]+\/[a-z]+/),
            key: expect.stringMatching(/[a-z]+/),
            pyp: expect.stringMatching(/[\d-]+/),
          })
        )
      })
    })
  })
  it('should return data for two categories', () => {
    const date = '2018-03-06T00:00:02-05:00'
    const days = 3
    const categories = ['taxis', 'ambiental']
    const result = getPypData('bogota', date, days, categories)
    expect(result.data.length).toBe(3)
    expect(result.name).toBe('Bogotá')
    expect(result.data[0].categories.length).toBe(categories.length)
    expect(result.data[0].categories[0].name).toBe('Taxis')
    expect(result.data[0].categories[0].path).toBe('bogota/taxis')
    expect(Object.keys(result.info).length).toBe(categories.length)
  })
  it('should return pyp meta-info for all categories', () => {
    const date = '2018-03-06T00:00:02-05:00'
    const result = getPypInfo('bogota', date)
    const categoryKeys = [
      'days',
      'decrees',
      'exceptions',
      'hours',
      'maps',
      'observations',
      'scheme',
      'vehicleClasses',
      'name',
      'path',
    ]
    Object.keys(result).forEach(category => {
      expect(Object.keys(result[category])).toEqual(categoryKeys)
    })
  })
  it('should return pyp data for one date', () => {
    const date = '2018-03-06T00:00:02-05:00'
    const result = getPyp('bogota', date)
    expect(result).toEqual(
      expect.arrayContaining([
        {
          name: expect.any(String),
          path: expect.stringMatching(/[a-z]+\/[a-z]+/),
          key: expect.stringMatching(/[a-z]+/),
          pyp: expect.stringMatching(/[\d-]+/),
        },
      ])
    )
  })
})
