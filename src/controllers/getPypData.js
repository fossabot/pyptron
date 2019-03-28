const slugify = require('slugify')
const { pypWrapper, getCategoryMetainfo } = require('../helpers/pypHelpers')
const { newISODate } = require('../helpers/dateHelpers')
const { cdnPathMaker } = require('../helpers/globalHelpers')

const cities = require('../models')

module.exports = {
  getPypData,
}

function getPypData(options) {
  const { city, date, days = 1 } = options
  const cityObject = cities[city]
  const { categories = Object.keys(cityObject.categories) } = options
  const ISODate = newISODate(date)
  const { name, messages } = cityObject
  const cityPath = slugify(name, { lower: true })
  return {
    categories: categories.reduce((categoriesObject, categoryKey) => {
      const categoryObject = cityObject.categories[categoryKey]
      const { name: categoryName, emoji } = getCategoryMetainfo(categoryKey)
      const { pypFunction, excludedDays, skipHolidays } = categoryObject
      const categoryPath = slugify(categoryName, {
        lower: true,
      })
      // eslint-disable-next-line no-param-reassign
      categoriesObject[categoryKey] = {
        ...categoryObject,
        decrees: categoryObject.decrees
          ? cdnPathMaker(categoryObject.decrees, cityPath)
          : [],
        emoji,
        key: categoryKey,
        maps: categoryObject.maps
          ? cdnPathMaker(categoryObject.maps, cityPath)
          : [],
        messages: categoryObject.messages || [],
        name: categoryName,
        path: `${cityPath}/${categoryPath}`,
        pyp: [],
      }
      const currentDate = new Date(ISODate)
      for (let i = 0; i < days; i += 1) {
        categoriesObject[categoryKey].pyp.push({
          date: currentDate.toISOString(),
          numbers: pypWrapper(currentDate, pypFunction, {
            excludedDays,
            skipHolidays,
          }),
        })
        currentDate.setDate(currentDate.getDate() + 1)
      }
      return categoriesObject
    }, {}),
    messages: messages || [],
    name,
    path: cityPath,
  }
}
