const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-08-01',
    pyp: [1],
  },
  {
    date: '2019-08-05',
    pyp: [5],
  },
  {
    date: '2019-09-20',
    pyp: [1],
  },
  {
    date: '2019-10-23',
    pyp: [4],
  },
  {
    date: '2019-11-11',
    pyp: [3],
  },
  {
    date: '2019-12-25',
    pyp: [7],
  },
]
testCases(category, dateCases)
testInfo(category)
