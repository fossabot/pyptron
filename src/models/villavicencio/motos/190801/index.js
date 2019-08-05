const PypData = require('../../../../classes/pyp-data')
const particulares = require('../../particulares/190801')

module.exports = new PypData({
  ...particulares,
  vehicleClasses: ['Motocicletas y motocarros de servicio particular'],
})
