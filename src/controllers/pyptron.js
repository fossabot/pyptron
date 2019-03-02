const slugify = require('slugify')
const { newISODate } = require('../helpers/dateHelpers')
const { cdnPathMaker } = require('../helpers/globalHelpers')
const armenia = require('../models/armenia')
const barranquilla = require('../models/barranquilla')
const bello = require('../models/bello')
const bogota = require('../models/bogota')
const bucaramanga = require('../models/bucaramanga')
const buenaventura = require('../models/buenaventura')
const cali = require('../models/cali')
const cartagena = require('../models/cartagena')
const cucuta = require('../models/cucuta')
const envigado = require('../models/envigado')
const ibague = require('../models/ibague')
const itagui = require('../models/itagui')
const laestrella = require('../models/laestrella')
const malambo = require('../models/malambo')
const manizales = require('../models/manizales')
const medellin = require('../models/medellin')
const ocana = require('../models/ocana')
const pamplona = require('../models/pamplona')
const pasto = require('../models/pasto')
const pereira = require('../models/pereira')
const popayan = require('../models/popayan')
const quibdo = require('../models/quibdo')
const sabaneta = require('../models/sabaneta')
const santamarta = require('../models/santamarta')
const soledad = require('../models/soledad')
const tunja = require('../models/tunja')
const turbaco = require('../models/turbaco')
const villavicencio = require('../models/villavicencio')

const cities = {
  armenia,
  barranquilla,
  bello,
  bogota,
  bucaramanga,
  buenaventura,
  cali,
  cartagena,
  cucuta,
  envigado,
  ibague,
  itagui,
  laestrella,
  malambo,
  manizales,
  medellin,
  ocana,
  pamplona,
  pasto,
  pereira,
  popayan,
  quibdo,
  sabaneta,
  santamarta,
  soledad,
  tunja,
  turbaco,
  villavicencio,
}

module.exports = {
  getCities,
  getCategories,
  getPypData,
  getPypInfo,
  getPyp,
}

function getCities() {
  return Object.keys(cities)
    .sort()
    .reduce((result, city) => {
      const cityName = cities[city].name
      const citySlug = slugify(cityName, { lower: true })
      // eslint-disable-next-line no-param-reassign
      result[citySlug] = {
        name: cityName,
        key: city,
        categories: getCategories(city),
      }
      return result
    }, {})
}

function getCategories(city) {
  const categoriesMap = {}
  const cityObj = cities[city]
  const categories = Object.keys(cityObj.categories).sort()
  categories.forEach(category => {
    const categoryName = cityObj.categories[category].name
    const categorySlug = slugify(categoryName, { lower: true })
    categoriesMap[categorySlug] = { key: category, name: categoryName }
  })
  return categoriesMap
}

function getPyp(city, date, categories = []) {
  const pypCity = cities[city]
  const cats = categories.length
    ? categories
    : Object.keys(pypCity.categories).sort()
  return cats.reduce((result, category) => {
    const cityPath = slugify(pypCity.name, { lower: true })
    const activeCategory = pypCity.categories[category]
    const categoryPath = slugify(activeCategory.name, {
      lower: true,
    })
    result.push({
      name: activeCategory.name,
      path: `${cityPath}/${categoryPath}`,
      pyp: activeCategory.pyp(date),
      key: category,
    })
    return result
  }, [])
}

function getPypInfo(city, date, categories = []) {
  const pypCity = cities[city]
  const cats = categories.length
    ? categories
    : Object.keys(pypCity.categories).sort()
  return cats.reduce((result, category) => {
    const cityPath = slugify(pypCity.name, { lower: true })
    const activeCategory = pypCity.categories[category]
    const categoryPath = slugify(activeCategory.name, {
      lower: true,
    })
    const { info } = activeCategory
    info.maps = info.maps ? cdnPathMaker(info.maps, cityPath) : []
    info.decrees = info.decrees ? cdnPathMaker(info.decrees, cityPath) : []
    info.name = activeCategory.name
    info.path = `${cityPath}/${categoryPath}`
    result[category] = info // eslint-disable-line no-param-reassign
    return result
  }, {})
}

function getPypData(city, date, days = 1, categories = []) {
  // Si el argumento `date` solo tiene diez caracteres quiere decir que no se ha
  // indicado la zona horaria por lo que asumimos la zona horario de Colombia.
  // Usamos el formato ISO
  const ISODate = newISODate(date)
  const pypCity = cities[city]
  const currentDate = new Date(ISODate)
  const result = {
    name: pypCity.name,
    path: slugify(pypCity.name, { lower: true }),
    info: getPypInfo(city, currentDate, categories),
    data: [],
  }
  for (let i = 0; i < days; i += 1) {
    const pypData = getPyp(city, currentDate, categories)
    result.data.push({
      date: currentDate.toISOString(),
      categories: pypData,
    })
    currentDate.setDate(currentDate.getDate() + 1)
  }
  return result
}
