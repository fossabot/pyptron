const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const pypParticulares200114 = require('../../particulares/200114')

module.exports = new PypData({
  ...pypParticulares200114,
  vehicleClasses: pyp190407.vehicleClasses,
  scheme: pyp190407.scheme,
})
