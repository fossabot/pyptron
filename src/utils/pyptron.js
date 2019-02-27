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
  getCategories,
  getCities,
  getPyp,
  getPypData,
  getPypInfo,
}

/**
 * Obtiene las categorías correspondientes a una ciudad dada en donde la llave es el slug ordenado
 * alfabéticamente y el valor es otro objecto que contiene la llave interna para acceder a la
 * categoría y el nombre humano para la categoría. Ejemplo:
 *   const manizalesCategories = getCategories('manizales')
 *   { taxis: {
 *       key: 'taxis',
 *       name: 'Taxis' },
 *     'transporte-publico-colectivo': {
 *       key: 'tpc',
 *       name: 'Transporte Público Colectivo' } }
 * @param {string} city La ciudad para la cual se desean consultar las categorías.
 * @returns {Object} Las categorías correspondientes a la ciudad con la llave y el nombre humano.
 */
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

/**
 * Devuelve un objecto con la información correspondiente a las ciudades almacenadas en donde la
 * llave es el slug ordenado alfabéticamente y el valor es un objeto con tres valores que son la llave interna para
 * acceder a la categoría, el nombre humano para la categoría y la lista de categorías disponibles.
 * Ejemplo:
 * const cities = getCities();
 * { armenia:
 *   { name: 'Armenia',
 *     key: 'armenia',
 *     categories: { motos: [Object], particulares: [Object], taxis: [Object] } },
 *  barranquilla:
 *   { name: 'Barranquilla',
 *     key: 'barranquilla',
 *     categories: { taxis: [Object] } },
 *  bogota:
 *   { name: 'Bogotá',
 *     key: 'bogota',
 *     categories:
 *       { ambiental: [Object],
 *         'servicio-de-transporte-especial': [Object],
 *         particulares: [Object],
 *         taxis: [Object],
 *         'transporte-publico-colectivo': [Object] } },
 *  bucaramanga:
 *   { name: 'Bucaramanga',
 *     key: 'bucaramanga',
 *     categories:
 *       { motos: [Object],
 *         particulares: [Object],
 *         taxis: [Object] } },
 *  ...
 * @returns {Object} Las ciudades disponibles con sus correspondientes categorías.
 */
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
/**
 * Devuelve un array con las categorías y los valores correspondientes al pico y placa para la
 * ciduad y la fecha solicitada. Si no se especifica la lista de categorías que se desea por defecto
 * se devuelven todas las categorías disponibles para la ciudad solicitada.
 * @param {string} city Ciudad para la cual se desea obtener la información
 * @param {string} date Fecha para la cual se desea obtener la información.
 * @param {Array} categories Opcional lista de categorías que se desean consultar.
 * @returns {Array} El valor del pyp para la ciudad y categorías solicitadas.
 */
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

/**
 * Devuelve un objeto conla metainformación para la ciudad solicitada en donde las llaves son el
 * slug de las categorías correspondientes a la ciudad dada ordenada alfabéticamente. Si no se
 * especifican categorías por defecto se devuelven todas las categorías disponibles.
 * @param {string} city Ciudad para la cual se desea consultar la meta-información.
 * @param {string} date Fecha para la cual se desea obtener la información.
 * @param {Array} categories Opcional lista de categorías que se desean consultar.
 * @returns {Object} La meta-información para la ciudad y categorías solicitadas.
 */
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

/**
 * Devuelve la metainformación y la información correspondiente a la ciudad solicitada para la
 * fecha solicitada. Si no se especifican los días se desean sólo se devuelve la información para un
 * día correspondiente a la fecha solicita, de lo contrario, se devuelve la información de la
 * cantidad de días solicitados a partir de la fecha dada. Si no se especifican las categorías que
 * se desean consultar por defecto se devuelven todas las categorías disponibles para la ciudad
 * solicitada.
 * @param {string} city La ciudad para la cual se desea consultar la información.
 * @param {string} date La fecha para la cual se desea solicitar la información.
 * @param {Number} days Cantidad de días que se deasean consultar a partir de la fecha dada.
 * @param {Array} categories Lista de categorías que se desean consultar.
 * @returns {Object} Toda la información correspondiente a la ciudad, categorías y días solicitados.
 */
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
