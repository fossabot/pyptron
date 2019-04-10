const slugify = require('slugify')

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

    return {
      name: this.name,
      messages: this.messages,
      path: this.path,
      categories: requestedCategories.reduce(
        (categoriesObject, categoryKey) => {
          // eslint-disable-next-line no-param-reassign
          categoriesObject[categoryKey] = this.categories[
            categoryKey
          ].getPypData({
            cityPath: this.path,
            date,
            days,
          })

          return categoriesObject
        },
        {}
      ),
    }
  }
}
