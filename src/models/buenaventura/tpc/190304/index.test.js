const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: [3, 4],
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: [7, 8],
  },
  {
    date: '2018-03-12', // miércoles 16 de mayo de 2018
    pyp: [3, 4],
  },
  {
    date: '2018-07-09', // miércoles 16 de mayo de 2018
    pyp: [1, 2],
  },
  {
    date: '2018-11-13', // miércoles 16 de mayo de 2018
    pyp: [3, 4],
  },
  {
    date: '2019-01-14', // miércoles 16 de mayo de 2018
    pyp: [9, 0],
  },
]
testCases(category, dateCases)
testInfo(category)
