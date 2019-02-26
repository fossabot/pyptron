/* eslint no-use-before-define: 0 */

const { getHoliday } = require('pascua')

module.exports = {
  formatDate,
  generateISOString,
  newISODate,
  getWeek,
  getNthDayOfMonth,
  daysDiff,
  weeksDiff,
  monthsDiff,
  yearsDiff,
  datesDiff,
}

/**
 * Convierte una fecha a una cadena de texto usando el formato YYYY-MM-DD con la fecha local.
 * @param {String} date Fecha a la que se le desea dar formato.
 * @returns {String} La fecha en con el formato solicitado.
 */
function formatDate(date) {
  const dateObject = newISODate(date)
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()
  const paddedDay = day < 10 ? `0${day}` : day
  const paddedMonth = month < 10 ? `0${month}` : month
  return `${year}-${paddedMonth}-${paddedDay}`
}

/**
 * Crea una fecha usando el formato ISO 8601 con la zona horaria de Colombia en caso de que no se indique otra zona horaria.
 * @param {String} date Cadena de texto con la fecha
 * @param {String} timeOffset Desplazamiento de la zona horaria.
 * @returns {Date} La fecha con la zona horaria incluida si no la traía.
 */
function newISODate(date, timeOffset = '-05:00') {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    // Devolvemos una copia del objecto para no modificar el original
    return new Date(date)
  }
  return new Date(generateISOString(date, timeOffset))
}

/**
 * Agrega la hora y la zona horaria a una cadena de texto que representa la fecha en formato YYYY-DD-MM, esto para que al crear una fecha no se haga sin el formato ISO incluyendo la zona horaria y así evitar problemas de saltos de fecha por esto.
 * @param {String} date Cadena de texto con la fecha en formato YYYY-MM-DD.
 * @param {String} timeOffset Desplazamiento de la zona horaria.
 * @returns {String} La fecha con la zona horaria incluida si no la traía.
 */
function generateISOString(date, timeOffset = '-05:00') {
  return date.length === 10 ? `${date}T00:00:00.000${timeOffset}` : date
}

/**
 * Obtiene el número de semana en el año para una fecha dada.
 * @param {String} date Fecha para la cual se desea obtener el número de semana.
 * @returns {int} Número de semana del año en que cae la fecha dada.
 */
function getWeek(date) {
  const millisecondsInADay = 1000 * 60 * 60 * 24
  const daysInAWeek = 7
  const currentDate = new Date(date)
  const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1)
  const daysPassFirstDayOfYear =
    (currentDate - firstDayOfYear) / millisecondsInADay
  return Math.ceil(
    (daysPassFirstDayOfYear + firstDayOfYear.getDay() + 1) / daysInAWeek
  )
}

/**
 * Permite saber un día n del mes, por ejemplo, el segundo o el último viernes de un mes dado. Por ejemplo, para consultar el último domingo de diciembre de 2014:
 * getNthDayOfMonth(2012, 12, 0, -1)
 * @param {number} year El año para el cual queremos la fecha
 * @param {number} month El mes para el cual queremos la fecha (0 = Enero)
 * @param {number} dayOfWeek El día que queremos saber (0 = Domingo)
 * @param {number} index La posición del día que queremos saber. -1 = último, 0 = primero, 1 = segundo, etc...
 * @return {date} La fecha correspondiente al día n solicitado.
 */
function getNthDayOfMonth(year, month, dayOfWeek, index) {
  const backwards = index < 0
  const offset = (index + (backwards ? 1 : 0)) * 7
  const date = new Date(
    year,
    month + (backwards ? 1 : 0),
    (backwards ? 0 : 1) + offset
  )
  while (date.getDay() !== dayOfWeek) {
    date.setDate(date.getDate() + (backwards ? -1 : 1))
  }
  return date
}

