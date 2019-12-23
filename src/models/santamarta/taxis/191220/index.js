const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const { rangeInclude } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2019-12-20',
  pypFunction(date) {
    return rangeInclude({
      startDate: '2019-12-20',
      endDate: '2020-01-07',
      date,
    })
      ? []
      : pyp190407.pypFunction(date)
  },
})
