const { getHoliday } = require('pascua')
const slugify = require('slugify')
const config = require('../config')
const { datesDiff } = require('../helpers/dateHelpers')

/**
 * Devuelve una respuesta válida para API Gateway consistente por lo menos de un cuerpo (body) y un código de respuesta (statusCode).
 * @param {integer} statusCode Código de respuesta http
 * @param {object} body El cuerpo como objeto de javascript
 * @returns {object} La respuesta para API Gateway
 */
function createResponse(statusCode, body) {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode,
    body: JSON.stringify(body),
  }
}

/**
 * Construye la ruta del recurso al que se desea acceder dependiendo del ambiente en que nos encontramos.
 * @param {string} city La ciudad a la que pertenece el recurso
 * @param {string} asset El recurso al que se desea acceder
 * @returns {string} La ruta del recurso
 */
function buildAssetPath(city, asset) {
  return `${config.cdn}/${city}/${asset}`
}

/**
 * Takes an array of objects with a name and a url property and returns a new array with objects containing the url modified to match the cdn path
 * @param {Array} array Array of objects each containing name and url properties
 * @param {String} cityPath Slug of the city
 * @returns {Object} Same object with url replaced with cdn patn
 */
function cdnPathMaker(array, cityPath) {
  return array.map(object => {
    const slug = buildAssetPath(cityPath, slugify(object.name, { lower: true }))
    const objectExtension = object.url.split(':')[1]
    // eslint-disable-next-line no-param-reassign
    object.url = object.url.startsWith('cdn:')
      ? `${slug}.${objectExtension}`
      : object.url
    return object
  })
}

/**
 * Excluye una fecha si corresponde a alguno de los días de exclusión o si es festivo en caso de
 * que se incluyan los fetivos como motivo de exclusión.
 * @param {string} date Fecha para la cual se desea determinar si se excluye o no
 * @param {array} days Días de la semana que se desean excluir. Domingo = 0 y Sábado = 6.
 * @param {boolean} holidays Si se desea incluir los festivos como motivo de exclusión.
 * @returns {boolean} Verdadero si la fecha es excluida de lo contrario falso.
 */
function excludeDays(date, days, holidays = true) {
  const dateObject = new Date(date)
  return (
    days.includes(dateObject.getDay()) || (holidays && getHoliday(dateObject))
  )
}

/**
 * Envuelve el algoritmo particular para cada caso de pyp permitiendo abstraer patrones globales,
 * como el algoritmo para excluir días, del algoritmo como tal para cada caso.
 * @param {String} date La fecha para la cual se desea saber el pyp.
 * @param {Function} pypFunction Algoritmo para el pyp.
 * @param {Object} options Opciones
 * @param {Array} options.excludedDays Días de la semana en los que no aplica el pyp.
 * @param {Boolean} options.skipHolidays Si los días festivos aplica el pyp.
 * @returns {String} El valor correspondiente al pyp para el día solicitado.
 */
function pyp(date, pypFunction, options) {
  const { excludedDays = [], skipHolidays = true } = options
  const startDate = '2018-01-01'
  if (datesDiff(startDate, date, 'days') <= 0) {
    throw new Error('Date out of range')
  }
  if (datesDiff(new Date(), date, 'months') >= 12) {
    throw new Error('Date out of range')
  }
  if (excludeDays(date, excludedDays, skipHolidays)) {
    return 'NA'
  }
  return pypFunction(date)
}

module.exports = {
  excludeDays,
  pyp,
  buildAssetPath,
  cdnPathMaker,
  createResponse,
}
