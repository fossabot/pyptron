const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes
    pyp: [1, 2],
  },
  {
    date: '2018-05-16', // miércoles
    pyp: [5, 6],
  },
  {
    date: '2019-01-30',
    pyp: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
]
testCases(category, dateCases)
testInfo(category)
