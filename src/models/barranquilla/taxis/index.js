const { licensePlateScheme } = require('../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')
const {
  getArrayElementAfterRotating,
} = require('../../../helpers/arrayHelpers')

module.exports = {
  days: [
    'Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    { name: 'Decreto 0205 de 2009', url: 'cdn:pdf' },
    {
      name: 'BOLETÍN  229',
      url:
        'http://www.barranquilla.gov.co/transito/index.php?option=com_content  info,view=article  info,id=16213:se-mantiene-el-pico-y-placa-para-taxis-en-el-2018  info,catid=36:boletines  info,Itemid=30',
    },
  ],
  exceptions,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
  excludedDays: [0, 6],
  skipHolidays: true,
  pypFunction(date) {
    const startDate = '2018-01-01'
    const pypNums = ['5-6', '7-8', '9-0', '1-2', '3-4']
    return getArrayElementAfterRotating({
      date,
      startDate,
      period: 'weeks',
      array: pypNums,
      reverse: true,
    })
  },
}
