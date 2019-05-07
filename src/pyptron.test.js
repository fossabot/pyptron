const { getCityData } = require('./pyptron')
const { generateMap } = require('./helpers/pyp-helpers')
const cities = require('./models')

const citiesMap = generateMap(cities)

const expectedData = {
  date: expect.stringMatching(
    /20[0-9]{2}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}Z/
  ),
  decrees: expect.any(Array),
  exceptions: expect.any(String),
  excludedDays: expect.any(Array),
  hours: expect.any(Array),
  maps: expect.any(Array),
  numbers: expect.any(Array),
  observations: expect.any(String),
  scheme: expect.anything(),
  skipHolidays: expect.any(Boolean),
  vehicleClasses: expect.any(Array),
}

const expectedCategory = {
  emoji: expect.any(String),
  messages: expect.any(Array),
  name: expect.any(String),
  path: expect.any(String),
  data: expect.arrayContaining([expectedData]),
}

const citiesNames = Object.keys(citiesMap)
it('should throw an error when an unkown city is requested.', () => {
  const city = 'nonExistingCity'
  expect(() => getCityData(city)).toThrow('City not found')
})
citiesNames.forEach(city => {
  it(`should return info for ${city}`, () => {
    const pypData = getCityData(city)
    // Debe tener una propiedad nombre de tipo texto
    expect(typeof pypData.name).toBe('string')
    expect(pypData.name.length).toBeGreaterThan(0)
    // Debe tener un propiedad path igual a la ruta solicitada
    expect(pypData.path).toBe(`${city}`)
    // Debe tener un propiedad info
    expect(typeof pypData.categories).toBe('object')
    // Debe tener una propiedad data
    expect(typeof pypData.categories).toBe('object')
    expect(Object.keys(pypData.categories).length).toBe(
      Object.keys(citiesMap[city].categories).length
    )
  })
  const categories = Object.keys(citiesMap[city].categories)
  categories.forEach(category => {
    it(`should throw an error for a non existing category`, () => {
      const response = () =>
        getCityData(city, { category: 'nonExistingCategory' })
      expect(response).toThrow('Category not found')
    })
    it(`should return info for ${city}/${category}`, () => {
      const pypData = getCityData(city, { category, date: new Date() })
      const currentCategory =
        pypData.categories[citiesMap[city].categories[category].key]
      expect(pypData.name).toBe(citiesMap[city].name)
      expect(pypData.path).toBe(`${city}`)
      expect(Array.isArray(pypData.messages)).toBe(true)
      expect(currentCategory).toEqual(expect.objectContaining(expectedCategory))
      expect(currentCategory.data.length).toBe(1)
    })
    const date = '2019-04-22'
    it(`should return info for ${city} ${category} ${date}`, () => {
      const pypData = getCityData(city, { category, date })
      const currentCategory =
        pypData.categories[citiesMap[city].categories[category].key]
      expect(pypData.name).toBe(citiesMap[city].name)
      expect(pypData.path).toBe(`${city}`)
      expect(Array.isArray(pypData.messages)).toBe(true)
      expect(currentCategory).toEqual(expect.objectContaining(expectedCategory))
      expect(currentCategory.data.length).toBe(1)
      expect(currentCategory.data).toEqual(
        expect.arrayContaining([
          {
            ...expectedData,
            date: `${date}T05:00:00.000Z`,
          },
        ])
      )
    })
    it(`should return n number of days for ${city} ${category} ${date}`, () => {
      const days = 5
      const pypData = getCityData(city, { category, date, days })
      const currentCategory =
        pypData.categories[citiesMap[city].categories[category].key]
      expect(pypData.name).toBe(citiesMap[city].name)
      expect(pypData.path).toBe(`${city}`)
      expect(Array.isArray(pypData.messages)).toBe(true)
      expect(currentCategory).toEqual(expect.objectContaining(expectedCategory))
      expect(currentCategory.data.length).toBe(days)
      expect(currentCategory.data).toEqual(
        expect.arrayContaining([
          {
            ...expectedData,
            date: `${date}T05:00:00.000Z`,
          },
        ])
      )
    })
    it(`should return 30 days when more than 30 days requested`, () => {
      const days = 35
      const maxDays = 30
      const pypData = getCityData(city, { category, date, days })
      const currentCategory =
        pypData.categories[citiesMap[city].categories[category].key]
      expect(pypData.name).toBe(citiesMap[city].name)
      expect(pypData.path).toBe(`${city}`)
      expect(Array.isArray(pypData.messages)).toBe(true)
      expect(currentCategory).toEqual(expect.objectContaining(expectedCategory))
      expect(currentCategory.data.length).toBe(maxDays)
      expect(currentCategory.data).toEqual(
        expect.arrayContaining([
          {
            ...expectedData,
            date: `${date}T05:00:00.000Z`,
          },
        ])
      )
    })
  })
})
