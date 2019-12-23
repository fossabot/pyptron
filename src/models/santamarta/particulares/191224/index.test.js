const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-12-24',
    pyp: [],
  },
  {
    date: '2019-12-26',
    pyp: [2, 3],
  },
  {
    date: '2019-12-31',
    pyp: [],
  },
]
testCases(category, dateCases)
testInfo(category)
