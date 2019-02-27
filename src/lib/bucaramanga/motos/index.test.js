const { testCases, testInfo } = require('../../../helpers/testsHelpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-04-07', // sábado 7 de abril de 2018
    pyp: '9-0',
  },
  {
    date: '2018-03-26', // lunes 26 de marzo de 2018
    pyp: '3-4',
  },
  {
    date: '2018-04-02', // lunes 2 de abirl de 2018
    pyp: '5-6',
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: '5-6',
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: '9-0',
  },
  {
    date: '2018-07-03', // martes 3 de julio de 2018
    pyp: '9-0',
  },
  {
    date: '2018-07-07', // sábado 7 de julio de 2018
    pyp: '5-6',
  },
  {
    date: '2018-10-01', // lunes 1 de octubre de 2018
    pyp: '9-0',
  },
]
testCases(category, dateCases)
testInfo(category)
