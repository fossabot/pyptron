const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: [1, 3],
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: [5, 7],
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: '2019-01-30',
    pyp: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
]
testCases(category, dateCases)
testInfo(category)
