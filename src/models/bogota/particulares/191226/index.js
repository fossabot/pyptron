const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const { rangeInclude } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2019-12-26',
  pypFunction(date) {
    rangeInclude({
      startDate: '2019-12-26',
      endDate: '2020-01-03',
      date,
    })
    return rangeInclude({
      startDate: '2019-12-26',
      endDate: '2020-01-03',
      date,
    })
      ? []
      : pyp190407.pypFunction(date)
  },
})
