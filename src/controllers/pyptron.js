const slugify = require('slugify')
const { pypWrapper } = require('../helpers/pypHelpers')
const { newISODate } = require('../helpers/dateHelpers')
const { cdnPathMaker } = require('../helpers/globalHelpers')
const cities = require('../models')

module.exports = {
  getPypInfo,
  getPypAllData,
  getPypNumbers,
}

function getPypInfo(options) {
  const { city, categories = [] } = options
  const pypCity = cities[city]
  const requestedCategories = categories.length
    ? categories
    : Object.keys(pypCity.categories).sort()
  const cityPath = slugify(pypCity.name, { lower: true })

  return requestedCategories.reduce((result, category) => {
    const activeCategory = pypCity.categories[category]
    const categoryPath = slugify(activeCategory.name, {
      lower: true,
    })

    const { info } = activeCategory
    info.maps = info.maps ? cdnPathMaker(info.maps, cityPath) : []
    info.decrees = info.decrees ? cdnPathMaker(info.decrees, cityPath) : []
    info.name = activeCategory.name
    info.path = `${cityPath}/${categoryPath}`
    result[category] = info // eslint-disable-line no-param-reassign

    return result
  }, {})
}

function getPypAllData(options) {
  const { city, date, days = 1, categories = [] } = options
  const ISODate = newISODate(date)
  const pypCity = cities[city]
  const currentDate = new Date(ISODate)
  const result = {
    name: pypCity.name,
    path: slugify(pypCity.name, { lower: true }),
    info: getPypInfo({ city, date: currentDate, categories }),
    data: [],
  }

  for (let i = 0; i < days; i += 1) {
    const pypData = getPypNumbers({ city, date: currentDate, categories })

    result.data.push({
      date: currentDate.toISOString(),
      categories: pypData,
    })

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return result
}

function getPypNumbers(options) {
  const { city, date, categories = [] } = options
  const pypCity = cities[city]
  const requestedCategories = categories.length
    ? categories
    : Object.keys(pypCity.categories).sort()
  const cityPath = slugify(pypCity.name, { lower: true })

  const categoriesData = requestedCategories.map(category => {
    const activeCategory = pypCity.categories[category]
    const { name, pypFunction, excludedDays, skipHolidays } = activeCategory
    const categoryPath = slugify(activeCategory.name, {
      lower: true,
    })
    return {
      name,
      path: `${cityPath}/${categoryPath}`,
      key: category,
      pyp: pypWrapper(date, pypFunction, {
        excludedDays,
        skipHolidays,
      }),
    }
  })

  return categoriesData
}
