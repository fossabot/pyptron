const { testCases, testInfo } = require('../../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-04-30', // lunes 30 de abril de 2018
    pyp: '0',
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: '1',
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: '8',
  },
]
testCases(city, dateCases)
testInfo(city)
