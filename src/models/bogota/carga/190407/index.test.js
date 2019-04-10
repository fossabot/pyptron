const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-04-07', // sábado 7 de abril de 2018
    pyp: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  // {
  //   date: '2018-04-09', // lunes 9 de abril de 2018
  //   pyp: '2',
  // },
  // {
  //   date: '2018-05-16', // miércoles 16 de mayo de 2018
  //   pyp: '4',
  // },
]
testCases(category, dateCases)
testInfo(category)
