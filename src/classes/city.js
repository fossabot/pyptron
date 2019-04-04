const slugify = require('slugify')
const { cdnPathMaker } = require('../helpers/global-helpers')

module.exports = class City {
  constructor(options) {
    const { categories, messages = [], name } = options
    const cityPath = slugify(name, { lower: true })
    this.name = name
    this.messages = messages
    this.path = cityPath
    this.categories = {}
    Object.keys(categories).forEach(categoryKey => {
      const categoryObject = categories[categoryKey]
      const categoryPath = slugify(categoryObject.name, {
        lower: true,
      })

      this.categories[categoryKey] = {
        ...categoryObject,
        decrees: categoryObject.decrees
          ? cdnPathMaker(categoryObject.decrees, cityPath)
          : [],
        maps: categoryObject.maps
          ? cdnPathMaker(categoryObject.maps, cityPath)
          : [],
        messages: categoryObject.messages || [],
        path: `${cityPath}/${categoryPath}`,
        pyp: categoryObject.pyp,
      }
    })
  }
}
