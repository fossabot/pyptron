const PypData = require('../../../../classes/pyp-data')
const exceptions = require('./exceptions.md')
const pypParticulares = require('../../particulares/191003')

module.exports = new PypData({
  ...pypParticulares,
  exceptions,
  scheme: PypData.licensePlateScheme.firstNumber,
  vehicleClasses: ['Motocicletas'],
})
