const { generateMap } = require('../helpers/pyp-helpers')
const { createResponse } = require('../helpers/global-helpers')
const cities = require('../models')

module.exports = {
  getCitiesMap,
  getCityData,
}

const citiesMap = generateMap(cities)

function getCitiesMap() {
  return createResponse(200, citiesMap)
}

function getCityData(city, options = {}) {
  const { date = new Date(), days = 1, category } = options

  if (!(city in citiesMap)) {
    return createResponse(404, {
      error: 'City not found',
      cities: Object.keys(citiesMap),
    })
  }

  if (category && !(category in citiesMap[city].categories)) {
    return createResponse(404, {
      error: 'Category not found',
      categories: Object.keys(citiesMap[city].categories),
    })
  }

  try {
    const pypData = cities[citiesMap[city].key].getPypData({
      date,
      days,
      categories: category ? [citiesMap[city].categories[category].key] : [],
    })
    return createResponse(200, pypData)
  } catch (error) {
    return createResponse(404, { error: error.message })
  }
}
