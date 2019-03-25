const { licensePlateScheme } = require('../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')

module.exports = {
  decrees: [
    {
      name: 'Decreto 0001 del 4 de enero de 2018',
      url:
        'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['05:00', '22:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: ['Vehículos de Transporte de Servicio Público Colectivo'],
  excludedDays: [],
  skipHolidays: false,
  pypFunction(date) {
    const startDate = '2018-01-01'
    const pypNums = ['6-7', '8-9', '0-1', '2-3', '4-5']
    return getArrayElementAfterRotating({
      date,
      startDate,
      array: pypNums,
      period: 'days',
      daysOfWeekToSkip: [],
    })
  },
}
