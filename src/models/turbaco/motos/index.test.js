const { testCases, testInfo } = require('../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: [1, 3, 5, 7, 9],
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: [0, 2, 4, 5, 8],
  },
]
testCases(category, dateCases)
testInfo(category)
