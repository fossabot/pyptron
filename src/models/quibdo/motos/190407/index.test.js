const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: [1, 2, 3, 4],
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: [9, 0, 1, 2],
  },
]
testCases(category, dateCases)
testInfo(category)
