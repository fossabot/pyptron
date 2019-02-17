const pypFuncs = require('../utils/funcs')

module.exports = {
  name: 'Barranquilla',
  categories: {
    taxis: {
      info: {
        vehicleClasses: [
          'Vehículos de transporte público individual de pasajeros - Taxis',
        ],
        decrees: [
          {
            name: 'Decreto 0205 de 2009',
            url: pypFuncs.buildAssetPath(
              'barranquilla',
              'decreto-0205-de-2009.pdf'
            ),
          },
          {
            name: 'BOLETÍN  229',
            url:
              'http://www.barranquilla.gov.co/transito/index.php?option=com_content&view=article&id=16213:se-mantiene-el-pico-y-placa-para-taxis-en-el-2018&catid=36:boletines&Itemid=30',
          },
        ],
        days: [
          'Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)',
        ],
        hours: [
          {
            comment: 'Todo el día',
            hours: [[]],
            days: [],
          },
        ],
        scheme:
          'Cíclico de acuerdo con el último número de la placa del vehículo',
        observations: '',
      },
      name: 'Taxis',
      pyp(date) {
        return pypFuncs.pyp({
          date,
          excludedDays: [0, 6],
          skipHolidays: true,
          processingFunction() {
            const startDate = '2018-01-01'
            const startNums = '5-6'
            const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
            return pypFuncs.rotateByWeek(
              date,
              startDate,
              startNums,
              pypNums,
              true
            )
          },
        })
      },
    },
  },
}
