const { pyptron } = require('./handler')
const { generateMap } = require('./helpers/pyp-helpers')
const cities = require('./models')

const citiesMap = generateMap(cities)
const event = {}

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

describe('Test API endpoints', () => {
  it('should GET / (citiesMap)', async () => {
    event.resource = '/'
    expect.assertions(2)
    const response = await pyptron(event)
    expect(response.statusCode).toBe(200)
    expect(JSON.parse(response.body)).toEqual(citiesMap)
  })
  const citiesNames = Object.keys(citiesMap)
  it('should return 404 for GET /nonExistingCity', async () => {
    event.resource = '/{city}'
    event.pathParameters = { city: 'nonExistingCity' }
    expect.assertions(2)
    const response = await pyptron(event)
    expect(response.statusCode).toBe(404)
    expect(JSON.parse(response.body).cities).toEqual(citiesNames)
  })
  citiesNames.forEach(city => {
    it(`should GET /${city}`, async () => {
      expect.assertions(8)
      event.resource = '/{city}'
      event.pathParameters = { city }
      const response = await pyptron(event)
      expect(response.statusCode).toBe(200)
      expect(response.headers['Content-Type']).toBe('application/json')
      const pypData = JSON.parse(response.body)
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
      it(`should return 404 for GET /${city}/nonExistingCategory`, async () => {
        expect.assertions(2)
        event.resource = '/{city}/{category}'
        event.pathParameters = { city, category: 'nonExistingCategory' }
        const response = await pyptron(event)
        expect(response.statusCode).toBe(404)
        expect(JSON.parse(response.body).categories).toEqual(categories)
      })
      const currentDate = new Date()
      it(`should GET /${city}/${category}`, async () => {
        event.resource = '/{city}/{category}'
        event.pathParameters = { city, category }
        event.queryStringParameters = { currentDate }
        const response = await pyptron(event)
        const pypData = JSON.parse(response.body)
        const currentCategory =
          pypData.categories[citiesMap[city].categories[category].key]
        expect.assertions(6)
        expect(response.statusCode).toBe(200)
        expect(pypData.name).toBe(citiesMap[city].name)
        expect(pypData.path).toBe(`${city}`)
        expect(Array.isArray(pypData.messages)).toBe(true)
        expect(currentCategory).toEqual(
          expect.objectContaining(expectedCategory)
        )
        expect(currentCategory.data.length).toBe(1)
      })
      const date = '2019-04-22'
      it(`should GET /${city}/${category}?date=${date}`, async () => {
        event.resource = '/{city}/{category}'
        event.pathParameters = { city, category }
        event.queryStringParameters = { date }
        const response = await pyptron(event)
        const pypData = JSON.parse(response.body)
        const currentCategory =
          pypData.categories[citiesMap[city].categories[category].key]
        expect.assertions(7)
        expect(response.statusCode).toBe(200)
        expect(pypData.name).toBe(citiesMap[city].name)
        expect(pypData.path).toBe(`${city}`)
        expect(Array.isArray(pypData.messages)).toBe(true)
        expect(currentCategory).toEqual(
          expect.objectContaining(expectedCategory)
        )
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
      describe('should get route with query strings', () => {
        const days = 5
        it(`should GET /${city}/${category}?date=${date}&days=${days}`, async () => {
          event.resource = '/{city}/{category}'
          event.pathParameters = { city, category }
          event.queryStringParameters = { date, days }
          const response = await pyptron(event)
          const pypData = JSON.parse(response.body)
          const currentCategory =
            pypData.categories[citiesMap[city].categories[category].key]
          expect.assertions(7)
          expect(response.statusCode).toBe(200)
          expect(pypData.name).toBe(citiesMap[city].name)
          expect(pypData.path).toBe(`${city}`)
          expect(Array.isArray(pypData.messages)).toBe(true)
          expect(currentCategory).toEqual(
            expect.objectContaining(expectedCategory)
          )
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
      })
      describe('should get route with query strings', () => {
        const days = 35
        const maxDays = 30
        it(`should return ${maxDays} days when more than ${maxDays} days requested`, async () => {
          event.resource = '/{city}/{category}'
          event.pathParameters = { city, category }
          event.queryStringParameters = { date, days }
          const response = await pyptron(event)
          const pypData = JSON.parse(response.body)
          const currentCategory =
            pypData.categories[citiesMap[city].categories[category].key]
          expect.assertions(7)
          expect(response.statusCode).toBe(200)
          expect(pypData.name).toBe(citiesMap[city].name)
          expect(pypData.path).toBe(`${city}`)
          expect(Array.isArray(pypData.messages)).toBe(true)
          expect(currentCategory).toEqual(
            expect.objectContaining(expectedCategory)
          )
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
  })
})
