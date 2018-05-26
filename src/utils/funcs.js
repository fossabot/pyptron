import moment, { locale } from "moment";

import { getHoliday } from "pascua";

locale("es_CO");

/**
 * Excluye una fecha si corresponde a alguno de los días de exclusión o si es festivo en caso de
 * que se incluyan los fetivos como motivo de exclusión.
 * @param {string} date Fecha para la cual se desea determinar si se excluye o no
 * @param {array} days Días de la semana que se desean excluir. Domingo = 0 y Sábado = 6.
 * @param {boolean} holidays Si se desea incluir los festivos como motivo de exclusión.
 * @returns {boolean} Verdadero si la fecha es excluida de lo contrario falso.
 */
export function excludeDays(date, days, holidays = true) {
  const mDate = moment(date);
  return days.includes(mDate.day()) || (holidays && getHoliday(mDate.toDate()));
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
export function pyp(date, na, holidays, specialProcessing) {
  if (excludeDays(date, na, holidays)) {
    return "NA";
  }
  return specialProcessing(date);
}

/**
 * Calcula la cantidad de días de diferencia entre una fecha inicia y una fecha final. Por defecto,
 * se excluyen los domingos.
 * @param {string} startDate Fecha inicial.
 * @param {string} endDate Fecha final.
 * @param {array} skip Días de la semana que se omiten. 0 = Domingo.
 * @param {boolean} skipHolidays Si se incluyen los festivos en el conteo
 * @param {array} specialDates Fechas especiales que se desean saltar en el conteo.
 * @returns {number} Cantidad de días de difencia entre la fecha inicial y la fecha final.
 */
export function daysDiff(
  startDate,
  endDate,
  skip = [0],
  skipHolidays = false,
  specialDates = []
) {
  const mCurrentDate = moment(startDate);
  const mEndDate = moment(endDate);
  let daysLapse = 0;

  while (mCurrentDate <= mEndDate) {
    if (specialDates.includes(mCurrentDate.format("YYYY-MM-DD"))) {
      mCurrentDate.add(1, "days");
      continue; // eslint-disable-line no-continue
    }

    if (skipHolidays) {
      if (getHoliday(mCurrentDate.toDate())) {
        mCurrentDate.add(1, "days");
        continue; // eslint-disable-line no-continue
      }
    }

    if (skip.includes(mCurrentDate.day())) {
      mCurrentDate.add(1, "days");
      continue; // eslint-disable-line no-continue
    }

    daysLapse += 1;
    mCurrentDate.add(1, "days");
  }
  return daysLapse;
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
export function getIndex(index, arrLen) {
  return (index % arrLen + arrLen) % arrLen;
}

/**
 * Obtiene el mes de una fecha dada en donde enero = 1 y diciembre = 12.
 * @param {string} date Fecha para la cual se desea obtener el mes.
 * @returns {int} Número del mes de la fecha dada. Enero = 1.
 */
export function getMonth(date) {
  return moment(date).month() + 1;
}

/**
 * Obtiene el número de semana en el año para una fecha dada.
 * @param {string} date Fecha para la cual se desea obtener el número de semana.
 * @returns {int} Número de semana del año en que cae la fecha dada.
 */
export function getWeek(date) {
  return moment(date).week();
}

/**
 * Extrae la fecha (día) de una fecha dada.
 * @param {string} date Fecha para la cual se desea extraer el día de la fecha.
 * @returns {int} El día de la fecha.
 */
export function getDate(date) {
  return moment(date).date();
}

/**
 * Obtiene el día de la semana de una fecha dada en donde domingo = 0 y sábado = 6.
 * @param {string} date Fecha para la cual se desea obtener el día de la semana.
 * @returns {int} El día de la semana de la fecha dada.
 */
export function getDay(date) {
  return moment(date).day();
}

/**
 * Da formato el formato deseado a una fecha. Por ejemplo:
 *   formatDate("01/01/2017", "YYYY-MM-DD") // 2017-01-01
 * @param {string} date Fecha a la que se le desea dar formato.
 * @param {string} format Formato que se desea aplicar usando los formatos de momentjs.
 * @returns {string} La fecha en con el formato solicitado.
 */
export function formatDate(date, format) {
  return moment(date).format(format);
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
export function arrRotate(arr, offset) {
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
export function rotateByDay(date, startDate, startNums, pypNums, skip = [0]) {
  const mDate = moment(date);
  const mStartDate = moment(startDate);
  // eslint-disable-next-line no-unmodified-loop-condition
  let daysLapse = daysDiff(mStartDate, mDate, skip);
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
export function rotateBy(
  date,
  startDate,
  startNums,
  pypNums,
  period,
  reverse = false,
  interval = 1
) {
  const mDate = moment(date);
  const mStartDate = moment(startDate);
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
export function rotateByWeek(
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
export function rotateByMonth(
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
