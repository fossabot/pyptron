const { daysDiff, newISODate, datesDiff } = require('./dateHelpers')

module.exports = {
  normalizeArrayIndex,
  moveArrayElementsToTheRight,
  getArrayElementAfterRotating,
  rotateByDay,
  rotateByWeek,
  rotateByMonth,
}

/**
 * Calcula el índice para cuando el valor del índice es mayor al largo del array o en caso de que se tenga un valor negativo para el índice. Si el valor es negativo el valor correspondiente al indice se calcula de atrás hacia adelante. Es decir, -1 equivale al último elemento del array y -array.length equivale al primer elemento del array.
 * @param {int} index Valor para el cual se desea calcular el índice correspondiente en el array.
 * @param {int} arrayLength Largo del array.
 * @returns {int} El índice - en caso de ser negativo corresponde al indice de atrás hacia adelante.
 */
function normalizeArrayIndex(index, arrayLength) {
  return ((index % arrayLength) + arrayLength) % arrayLength
}

/**
 * Rota los elementos de un array desplazando sus elementos según la cantidad indicada en el offset de izquierda a derecha. Por ejemplo:
 *   moveArrayElementsToTheRight([1, 2, 3], 1) // [3, 1, 2]
 *   moveArrayElementsToTheRight([1, 2, 3], -1) // [2, 3, 1]
 * @param {array} array El array cuyos elementos se desean rotar.
 * @param {int} offset Número de elementos que se desea desplazar el array.
 * @returns {array} Un nuevo array con los valores desplazados según el offset.
 */
function moveArrayElementsToTheRight(array, offset) {
  const arrOffset = offset % array.length
  let head = []
  let tail = []
  if (arrOffset >= 0) {
    head = array.slice(array.length - arrOffset)
    tail = array.slice(0, array.length - arrOffset)
  } else {
    head = array.slice(-arrOffset)
    tail = array.slice(0, -arrOffset)
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
function rotateByDay(options) {
  const { date, startDate, initialElementOfArray, array, skip = [0] } = options
  let daysLapse = daysDiff(startDate, date, { skip })
  daysLapse += array.indexOf(initialElementOfArray) - 1
  return array[daysLapse % array.length]
}

/**
 * Rota los valores de un array una vez por cada periodo especificado en el argumento period.
 * @param {string} date La fecha para la cual se desea obtener el resultado tras la rotación.
 * @param {string} startDate La fecha en que inicia la rotación.
 * @param {string} initialElementOfArray Los valores iniciales para la rotación.
 * @param {array} array Los valores que se van a rotar.
 * @param {int} period Period por el cual se va a realizar la rotación ("weeks", "montsh", "days").
 * @param {boolean} reverse Verdadero si se va a rotar desplazándo de derecha a izquierda.
 * @param {int} interval Periodicidad con que se rotan los valores en el lapso de la función.
 * @returns {string} El valor de pypNums tras la rotación para la fecha date.
 */
function getArrayElementAfterRotating(options) {
  const {
    date,
    startDate,
    initialElementOfArray,
    array,
    period,
    reverse = false,
    interval = 1,
  } = options
  const dateObject = newISODate(date)
  const startDateObject = newISODate(startDate)
  const pypOffset = array.indexOf(initialElementOfArray)
  const diff = datesDiff(startDateObject, dateObject, period)
  const lapse = Math.ceil((reverse ? -diff : diff) / interval)
  const pypArray = moveArrayElementsToTheRight(array, lapse - pypOffset)
  const index = normalizeArrayIndex(
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
function rotateByWeek(options) {
  const {
    date,
    startDate,
    initialElementOfArray,
    array,
    reverse = false,
    interval = 1,
  } = options
  return getArrayElementAfterRotating({
    date,
    startDate,
    initialElementOfArray,
    array,
    period: 'weeks',
    reverse,
    interval,
  })
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
function rotateByMonth(options) {
  const {
    date,
    startDate,
    initialElementOfArray,
    array,
    reverse = false,
    interval = 1,
  } = options
  return getArrayElementAfterRotating({
    date,
    startDate,
    initialElementOfArray,
    array,
    period: 'months',
    reverse,
    interval,
  })
}
