const slugify = require('slugify')
const { getCategoryMetainfo } = require('../helpers/pypHelpers')
const { newISODate } = require('../helpers/dateHelpers')
const { cdnPathMaker } = require('../helpers/globalHelpers')

const cities = require('../models')

module.exports = {
  getPypData,
  getPypNums,
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
        pyp: getPypNums({
          date: ISODate,
          days,
          categoryObject,
        }),
      }

      return categoriesObject
    }, {}),

    messages: messages || [],
    name,
    path: cityPath,
  }
}

function getPypNums(options) {
  const {
    date,
    days,
    categoryObject: { pyp },
  } = options
  const maxDays = 30
  const currentDate = new Date(date)
  const totalDays = days > maxDays ? maxDays : days

  const pypNumbers = []

  for (let i = 0; i < totalDays; i += 1) {
    pypNumbers.push({
      date: currentDate.toISOString(),
      numbers: pyp(currentDate),
    })
    currentDate.setDate(currentDate.getDate() + 1)
  }
  return pypNumbers
}
