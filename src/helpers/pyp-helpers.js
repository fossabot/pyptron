const slugify = require('slugify')

module.exports = {
  generateMap,
}

function generateMap(object) {
  return Object.keys(object)
    .sort()
    .reduce((map, key) => {
      if (object[key].categories) {
        const { name } = object[key]
        const slug = slugify(name, { lower: true })
        // eslint-disable-next-line no-param-reassign
        map[slug] = {
          key,
          name,
          categories: generateMap(object[key].categories),
        }
        return map
      }
      // console.log(key, object[key].name)
      const { name, emoji } = object[key]
      const slug = slugify(name, { lower: true })
      // eslint-disable-next-line no-param-reassign
      map[slug] = {
        key,
        name,
        emoji,
      }
      return map
    }, {})
}
