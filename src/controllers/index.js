const { generateMap } = require('../helpers/pyp-helpers')
const { createResponse } = require('../helpers/global-helpers')
const cities = require('../models')

module.exports = {
  getCities,
  getCategories,
}

const citiesMap = generateMap(cities)

function getCities(city, options = {}) {
  if (!city) {
    return createResponse(200, citiesMap)
  }
  const { date = new Date() } = options
  if (!(city in citiesMap)) {
    return createResponse(404, {
      error: 'City not found',
      cities: Object.keys(citiesMap),
    })
  }
  const cityKey = citiesMap[city].key
  try {
    const pypData = cities[cityKey].getPypData({ date })
    return createResponse(200, pypData)
  } catch (error) {
    return createResponse(404, { error: error.message })
  }
}

function getCategories(city, category, options = {}) {
  const { date = new Date(), days = 1 } = options
  if (!(city in citiesMap)) {
    return createResponse(404, {
      error: 'City not found',
      cities: Object.keys(citiesMap),
    })
  }
  if (!(category in citiesMap[city].categories)) {
    return createResponse(404, {
      error: 'Category not found',
      categories: Object.keys(citiesMap[city].categories),
    })
  }
  const cityKey = citiesMap[city].key
  const categoryKey = citiesMap[city].categories[category].key
  try {
    const pypData = cities[cityKey].getPypData({
      date,
      days,
      categories: [categoryKey],
    })
    return createResponse(200, pypData)
  } catch (error) {
    return createResponse(404, { error: error.message })
  }
}
