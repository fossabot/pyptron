const { testCases, testInfo } = require('../../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-02-02', // lunes 9 de abril de 2018
    pyp: '0',
  },
  {
    date: '2018-02-23', // lunes 9 de abril de 2018
    pyp: '5',
  },
  {
    date: '2018-04-18', // lunes 9 de abril de 2018
    pyp: '8',
  },
  {
    date: '2018-12-14', // lunes 9 de abril de 2018
    pyp: '9',
  },
  {
    date: '2018-06-06', // lunes 9 de abril de 2018
    pyp: '0',
  },
  {
    date: '2018-10-31', // lunes 9 de abril de 2018
    pyp: '9',
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: '3',
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: '6',
  },
  {
    date: '2018-07-03', // martes 3 de Julio de 2018
    pyp: '7',
  },
  {
    date: '2018-10-18', // jueves 18 de octubre de 2018
    pyp: '0',
  },
]
testCases(city, dateCases)
testInfo(city)
