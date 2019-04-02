const { testCases, testInfo } = require('../../../helpers/testsHelpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: [0, 1],
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: [4, 5],
  },
]
testCases(category, dateCases)
testInfo(category)
