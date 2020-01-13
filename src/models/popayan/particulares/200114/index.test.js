const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2020-01-13',
    pyp: [5, 6],
  },
  {
    date: '2020-06-30',
    pyp: [7, 8],
  },
  {
    date: '2020-07-01',
    pyp: [7, 8],
  },
  {
    date: '2020-07-06',
    pyp: [3, 4],
  },
]
testCases(category, dateCases)
testInfo(category)
