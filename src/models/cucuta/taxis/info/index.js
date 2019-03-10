const { licensePlateScheme } = require('../../../../helpers/globalHelpers')
const exceptions = require('./exceptions.md')
const observations = require('./observations.md')

module.exports = {
  days: ['Lunes a viernes hábiles'],
  decrees: [
    {
      name: 'Decreto 0300 de 2019',
      url: 'cdn:pdf',
    },
    {
      name: 'Decreto 0221 de 2019',
      url: 'cdn:pdf',
    },
    {
      name: 'Decretos 0239 del 4 de abril del 2017',
      url:
        'http://www.areacucuta.com/wp-content/uploads/2017/04/Decreto-Pico-y-Placa-Placa-y-D%C3%ADa.pdf',
    },
    {
      name: 'Decretos 0330 del 22 de mayo del 2017',
      url:
        'http://cucutaonline.com/wp-content/uploads/2017/05/Decreto-0330-pico-placa-modificado.pdf',
    },
  ],
  exceptions,
  hours: [{ comment: '', hours: [['7:00', '23:00']], days: [] }],
  maps: [],
  observations,
  scheme: licensePlateScheme.lastNumber,
  vehicleClasses: [
    'Vehículos de transporte público individual de pasajeros - Taxis',
  ],
}
