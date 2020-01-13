const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-10-23',
    pyp: [1, 2],
  },
  {
    date: '2019-10-31',
    pyp: [3, 4],
  },
  {
    date: '2019-12-13',
    pyp: [5, 6],
  },
]
testCases(category, dateCases)
testInfo(category)
