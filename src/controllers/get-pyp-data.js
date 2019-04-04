const { newISODate } = require('../helpers/date-helpers')

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

  return {
    ...cityObject,
    categories: categories.reduce((categoriesObject, categoryKey) => {
      const categoryObject = cityObject.categories[categoryKey]
      // eslint-disable-next-line no-param-reassign
      categoriesObject[categoryKey] = {
        ...categoryObject,
        pyp: getPypNums({
          date: ISODate,
          days,
          categoryObject,
        }),
      }

      return categoriesObject
    }, {}),
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
