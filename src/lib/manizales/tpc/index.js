const pypFuncs = require('../../../utils/funcs')
const { daysDiff } = require('../../../helpers/dateHelpers')
const { getIndex } = require('../../../helpers/arrayHelpers')
const days = require('./info/days')
const decrees = require('./info/decrees')
const exceptions = require('./info/exceptions')
const hours = require('./info/hours')
const maps = require('./info/maps')
const observations = require('./info/observations')
const scheme = require('./info/scheme')
const vehicleClasses = require('./info/vehicleClasses')

module.exports = {
  name: 'Transporte Público Colectivo',
  info: {
    days,
    decrees,
    exceptions,
    hours,
    maps,
    observations,
    scheme,
    vehicleClasses,
  },
  pyp(date) {
    const options = {
      excludedDays: [0],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2017-12-11'
      // Estos datos rotan de derecha a izquierda cada 30 días sin tener el cuenta el domingo,
      // durante esos 30 días, se selecciona cada elmento según el módulo correspondiente a la
      // diferencia de días:
      //
      //   Primera rotación (arrOffset = 0):
      //   'H' 'I' 'J' 'A' 'B' 'C' 'D' 'E' 'F' 'G'
      //   =======================================
      //    0   1   2   3   4   5   6   7   8   9
      //    10  11  12  13  14  15  16  17  18  19
      //    20  21  22  23  24  25  26  27  28  29
      //
      //   Segunda rotación (arrOffset = 1):
      //   'I' 'J' 'A' 'B' 'C' 'D' 'E' 'F' 'G' 'H'
      //   =======================================
      //    0   1   2   3   4   5   6   7   8   9
      //    10  11  12  13  14  15  16  17  18  19
      //    20  21  22  23  24  25  26  27  28  30
      //
      const pypNums = ['H', 'I', 'J', 'A', 'B', 'C', 'D', 'E', 'F', 'G']
      // La diferencia en días sin tener en cuenta el domingo
      const daysLapse = daysDiff(startDate, date, { skip: [0] }) - 1
      const arrOffset = daysLapse % 30
      // Usamos la función getIndex(index, arrLen) para mantener uniformidad en el código, pero
      // perfectamente podríamos usar:
      //   const index = (Math.floor(daysLapse / 30) + arrOffset) % pypNums.length;
      const index = getIndex(
        Math.floor(daysLapse / 30) + arrOffset,
        pypNums.length
      )
      return pypNums[index]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
