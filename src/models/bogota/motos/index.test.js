const { testCases, testInfo } = require('../../../helpers/testsHelpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-03-07', // lunes 9 de abril de 2018
    pyp: 'NA',
  },
  {
    date: '2019-03-08', // miércoles 16 de mayo de 2018
    pyp: '0-2-4-6-8',
  },
]
testCases(category, dateCases)
testInfo(category)
