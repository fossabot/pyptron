const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2019-09-10',
})
