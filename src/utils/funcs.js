const dayjs = require("dayjs");
const weekOfYear = require("dayjs/plugin/weekOfYear");
const { getHoliday } = require("pascua");

/**
 * Excluye una fecha si corresponde a alguno de los días de exclusión o si es festivo en caso de
 * que se incluyan los fetivos como motivo de exclusión.
 * @param {string} date Fecha para la cual se desea determinar si se excluye o no
 * @param {array} days Días de la semana que se desean excluir. Domingo = 0 y Sábado = 6.
 * @param {boolean} holidays Si se desea incluir los festivos como motivo de exclusión.
 * @returns {boolean} Verdadero si la fecha es excluida de lo contrario falso.
 */
function excludeDays(date, days, holidays = true) {
  const dateObject = new Date(date);
  return (
    days.includes(dateObject.getDay()) || (holidays && getHoliday(dateObject))
  );
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
    startDate.length === 10 ? `${startDate}T00:00:00.000-05:00` : startDate;
  const ISOEndDate =
    endDate.length === 10 ? `${endDate}T00:00:00.000-05:00` : endDate;
  const cDateObject = new Date(ISOStartDate);
  const eDateObject = new Date(ISOEndDate);
  let daysLapse = 0;

  while (cDateObject <= eDateObject) {
    if (specialDates.includes(dayjs(cDateObject).format("YYYY-MM-DD"))) {
      cDateObject.setDate(cDateObject.getDate() + 1);
      continue; // eslint-disable-line no-continue
    }

    if (skipHolidays) {
      if (getHoliday(cDateObject)) {
        cDateObject.setDate(cDateObject.getDate() + 1);
        continue; // eslint-disable-line no-continue
      }
    }

    if (skip.includes(cDateObject.getDay())) {
      cDateObject.setDate(cDateObject.getDate() + 1);

      continue; // eslint-disable-line no-continue
    }
    daysLapse += 1;
    cDateObject.setDate(cDateObject.getDate() + 1);
  }
  return daysLapse;
}

/**
 * Devuelve la cantidad de meses entre dos fechas dadas
 * @param {string} startDate Fecha inicial.
 * @param {string} endDate Fecha final.
 * @param {int} interval Intervalo de meses para calcular la diferencia.
 * @returns {number} Cantidad de meses de diferencia entre la fecha inicial y la fecha final.
 */
function monthsDiff(startDate, endDate, interval = 1) {
  const mDate = dayjs(endDate);
  const diff = Math.floor(mDate.diff(startDate, "months") / interval);
  return Math.abs(diff);
}

/**
 * Envuelve el algoritmo particular para cada caso de pyp permitiendo abstraer patrones globales,
 * como el algoritmo para excluir días, del algoritmo como tal para cada caso.
 * @param {string} date La fecha para la cual se desea saber el pyp.
 * @param {array} na Días de la semana en los que no aplica el pyp.
 * @param {boolean} holidays Si los días festivos aplica el pyp.
 * @param {function} specialProcessing Algoritmo para el pyp.
 * @returns {string} El valor correspondiente al pyp para el día solicitado.
 */
function pyp(date, na, holidays, specialProcessing) {
  const startDate = "2018-01-01";
  if (daysDiff(startDate, date, []) <= 0) {
    throw new Error("Date out of range");
  }
  if (monthsDiff(Date(), date) >= 12) {
    throw new Error("Date out of range");
  }
  if (excludeDays(date, na, holidays)) {
    return "NA";
  }
  return specialProcessing(date);
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
  const backwards = index < 0;
  const offset = (index + (backwards ? 1 : 0)) * 7;
  const date = new Date(
    year,
    month + (backwards ? 1 : 0),
    (backwards ? 0 : 1) + offset
  );
  while (date.getDay() !== dayOfWeek) {
    date.setDate(date.getDate() + (backwards ? -1 : 1));
  }
  return date;
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
  return ((index % arrLen) + arrLen) % arrLen;
}

/**
 * Obtiene el mes de una fecha dada en donde enero = 1 y diciembre = 12.
 * @param {string} date Fecha para la cual se desea obtener el mes.
 * @returns {int} Número del mes de la fecha dada. Enero = 1.
 */
function getMonth(date) {
  return new Date(date).getMonth() + 1;
}

/**
 * Obtiene el número de semana en el año para una fecha dada.
 * @param {string} date Fecha para la cual se desea obtener el número de semana.
 * @returns {int} Número de semana del año en que cae la fecha dada.
 */
function getWeek(date) {
  dayjs.extend(weekOfYear);
  return dayjs(date).week();
}

/**
 * Extrae la fecha (día) de una fecha dada.
 * @param {string} date Fecha para la cual se desea extraer el día de la fecha.
 * @returns {int} El día de la fecha.
 */
function getDate(date) {
  return new Date(date).getDate();
}

/**
 * Obtiene el día de la semana de una fecha dada en donde domingo = 0 y sábado = 6.
 * @param {string} date Fecha para la cual se desea obtener el día de la semana.
 * @returns {int} El día de la semana de la fecha dada.
 */
function getDay(date) {
  return new Date(date).getDay();
}

/**
 * Da formato el formato deseado a una fecha. Por ejemplo:
 *   formatDate("01/01/2017", "YYYY-MM-DD") // 2017-01-01
 * @param {string} date Fecha a la que se le desea dar formato.
 * @param {string} format Formato que se desea aplicar.
 * @returns {string} La fecha en con el formato solicitado.
 */
function formatDate(date, format) {
  return dayjs(date).format(format);
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
  const arrOffset = offset % arr.length;
  let head = [];
  let tail = [];
  if (arrOffset >= 0) {
    head = arr.slice(arr.length - arrOffset);
    tail = arr.slice(0, arr.length - arrOffset);
  } else {
    head = arr.slice(-arrOffset);
    tail = arr.slice(0, -arrOffset);
  }
  return head.concat(tail);
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
  let daysLapse = daysDiff(startDate, date, skip);
  daysLapse += pypNums.indexOf(startNums) - 1;
  return pypNums[daysLapse % pypNums.length];
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
  const mDate = dayjs(date);
  const mStartDate = dayjs(startDate);
  const pypOffset = pypNums.indexOf(startNums);
  let lapse = 0;
  if (reverse) {
    lapse = Math.ceil(mStartDate.diff(date, period) / interval);
  } else {
    lapse = Math.ceil(mDate.diff(mStartDate, period) / interval);
  }
  const pypArray = arrRotate(pypNums, lapse - pypOffset);
  // La diferencia entre mDate.day() y mStartDate.day() puede ser negativa por lo tanto calculamos
  // el índice en caso de que sea negativo, en cuyo caso el cálculo se haría de atrás hacia
  // adelante, siendo -1 el último elemento del array.
  const index = getIndex(mDate.day() - mStartDate.day(), pypArray.length);
  return pypArray[index];
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
    "weeks",
    reverse,
    interval
  );
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
    "months",
    reverse,
    interval
  );
}

module.exports = {
  excludeDays,
  daysDiff,
  monthsDiff,
  pyp,
  getIndex,
  getMonth,
  getWeek,
  getDate,
  getDay,
  formatDate,
  arrRotate,
  rotateByDay,
  rotateBy,
  rotateByWeek,
  rotateByMonth,
  getNthDayOfMonth
};
