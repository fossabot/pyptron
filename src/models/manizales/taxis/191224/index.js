const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const { formatDate } = require('../../../../helpers/date-helpers')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2019-12-24',
  pypFunction(date) {
    return ['2019-12-24', '2019-12-31'].includes(formatDate(date))
      ? []
      : pyp190407.pypFunction(date)
  },
})
