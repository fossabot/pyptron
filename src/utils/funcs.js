import moment, { locale } from "moment";

import { getHoliday } from "pascua";

locale("es_CO");

export function pyp(date, na, holidays, specialProcessing) {
  if (this.excludeDays(date, na, holidays)) {
    return "NA";
  }
  return specialProcessing(date);
}
export function daysDiff(startDate, endDate, skip = [0]) {
  const mCurrentDate = moment(startDate);
  const mEndDate = moment(endDate);
  let daysLapse = 0;
  while (mCurrentDate <= mEndDate) {
    if (skip.length === 0) {
      daysLapse += 1;
    } else {
      for (let i = 0; i < skip.length; i += 1) {
        if (mCurrentDate.day() !== skip[i]) {
          daysLapse += 1;
        }
      }
    }
    mCurrentDate.add(1, "days");
  }
  return daysLapse;
}
export function getIndex(index, arrLen) {
  return (index % arrLen + arrLen) % arrLen;
}
export function getWeek(date) {
  return moment(date).week();
}
export function getDate(date) {
  return moment(date).date();
}
export function getDay(date) {
  return moment(date).day();
}
export function formatDate(date, format) {
  return moment(date).format(format);
}
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
export function excludeDays(date, days, holidays = true) {
  const mDate = moment(date);
  if (days.indexOf(mDate.day()) !== -1) {
    return true;
  }
  if (holidays && getHoliday(mDate.toDate())) {
    return true;
  }
  return false;
}
export function rotateByDay(date, startDate, startNums, pypNums, skip = [0]) {
  const mDate = moment(date);
  const mStartDate = moment(startDate);
  // eslint-disable-next-line no-unmodified-loop-condition
  let daysLapse = this.daysDiff(mStartDate, mDate, skip);
  daysLapse += pypNums.indexOf(startNums) - 1;
  return pypNums[daysLapse % pypNums.length];
}
export function rotateByWeek(
  date,
  startDate,
  startNums,
  pypNums,
  reverse = false,
  interval = 1
) {
  return this.rotateBy(
    date,
    startDate,
    startNums,
    pypNums,
    "weeks",
    reverse,
    interval
  );
}
export function rotateByMonth(
  date,
  startDate,
  startNums,
  pypNums,
  reverse = false,
  interval = 1
) {
  return this.rotateBy(
    date,
    startDate,
    startNums,
    pypNums,
    "months",
    reverse,
    interval
  );
}
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
  const pypArray = this.arrRotate(pypNums, lapse - pypOffset);
  // La diferencia entre mDate.day() y mStartDate.day() puede ser negativa por lo tanto calculamos
  // el índice en caso de que sea negativo, en cuyo caso el cálculo se haría de atrás hacia
  // adelante, siendo -1 el último elemento del array.
  const index = this.getIndex(mDate.day() - mStartDate.day(), pypArray.length);
  return pypArray[index];
}
