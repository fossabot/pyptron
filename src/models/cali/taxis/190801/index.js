const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const { datesDiff } = require('../../../../helpers/date-helpers')
const { normalizeArrayIndex } = require('../../../../helpers/array-helpers')

module.exports = new PypData({
  startDate: '2019-08-01',
  decrees: [
    {
      name: 'Decreto 4112.010.20.0532 del 29 de julio de 2019',
      url: 'cdn:pdf',
    },
    {
      name: 'Decreto 0801 de 2018',
      url:
        'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=32835',
    },
    {
      name: 'Decreto 4112.010.20.0318-28/06/2018 del 28 de junio de 2018',
      url:
        'http://www.cali.gov.co/aplicaciones/boletin_publicaciones/imagenes_documentos/documentoId11660.pdf',
    },
    {
      name: 'Decreto 0001 del 4 de enero de 2018',
      url:
        'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['06:00', '05:00']], days: [] }],
  maps: [],
  observations,
  scheme: PypData.licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis.',
  ],
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2019-08-01'
    const daysDiff = datesDiff({
      startDate,
      endDate: date,
      period: 'days',
      skipHolidays: this.skipHolidays,
      daysOfWeekToSkip: this.excludeDays,
    })
    const pypNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const index = normalizeArrayIndex(daysDiff, pypNums.length)
    return [pypNums[index]]
  },
})
