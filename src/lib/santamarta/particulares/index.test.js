const { testCases, testInfo } = require('../../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: '8-9',
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: '2-3',
  },
]
testCases(city, dateCases)
testInfo(city)
