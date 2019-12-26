const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-01-15',
    pyp: [0],
  },
  {
    date: '2019-01-20',
    pyp: [7],
  },
  {
    date: '2019-02-08',
    pyp: [9],
  },
  {
    date: '2019-06-12',
    pyp: [3],
  },
  {
    date: '2019-08-11',
    pyp: [6],
  },
  {
    date: '2019-12-06',
    pyp: [2],
  },
  {
    date: '2019-12-09',
    pyp: [5],
  },
]
testCases(category, dateCases)
testInfo(category)
