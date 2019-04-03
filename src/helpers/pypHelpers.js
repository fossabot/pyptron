const slugify = require('slugify')

module.exports = {
  generateMap,
  getCategoryMetainfo,
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
      const { name, emoji } = getCategoryMetainfo(key)
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

function getCategoryMetainfo(category) {
  const metainfo = {
    taxis: { emoji: '🚕', name: 'Taxis' },
    particulares: { emoji: '🚗', name: 'Particulares' },
    tpc: { emoji: '🚌', name: 'Transporte Público Colectivo' },
    motos: { emoji: '🛵', name: 'Motos' },
    motocarros: { emoji: '', name: 'Motocarros' },
    especial: { emoji: '🚐', name: 'Servicio de Transporte Especial' },
    ambiental: { emoji: '🌻', name: 'Ambiental' },
    carga: { emoji: '🚛', name: 'Transporte de carga' },
  }
  return metainfo[category] || ''
}
