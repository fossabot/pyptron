const { testCases, testInfo } = require('../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-04-30', // lunes 30 de abril de 2018
    pypCases: {
      taxis: '0',
    },
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pypCases: {
      particulares: '0-9',
      motos: '0-9',
      taxis: '1',
    },
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: '2-7',
      motos: '2-7',
      taxis: '8',
    },
  },
]
testCases(city, dateCases)
testInfo(city)
