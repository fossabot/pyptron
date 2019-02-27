const pyptron = require('./pyptron')
const { createResponse } = require('../helpers/globalHelpers')

module.exports = {
  cities,
  categories,
}

const citiesMap = pyptron.getCities()

function cities(city, options = {}) {
  if (!city) {
    return createResponse(200, citiesMap)
  }
  const { date = new Date() } = options
  if (!citiesMap[city]) {
    return createResponse(404, {
      error: 'City not found',
      cities: Object.keys(citiesMap),
    })
  }
  const cityKey = citiesMap[city].key
  try {
    const pypData = pyptron.getPypData(cityKey, date)
    return createResponse(200, pypData)
  } catch (error) {
    return createResponse(404, { error: error.message })
  }
}

function categories(city, category, options = {}) {
  const { date = new Date(), days = 1 } = options
  if (!citiesMap[city]) {
    return createResponse(404, {
      error: 'City not found',
      cities: Object.keys(citiesMap),
    })
  }
  if (!citiesMap[city].categories[category]) {
    return createResponse(404, {
      error: 'Category not found',
      categories: Object.keys(citiesMap[city].categories),
    })
  }
  const cityKey = citiesMap[city].key
  const categoryKey = citiesMap[city].categories[category].key
  try {
    const pypData = pyptron.getPypData(cityKey, date, days, [categoryKey])
    return createResponse(200, pypData)
  } catch (error) {
    return createResponse(404, { error: error.message })
  }
}
