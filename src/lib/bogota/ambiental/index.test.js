const { testCases, testInfo } = require('../../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-04-07', // sábado 7 de abril de 2018
    pyp: '1',
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: '2',
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: '4',
  },
]
testCases(city, dateCases)
testInfo(city)
