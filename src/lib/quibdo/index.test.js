const { testCases, testInfo } = require('../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pypCases: {
      motos: '1-2-3-4',
      particulares: '1-2',
    },
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pypCases: {
      motos: '9-0-1-2',
      particulares: '5-6',
    },
  },
]
testCases(city, dateCases)
testInfo(city)
