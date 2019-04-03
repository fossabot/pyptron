const { readdir } = require('fs')
const { generateMap } = require('./pyp-helpers')
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
