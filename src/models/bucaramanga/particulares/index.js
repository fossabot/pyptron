const Category = require('../../../classes/category')
const motos = require('../motos')

module.exports = new Category({
  ...motos,
  vehicleClasses: [
    'Vehículos de toda clase de servicio particular y público (excepto servicio tipo taxi)',
  ],
})
