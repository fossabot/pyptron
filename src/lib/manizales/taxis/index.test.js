const { testCases, testInfo } = require('../../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-01-06', // Sábado
    pyp: '3',
  },
  {
    date: '2018-04-07', // sábado 7 de abril de 2018
    pyp: '0',
  },
  {
    date: '2018-02-04', // domingo 4 de febrero de 2018
    pyp: '2',
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: '1-2',
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: '5-6',
  },
  {
    date: '2018-06-14', // jueves 14 de junio de 2018
    pyp: '5-6',
  },
  {
    date: '2018-06-09', // sábado 9 de junio
    pyp: '8',
  },
  {
    date: '2018-12-29', // sábado 29 de diciembre
    pyp: '5',
  },
  {
    date: '2018-12-30', // domingo 30 de diciembre
    pyp: '6',
  },
  {
    date: '2018-01-07', // domingo 7 de enero
    pyp: '4',
  },
]
testCases(city, dateCases)
testInfo(city)
