const { getHoliday } = require('pascua')
const config = require('../config')
const { daysDiff, newISODate, datesDiff } = require('../helpers/dateHelpers')

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

/**
 * Calcula el índice para cuando el valor del índice es mayor al largo del array o en caso de que se
 * tenga un valor negativo para el índice. Si el valor es negativo el valor correspondiente al
 * indice se calcula de atrás hacia adelante. Es decir, -1 equivale al último elemento del array y
 * -array.length equivale al primer elemento del array.
 * @param {int} index Valor para el cual se desea calcular el índice correspondiente en el array.
 * @param {int} arrLen Largo del array.
 * @returns {int} El índice - en caso de ser negativo corresponde al indice de atrás hacia adelante.
 */
function getIndex(index, arrLen) {
  return ((index % arrLen) + arrLen) % arrLen
}

/**
 * Rota los elementos de un array desplazando sus elementos según la cantidad indicada en el offset
 * de izquierda a derecha. Por ejemplo:
 *   arrRotate([1, 2, 3], 1) // [3, 1, 2]
 *   arrRotate([1, 2, 3], -1) // [2, 3, 1]
 * @param {array} arr El array cuyos elementos se desean rotar.
 * @param {int} offset Número de elementos que se desea desplazar el array.
 * @returns {array} Un nuevo array con los valores desplazados según el offset.
 */
function arrRotate(arr, offset) {
  const arrOffset = offset % arr.length
  let head = []
  let tail = []
  if (arrOffset >= 0) {
    head = arr.slice(arr.length - arrOffset)
    tail = arr.slice(0, arr.length - arrOffset)
  } else {
    head = arr.slice(-arrOffset)
    tail = arr.slice(0, -arrOffset)
  }
  return head.concat(tail)
}

/**
 * Rota los elementos de pypNums según la diferencia de días
 * @param {string} date Fecha para la cual se desea saber el valor final tras la rotación.
 * @param {string} startDate Fecha que corresponde con el valor inicial de la rotación.
 * @param {string} startNums Valor inicial en la fecha inicial de los valores que se desean rotar.
 * @param {array} pypNums Valores que se desean rotar.
 * @param {array} skip Días de la semana que se desean saltar en la rotación.
 * @returns {string} Valor de pypNums correspondiente a date tras la rotación de los elementos.
 */
function rotateByDay(date, startDate, startNums, pypNums, skip = [0]) {
  // eslint-disable-next-line no-unmodified-loop-condition
  let daysLapse = daysDiff(startDate, date, { skip })
  daysLapse += pypNums.indexOf(startNums) - 1
  return pypNums[daysLapse % pypNums.length]
}

/**
 * Rota los valores de un array una vez por cada periodo especificado en el argumento period.
 * @param {string} date La fecha para la cual se desea obtener el resultado tras la rotación.
 * @param {string} startDate La fecha en que inicia la rotación.
 * @param {string} startNums Los valores iniciales para la rotación.
 * @param {array} pypNums Los valores que se van a rotar.
 * @param {int} period Period por el cual se va a realizar la rotación ("weeks", "montsh", "days").
 * @param {boolean} reverse Verdadero si se va a rotar desplazándo de derecha a izquierda.
 * @param {int} interval Periodicidad con que se rotan los valores en el lapso de la función.
 * @returns {string} El valor de pypNums tras la rotación para la fecha date.
 */
function rotateBy(
  date,
  startDate,
  startNums,
  pypNums,
  period,
  reverse = false,
  interval = 1
) {
  const dateObject = newISODate(date)
  const startDateObject = newISODate(startDate)
  const pypOffset = pypNums.indexOf(startNums)
  const diff = datesDiff(startDateObject, dateObject, period)
  const lapse = Math.ceil((reverse ? -diff : diff) / interval)
  const pypArray = arrRotate(pypNums, lapse - pypOffset)
  // La diferencia entre mDate.day() y mStartDate.day() puede ser negativa por lo tanto calculamos el índice en caso de que sea negativo, en cuyo caso el cálculo se haría de atrás hacia adelante, siendo -1 el último elemento del array.
  const index = getIndex(
    dateObject.getDay() - startDateObject.getDay(),
    pypArray.length
  )
  return pypArray[index]
}

/**
 * Rota los valores de un array según el número de semana que hayan pasado entre startDate y date.
 * @param {string} date La fecha para la cual se desea obtener el resultado tras la rotación.
 * @param {string} startDate La fecha en que inicia la rotación.
 * @param {string} startNums Los valores iniciales para la rotación.
 * @param {array} pypNums Los valores que se van a rotar.
 * @param {boolean} reverse Verdadero si se va a rotar desplazándo de derecha a izquierda.
 * @param {int} interval Periodicidad con que se rotan los valores en el lapso de la función.
 * @returns {string} El valor de pypNums tras la rotación para la fecha date.
 */
function rotateByWeek(
  date,
  startDate,
  startNums,
  pypNums,
  reverse = false,
  interval = 1
) {
  return rotateBy(
    date,
    startDate,
    startNums,
    pypNums,
    'weeks',
    reverse,
    interval
  )
}

/**
 * Rota los valores de un array según el número de meses que hayan pasado entre startDate y date.
 * @param {string} date La fecha para la cual se desea obtener el resultado tras la rotación.
 * @param {string} startDate La fecha en que inicia la rotación.
 * @param {string} startNums Los valores iniciales para la rotación.
 * @param {array} pypNums Los valores que se van a rotar.
 * @param {boolean} reverse Verdadero si se va a rotar desplazándo de derecha a izquierda.
 * @param {int} interval Periodicidad con que se rotan los valores en el lapso de la función.
 * @returns {string} El valor de pypNums tras la rotación para la fecha date.
 */
function rotateByMonth(
  date,
  startDate,
  startNums,
  pypNums,
  reverse = false,
  interval = 1
) {
  return rotateBy(
    date,
    startDate,
    startNums,
    pypNums,
    'months',
    reverse,
    interval
  )
}

module.exports = {
  excludeDays,
  pyp,
  getIndex,
  arrRotate,
  rotateByDay,
  rotateBy,
  rotateByWeek,
  rotateByMonth,
  buildAssetPath,
  createResponse,
}
