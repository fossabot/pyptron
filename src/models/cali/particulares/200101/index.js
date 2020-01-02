const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2020-01-01',
  pypFunction() {
    return []
  },
})