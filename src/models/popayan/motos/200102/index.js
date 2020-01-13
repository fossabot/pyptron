const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const pypParticulares200102 = require('../../particulares/200102')

module.exports = new PypData({
  ...pypParticulares200102,
  vehicleClasses: pyp190407.vehicleClasses,
  scheme: pyp190407.scheme,
})
