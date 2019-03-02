const slugify = require('slugify')
const { pypWrapper } = require('../helpers/pypHelpers')
const { newISODate } = require('../helpers/dateHelpers')
const { cdnPathMaker } = require('../helpers/globalHelpers')
const cities = require('../models')

module.exports = {
  getPypData,
  getPypInfo,
  getPyp,
}

function getPyp(city, date, categories = []) {
  const pypCity = cities[city]
  const cats = categories.length
    ? categories
    : Object.keys(pypCity.categories).sort()
  return cats.reduce((result, category) => {
    const cityPath = slugify(pypCity.name, { lower: true })
    const activeCategory = pypCity.categories[category]
    const categoryPath = slugify(activeCategory.name, {
      lower: true,
    })
    result.push({
      name: activeCategory.name,
      path: `${cityPath}/${categoryPath}`,
      pyp: pypWrapper(date, activeCategory.pypFunction, {
        excludedDays: activeCategory.excludedDays,
        skipHolidays: activeCategory.skipHolidays,
      }),
      key: category,
    })
    return result
  }, [])
}

function getPypInfo(city, date, categories = []) {
  const pypCity = cities[city]
  const cats = categories.length
    ? categories
    : Object.keys(pypCity.categories).sort()
  return cats.reduce((result, category) => {
    const cityPath = slugify(pypCity.name, { lower: true })
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

function getPypData(city, date, days = 1, categories = []) {
  // Si el argumento `date` solo tiene diez caracteres quiere decir que no se ha
  // indicado la zona horaria por lo que asumimos la zona horario de Colombia.
  // Usamos el formato ISO
  const ISODate = newISODate(date)
  const pypCity = cities[city]
  const currentDate = new Date(ISODate)
  const result = {
    name: pypCity.name,
    path: slugify(pypCity.name, { lower: true }),
    info: getPypInfo(city, currentDate, categories),
    data: [],
  }
  for (let i = 0; i < days; i += 1) {
    const pypData = getPyp(city, currentDate, categories)
    result.data.push({
      date: currentDate.toISOString(),
      categories: pypData,
    })
    currentDate.setDate(currentDate.getDate() + 1)
  }
  return result
}
