const { testCases, testInfo } = require('../../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-01-06', // Sábado
    pyp: 'A',
  },
  {
    date: '2018-01-13', // Sábado
    pyp: 'G',
  },
  {
    date: '2018-04-07', // sábado 7 de abril de 2018
    pyp: 'B',
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: 'C',
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: 'F',
  },
  {
    date: '2018-06-14', // jueves 14 de junio de 2018
    pyp: 'B',
  },
  {
    date: '2018-06-09', // sábado 9 de junio
    pyp: 'H',
  },
  {
    date: '2018-12-29', // sábado 29 de diciembre
    pyp: 'G',
  },
  {
    date: '2018-12-30', // domingo 30 de diciembre
    pyp: 'NA',
  },
  {
    date: '2018-01-07', // domingo 7 de enero
    pyp: 'NA',
  },
]
testCases(city, dateCases)
testInfo(city)