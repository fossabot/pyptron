const { daysDiff, newISODate, datesDiff } = require('./dateHelpers')

module.exports = {
  normalizeArrayIndex,
  moveArrayElementsToTheRight,
  getArrayElementAfterRotating,
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
    array,
    period,
    reverse = false,
    interval = 1,
    daysOfWeekToSkip = [0],
  } = options
  if (period === 'days') {
    const daysLapse = daysDiff(startDate, date, { daysOfWeekToSkip }) - 1
    return array[daysLapse % array.length]
  }
  const dateObject = newISODate(date)
  const startDateObject = newISODate(startDate)
  const diff = datesDiff({
    startDate,
    endDate: date,
    period,
    interval,
  })
  const startDateDay = startDateObject.getDay()
  const daysOffset =
    dateObject.getDay() -
    (startDateDay === 0 || startDateDay === 6 ? 1 : startDateDay)
  return array[
    normalizeArrayIndex((reverse ? diff : -diff) + daysOffset, array.length)
  ]
}
