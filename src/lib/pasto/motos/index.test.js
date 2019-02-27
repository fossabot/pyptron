const { testCases, testInfo } = require('../../../helpers/testsHelpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: '6-7',
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: '0-1',
  },
]
testCases(category, dateCases)
testInfo(category)
