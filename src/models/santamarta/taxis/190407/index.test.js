const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-03-12', // viernes 12 de marzo de 2018
    pyp: [8, 9],
  },
  {
    date: '2018-04-06', // viernes 6 de abril de 2018
    pyp: [0, 1],
  },
  {
    date: '2018-08-13', // lunes 13 de agosto de 2018
    pyp: [4, 5],
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: [0, 1],
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: [4, 5],
  },
]
testCases(category, dateCases)
testInfo(category)
