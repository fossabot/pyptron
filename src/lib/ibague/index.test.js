const { testCases, testInfo } = require('../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-01-01', // Año Nuevo
    pypCases: {
      tpc: '1-2',
      taxis: '3',
    },
  },
  {
    date: '2018-03-19', // lunes festivo: San José
    pypCases: {
      tpc: '4-9',
      taxis: '0',
    },
  },
  {
    date: '2018-04-07', // sábado 7 de abril de 2018
    pypCases: {
      tpc: '0-3',
      taxis: '9',
    },
  },
  {
    date: '2018-02-04', // domingo 4 de febrero de 2018
    pypCases: {
      tpc: '7-8',
      taxis: '7',
    },
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pypCases: {
      particulares: '0-1',
      tpc: '5-6',
      taxis: '1',
    },
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: '4-5',
      tpc: '1-2',
      taxis: '8',
    },
  },
]
testCases(city, dateCases)
testInfo(city)
