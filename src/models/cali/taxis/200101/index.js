const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const { rangeInclude } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2020-01-01',
  pypFunction(date) {
    if (
      rangeInclude({ startDate: '2020-01-01', endDate: '2020-01-15', date })
    ) {
      return []
    }
    return pyp190407.pypFunction(date)
  },
})
