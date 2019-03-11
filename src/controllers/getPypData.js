const slugify = require('slugify')
const { pypWrapper, getCategoryMetainfo } = require('../helpers/pypHelpers')
const { newISODate } = require('../helpers/dateHelpers')
const { cdnPathMaker } = require('../helpers/globalHelpers')

const cities = require('../models')

module.exports = {
  getPypAllData,
  getPypInfo,
  getPypNumbers,
}

function getPypAllData(options) {
  const { city, date, days = 1, categories = [] } = options
  const ISODate = newISODate(date)
  const { name } = cities[city]
  const currentDate = new Date(ISODate)
  const allData = {
    name,
    path: slugify(name, { lower: true }),
    info: getPypInfo({ city, date: currentDate, categories }),
    data: [],
  }

  for (let i = 0; i < days; i += 1) {
    const pypData = getPypNumbers({ city, date: currentDate, categories })

    allData.data.push({
      date: currentDate.toISOString(),
      categories: pypData,
    })

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return allData
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
    const { name, emoji } = getCategoryMetainfo(category)
    const { info } = activeCategory
    const categoryPath = slugify(name, {
      lower: true,
    })
    info.maps = info.maps ? cdnPathMaker(info.maps, cityPath) : []
    info.decrees = info.decrees ? cdnPathMaker(info.decrees, cityPath) : []
    info.name = name
    info.emoji = emoji
    info.path = `${cityPath}/${categoryPath}`
    result[category] = info // eslint-disable-line no-param-reassign

    return result
  }, {})
}

function getPypNumbers(options) {
  const { city, date, categories = [] } = options
  const pypCity = cities[city]
  const requestedCategories = categories.length
    ? categories
    : Object.keys(pypCity.categories).sort()
  const cityPath = slugify(pypCity.name, { lower: true })

  const categoriesData = requestedCategories.map(key => {
    const activeCategory = pypCity.categories[key]
    const { pypFunction, excludedDays, skipHolidays } = activeCategory
    const { name, emoji } = getCategoryMetainfo(key)
    const categoryPath = slugify(name, {
      lower: true,
    })
    return {
      key,
      name,
      path: `${cityPath}/${categoryPath}`,
      emoji,
      pyp: pypWrapper(date, pypFunction, {
        excludedDays,
        skipHolidays,
      }),
    }
  })

  return categoriesData
}
