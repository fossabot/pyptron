const { testCases, testInfo } = require('../../../utils/testsWrapper')

const category = require('./index')

const dateCases = [
  {
    date: '2018-01-01', // Año Nuevo
    pyp: '1-2',
  },
  {
    date: '2018-03-19', // lunes festivo: San José
    pyp: '4-9',
  },
  {
    date: '2018-04-07', // sábado 7 de abril de 2018
    pyp: '0-3',
  },
  {
    date: '2018-02-04', // domingo 4 de febrero de 2018
    pyp: '7-8',
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: '5-6',
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: '1-2',
  },
]
testCases(category, dateCases)
testInfo(category)
