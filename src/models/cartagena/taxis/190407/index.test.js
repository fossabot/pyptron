const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-03-04', // Lunes
    pyp: [3, 4],
  },
  {
    date: '2019-03-06', // Miércoles
    pyp: [7, 8],
  },
  {
    date: '2019-04-01', // Lunes
    pyp: [5, 6],
  },
  {
    date: '2019-04-19', // Viernes
    pyp: [3, 4],
  },
]
testCases(category, dateCases)
testInfo(category)
