const { testCases, testInfo } = require('../utils/testsWrapper')

const city = require('./pereira')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pypCases: {
      particulares: '0-1',
      motos: '0-1',
    },
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: '4-5',
      motos: '4-5',
    },
  },
]
testCases(city, dateCases)
testInfo(city)
