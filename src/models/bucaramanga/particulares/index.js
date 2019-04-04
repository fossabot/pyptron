const Category = require('../../../classes/category')
const motos = require('../motos')

module.exports = new Category({
  ...motos,
  ...Category.getCategoryMetainfo('particulares'),
  vehicleClasses: [
    'Vehículos de toda clase de servicio particular y público (excepto servicio tipo taxi)',
  ],
})
