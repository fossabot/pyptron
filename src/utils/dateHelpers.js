/* eslint no-use-before-define: 0 */

const dayjs = require('dayjs')
const weekOfYear = require('dayjs/plugin/weekOfYear')
const { getHoliday } = require('pascua')

module.exports = {
  formatDate,
  ISOString,
  getWeek,
  getNthDayOfMonth,
  daysDiff,
  weeksDiff,
  monthsDiff,
}

/**
 * Da formato el formato deseado a una fecha. Por ejemplo:
 *   formatDate("01/01/2017", "YYYY-MM-DD") // 2017-01-01
 * @param {string} date Fecha a la que se le desea dar formato.
 * @param {string} format Formato que se desea aplicar.
 * @returns {string} La fecha en con el formato solicitado.
 */
function formatDate(date, format) {
  return dayjs(date).format(format)
}

/**
 * Agrega la hora y la zona horaria a una cadena de texto que representa la
 * en caso de que no la tenga, esto para que al crear una fecha no se haga sin
 * el formato ISO incluyendo la zona horaria y así evitar problemas de saltos
 * de fecha por esto.
 * @param {string} date Cadena de texto con la fecha.
 * @param {string} timeOffset Desplazamiento de la zona horaria.
 * @returns {string} La fecha con la zona horaria incluida si no la traía.
 */
function ISOString(date, timeOffset = '-05:00') {
  return date.length === 10 ? `${date}T00:00:00.000${timeOffset}` : date
}

/**
 * Obtiene el número de semana en el año para una fecha dada.
 * @param {string} date Fecha para la cual se desea obtener el número de semana.
 * @returns {int} Número de semana del año en que cae la fecha dada.
 */
function getWeek(date) {
  dayjs.extend(weekOfYear)
  return dayjs(date).week()
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
 * @param {string} startDate Fecha inicial.
 * @param {string} endDate Fecha final.
 * @param {array} skip Días de la semana que se omiten. 0 = Domingo.
 * @param {boolean} skipHolidays Si se incluyen los festivos en el conteo
 * @param {array} specialDates Fechas especiales que se desean saltar en el conteo.
 * @returns {number} Cantidad de días de difencia entre la fecha inicial y la fecha final.
 */
function daysDiff(
  startDate,
  endDate,
  skip = [0],
  skipHolidays = false,
  specialDates = []
) {
  // Si el argumento `date` solo tiene diez caracteres quiere decir que no se ha
  // indicado la zona horaria por lo que asumimos la zona horario de Colombia.
  // Usamos el formato ISO
  const ISOStartDate =
    startDate.length === 10 ? `${startDate}T00:00:00.000-05:00` : startDate
  const ISOEndDate =
    endDate.length === 10 ? `${endDate}T00:00:00.000-05:00` : endDate
  const cDateObject = new Date(ISOStartDate)
  const eDateObject = new Date(ISOEndDate)
  let daysLapse = 0

  while (cDateObject <= eDateObject) {
    if (specialDates.includes(dayjs(cDateObject).format('YYYY-MM-DD'))) {
      cDateObject.setDate(cDateObject.getDate() + 1)
      continue // eslint-disable-line no-continue
    }

    if (skipHolidays) {
      if (getHoliday(cDateObject)) {
        cDateObject.setDate(cDateObject.getDate() + 1)
        continue // eslint-disable-line no-continue
      }
    }

    if (skip.includes(cDateObject.getDay())) {
      cDateObject.setDate(cDateObject.getDate() + 1)

      continue // eslint-disable-line no-continue
    }
    daysLapse += 1
    cDateObject.setDate(cDateObject.getDate() + 1)
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
  const daysLapse = daysDiff(startDate, endDate, [])
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
  const mDate = dayjs(endDate)
  const diff = Math.floor(mDate.diff(startDate, 'months') / interval)
  return diff
}
