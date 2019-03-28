const { testCases, testInfo } = require('../../../helpers/testsHelpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: [5, 6],
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: [7, 8],
  },
]
testCases(category, dateCases)
testInfo(category)
