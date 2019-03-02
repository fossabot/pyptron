const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: [
    'Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)',
  ],
  decrees: [
    { name: 'Decreto 0205 de 2009', url: 'cdn:pdf' },
    {
      name: 'BOLETÍN  229',
      url:
        'http://www.barranquilla.gov.co/transito/index.php?option=com_content&view=article&id=16213:se-mantiene-el-pico-y-placa-para-taxis-en-el-2018&catid=36:boletines&Itemid=30',
    },
  ],
  exceptions,
  hours: [{ comment: 'Todo el día', hours: [[]], days: [] }],
  maps: [],
  observations,
  scheme,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
}