/**
 * Calcula la cantidad de días de diferencia entre una fecha inicial y una fecha final. Por defecto, se excluyen los domingos.
 * @param {String} startDate Fecha inicial.
 * @param {String} endDate Fecha final.
 * @param {Object} options Días de la semana que se omiten. 0 = Domingo.
 * @param {Array} options.skip Días de la semana que se omiten. 0 = Domingo.
 * @param {Boolean} options.skipHolidays Si se incluyen los festivos en el conteo
 * @param {Array} options.specialDates Fechas especiales que se desean saltar en el conteo.
 * @returns {number} Cantidad de días de difencia entre la fecha inicial y la fecha final.
 */
function daysDiff(startDate, endDate, options = {}) {
  const { skip = [], skipHolidays = false, specialDates = [] } = options
  // Si el argumento `date` solo tiene diez caracteres quiere decir que no se ha
  // indicado la zona horaria por lo que asumimos la zona horario de Colombia.
  // Usamos el formato ISO
  const currentDateObject = newISODate(startDate)
  const endDateObject = newISODate(endDate)
  let daysLapse = 0

  while (currentDateObject <= endDateObject) {
    if (specialDates.includes(formatDate(currentDateObject))) {
      currentDateObject.setDate(currentDateObject.getDate() + 1)
      continue // eslint-disable-line no-continue
    }

    if (skipHolidays) {
      if (getHoliday(currentDateObject)) {
        currentDateObject.setDate(currentDateObject.getDate() + 1)
        continue // eslint-disable-line no-continue
      }
    }

    if (skip.includes(currentDateObject.getDay())) {
      currentDateObject.setDate(currentDateObject.getDate() + 1)

      continue // eslint-disable-line no-continue
    }
    daysLapse += 1
    currentDateObject.setDate(currentDateObject.getDate() + 1)
  }
  return daysLapse
}

/**
 * Calcula la cantidad de semanas de diferencia entre una fecha inicial y una fecha final.
 * @param {string} startDate Fecha inicial.
 * @param {string} endDate Fecha final.
 * @returns {number} Cantidad de semanas de difencia entre la fecha inicial y la fecha final.
 */
function weeksDiff(startDate, endDate) {
  const daysLapse = daysDiff(startDate, endDate)
  return Math.floor(daysLapse / 7)
}

/**
 * Devuelve la cantidad de meses entre dos fechas dadas
 * @param {string} startDate Fecha inicial.
 * @param {string} endDate Fecha final.
 * @param {int} interval Intervalo de meses para calcular la diferencia.
 * @returns {number} Cantidad de meses de diferencia entre la fecha inicial y la fecha final.
 */
function monthsDiff(startDate, endDate, interval = 1) {
  const d1 = newISODate(startDate)
  const d2 = newISODate(endDate)
  let monthsLapse =
    d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear())
  if (d2.getDate() < d1.getDate()) {
    monthsLapse -= 1
  }
  return Math.floor(monthsLapse / interval)
}

/**
 * Devuelve la cantidad de meses entre dos fechas dadas
 * @param {string} startDate Fecha inicial.
 * @param {string} endDate Fecha final.
 * @param {int} interval Intervalo de meses para calcular la diferencia.
 * @returns {number} Cantidad de meses de diferencia entre la fecha inicial y la fecha final.
 */
function yearsDiff(startDate, endDate) {
  return monthsDiff(startDate, endDate, 12)
}

/**
 * Calcula la cantidad de días de diferencia entre una fecha inicial y una fecha final. Por defecto, se excluyen los domingos.
 * @param {String} startDate Fecha inicial.
 * @param {String} endDate Fecha final.
 * @param {String} period Intervalo que se desea calcular: "days", "weeks", "months"
 * @returns {Number} La diferencia según el periodo especificado
 * */
function datesDiff(startDate, endDate, period) {
  switch (period) {
    case 'days':
      return daysDiff(startDate, endDate)
    case 'weeks':
      return weeksDiff(startDate, endDate)
    case 'months':
      return monthsDiff(startDate, endDate)
    case 'years':
      return yearsDiff(startDate, endDate)
    default:
      break
  }
  return undefined
}
