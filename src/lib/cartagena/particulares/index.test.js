const { testCases, testInfo } = require('../../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: '3-4',
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: '7-8',
  },
  {
    date: '2018-06-14', // jueves 14 de junio de 2018
    pyp: '1-2',
  },
  {
    date: '2018-02-01', // jueves 1 de febrero
    pyp: '7-8',
  },
  {
    date: '2018-02-02', // viernes 2 de febrero
    pyp: '9-0',
  },
  {
    date: '2018-02-05', // lunes 5 de febrero
    pyp: '1-2',
  },
  {
    date: '2018-03-02', // viernes 2 de marzo
    pyp: '9-0',
  },
  {
    date: '2018-03-05', // lunes 5 de marzo
    pyp: '3-4',
  },
  {
    date: '2018-04-30', // lunes 30 de abril
    pyp: '3-4',
  },
  {
    date: '2018-06-01', // viernes 1 de junio
    pyp: '1-2',
  },
  {
    date: '2018-10-01', // lunes 1 de octubre
    pyp: '7-8',
  },
  {
    date: '2018-10-02', // martes 2 de octubre
    pyp: '9-0',
  },
  {
    date: '2018-04-04', // miércoles 2 de abril
    pyp: '7-8',
  },
  {
    date: '2018-09-03', // lunes 3 de septiembre
    pyp: '7-8',
  },
]
testCases(city, dateCases)
testInfo(city)
