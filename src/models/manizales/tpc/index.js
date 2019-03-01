const pypFuncs = require('../../../helpers/globalHelpers')
const { datesDiff } = require('../../../helpers/dateHelpers')
const { normalizeArrayIndex } = require('../../../helpers/arrayHelpers')
const info = require('./info')

module.exports = {
  name: 'Transporte Público Colectivo',
  info,
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
      const daysLapse =
        datesDiff({
          startDate,
          endDate: date,
          period: 'days',
          daysOfWeekToSkip: [0],
        }) - 1
      const arrOffset = daysLapse % 30
      // Usamos la función normalizeArrayIndex(index, arrLen) para mantener uniformidad en el código, pero
      // perfectamente podríamos usar:
      //   const index = (Math.floor(daysLapse / 30) + arrOffset) % pypNums.length;
      const index = normalizeArrayIndex(
        Math.floor(daysLapse / 30) + arrOffset,
        pypNums.length
      )
      return pypNums[index]
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
