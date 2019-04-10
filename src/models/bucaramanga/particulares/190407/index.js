const PypData = require('../../../../classes/pyp-data')
const motos = require('../../motos/190407')

module.exports = new PypData({
  startDate: '2019-04-07',
  ...motos,
  vehicleClasses: [
    'Vehículos de toda clase de servicio particular y público (excepto servicio tipo taxi)',
  ],
})
