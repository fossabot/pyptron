const slugify = require('slugify')
const { cdnPathMaker } = require('../helpers/global-helpers')
const { newISODate } = require('../helpers/date-helpers')

module.exports = class City {
  constructor(options) {
    const { categories, messages = [], name } = options
    this.name = name
    this.messages = messages
    this.path = slugify(this.name, { lower: true })
    this.categories = categories
  }

  getPypData(options = {}) {
    const { categories, date = new Date(), days = 1 } = options
    const requestedCategories =
      !categories || !categories.length
        ? Object.keys(this.categories)
        : categories
    const ISODate = newISODate(date)
    return {
      name: this.name,
      messages: this.messages,
      path: this.path,
      categories: requestedCategories.reduce(
        (categoriesObject, categoryKey) => {
          const categoryObject = this.categories[categoryKey]
          const categoryPath = slugify(categoryObject.name, {
            lower: true,
          })

          // eslint-disable-next-line no-param-reassign
          categoriesObject[categoryKey] = {
            ...categoryObject,
            decrees: categoryObject.decrees
              ? cdnPathMaker(categoryObject.decrees, this.path)
              : [],
            maps: categoryObject.maps
              ? cdnPathMaker(categoryObject.maps, this.path)
              : [],
            messages: categoryObject.messages || [],
            path: `${this.path}/${categoryPath}`,

            pyp: categoryObject.getPyp({
              date: ISODate,
              days,
            }),
          }

          return categoriesObject
        },
        {}
      ),
    }
  }
}
