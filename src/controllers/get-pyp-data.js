const { newISODate } = require('../helpers/date-helpers')

const cities = require('../models')

module.exports = {
  getPypData,
}

function getPypData(options) {
  const { city, date, days = 1 } = options
  const cityObject = cities[city]
  const { categories = Object.keys(cityObject.categories) } = options
  const ISODate = newISODate(date)

  return {
    ...cityObject,
    categories: categories.reduce((categoriesObject, categoryKey) => {
      const categoryObject = cityObject.categories[categoryKey]
      // eslint-disable-next-line no-param-reassign
      categoriesObject[categoryKey] = {
        ...categoryObject,
        pyp: categoryObject.getPypNums({
          date: ISODate,
          days,
        }),
      }

      return categoriesObject
    }, {}),
  }
}
