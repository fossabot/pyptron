const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('../190930')

const dateCases = [
  {
    date: '2019-09-30',
    pyp: [2, 3],
  },
  {
    date: '2019-10-05',
    pyp: [0, 2, 4, 6, 8],
  },
  {
    date: '2019-10-12',
    pyp: [1, 3, 5, 7, 9],
  },
  {
    date: '2019-10-19',
    pyp: [0, 2, 4, 6, 8],
  },
  {
    date: '2019-10-26',
    pyp: [1, 3, 5, 7, 9],
  },
  {
    date: '2019-10-25',
    pyp: [0, 1],
  },
]
testCases(category, dateCases)
testInfo(category)
