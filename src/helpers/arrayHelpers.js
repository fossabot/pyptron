const { newISODate, datesDiff } = require('./dateHelpers')

module.exports = {
  normalizeArrayIndex,
  moveArrayElementsToTheRight,
  getArrayElementAfterRotating,
}

function normalizeArrayIndex(index, arrayLength) {
  return ((index % arrayLength) + arrayLength) % arrayLength
}

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
    const daysLapse =
      datesDiff({
        startDate,
        endDate: date,
        period: 'days',
        daysOfWeekToSkip,
      }) - 1
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
