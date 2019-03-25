const { pyptron } = require('./handler')
const { generateMap } = require('./helpers/pypHelpers')
const cities = require('./models')

const citiesMap = generateMap(cities)
const event = {}

describe('Test API endpoints', () => {
  it('should GET /', async () => {
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
        expect.assertions(8)
        event.resource = '/{city}/{category}'
        event.pathParameters = { city, category }
        event.queryStringParameters = { currentDate }
        const response = await pyptron(event)
        expect(response.statusCode).toBe(200)
        const pypData = JSON.parse(response.body)
        expect(typeof pypData.name).toBe('string')
        expect(pypData.name.length).toBeGreaterThan(0)
        // Debe tener un propiedad path igual a la ruta solicitada
        expect(pypData.path).toBe(`${city}`)
        expect(typeof pypData.categories).toBe('object')
        const currentCategory =
          pypData.categories[citiesMap[city].categories[category].key]
        expect(currentCategory.pypNumbers.length).toBe(1)
        expect(currentCategory.pypNumbers[0].date.substring(0, 10)).toBe(
          currentDate.toISOString().substring(0, 10)
        )
        expect(typeof currentCategory.pypNumbers[0].numbers).toBe('string')
      })
      const date = '2018-10-22'
      it(`should GET /${city}/${category}?date=${date}`, async () => {
        expect.assertions(8)
        event.resource = '/{city}/{category}'
        event.pathParameters = { city, category }
        event.queryStringParameters = { date }
        const response = await pyptron(event)
        expect(response.statusCode).toBe(200)
        const pypData = JSON.parse(response.body)
        expect(typeof pypData.name).toBe('string')
        expect(pypData.name.length).toBeGreaterThan(0)
        // Debe tener un propiedad path igual a la ruta solicitada
        expect(pypData.path).toBe(`${city}`)
        expect(typeof pypData.categories).toBe('object')
        const currentCategory =
          pypData.categories[citiesMap[city].categories[category].key]
        expect(currentCategory.pypNumbers.length).toBe(1)
        expect(currentCategory.pypNumbers[0].date).toBe(`${date}T05:00:00.000Z`)
        expect(typeof currentCategory.pypNumbers[0].numbers).toBe('string')
      })
      const days = 5
      it(`should GET /${city}/${category}?date=${date}&days=${days}`, async () => {
        expect.assertions(8)
        event.resource = '/{city}/{category}'
        event.pathParameters = { city, category }
        event.queryStringParameters = { date, days }
        const response = await pyptron(event)
        expect(response.statusCode).toBe(200)
        const pypData = JSON.parse(response.body)
        expect(typeof pypData.name).toBe('string')
        expect(pypData.name.length).toBeGreaterThan(0)
        // Debe tener un propiedad path igual a la ruta solicitada
        expect(pypData.path).toBe(`${city}`)
        expect(typeof pypData.categories).toBe('object')
        const currentCategory =
          pypData.categories[citiesMap[city].categories[category].key]
        expect(currentCategory.pypNumbers.length).toBe(days)
        expect(currentCategory.pypNumbers[0].date).toBe(`${date}T05:00:00.000Z`)
        expect(typeof currentCategory.pypNumbers[0].numbers).toBe('string')
      })
    })
  })
})
