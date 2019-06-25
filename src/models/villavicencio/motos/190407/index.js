const PypData = require('../../../../classes/pyp-data')
const particulares = require('../../particulares/190407')
const exceptions = require('./exceptions.md')

module.exports = new PypData({
  ...particulares,
  exceptions,
  vehicleClasses: ['Motocicletas y motocarros de servicio particular'],
})
