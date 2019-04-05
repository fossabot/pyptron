const slugify = require('slugify')
const { cdnPathMaker } = require('../helpers/global-helpers')
const { newISODate } = require('../helpers/date-helpers')

module.exports = class City {
  constructor(options) {
    const { categories, messages = [], name } = options
    this.name = name
    this.messages = messages
    this.path = slugify(this.name, { lower: true })
    this.categories = {}
    Object.keys(categories).forEach(categoryKey => {
      const categoryObject = categories[categoryKey]
      const categoryPath = slugify(categoryObject.name, {
        lower: true,
      })

      this.categories[categoryKey] = {
        ...categoryObject,
        decrees: categoryObject.decrees
          ? cdnPathMaker(categoryObject.decrees, this.path)
          : [],
        maps: categoryObject.maps
          ? cdnPathMaker(categoryObject.maps, this.path)
          : [],
        messages: categoryObject.messages || [],
        path: `${this.path}/${categoryPath}`,
        pyp: categoryObject.pyp,
      }
    })
  }

  getPypData(options = {}) {
    const {
      categories = Object.keys(this.categories),
      date = new Date(),
      days = 1,
    } = options
    const ISODate = newISODate(date)
    return {
      name: this.name,
      messages: this.messages,
      path: this.path,
      categories: categories.reduce((categoriesObject, categoryKey) => {
        const categoryObject = this.categories[categoryKey]
        // eslint-disable-next-line no-param-reassign
        categoriesObject[categoryKey] = {
          ...categoryObject,
          pyp: categoryObject.getPyp({
            date: ISODate,
            days,
          }),
        }

        return categoriesObject
      }, {}),
    }
  }
}
