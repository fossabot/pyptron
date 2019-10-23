const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const pypParticulares191022 = require('../../particulares/191022')

module.exports = new PypData({
  ...pypParticulares191022,
  vehicleClasses: pyp190407.vehicleClasses,
  scheme: pyp190407.scheme,
})
