const { testCases, testInfo } = require('../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-02-08',
    pyp: [3, 4],
  },
  {
    date: '2018-03-12',
    pyp: [7, 8],
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: [5, 6],
  },
]
testCases(category, dateCases)
testInfo(category)
