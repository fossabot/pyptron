const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./')

const dateCases = [
  {
    date: '2019-12-26',
    pyp: [],
  },
  {
    date: '2020-01-03',
    pyp: [],
  },
  {
    date: '2020-01-07',
    pyp: [1, 3, 5, 7, 9],
  },
]
testCases(category, dateCases)
testInfo(category)
