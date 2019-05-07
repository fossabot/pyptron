const { generateMap } = require('./helpers/pyp-helpers')
const cities = require('./models')

module.exports = {
  getCityData,
  getCitiesMap,
}

const citiesMap = generateMap(cities)

function getCitiesMap() {
  return citiesMap
}

function getCityData(city, options = {}) {
  const { category, date = new Date(), days = 1 } = options

  if (!(city in citiesMap)) {
    throw new Error('City not found')
  }

  if (category && !(category in citiesMap[city].categories)) {
    throw new Error('Category not found')
  }

  const pypData = cities[citiesMap[city].key].getPypData({
    date,
    days,
    categories: category ? [citiesMap[city].categories[category].key] : [],
  })
  return pypData
}
