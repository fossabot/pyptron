const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  // {
  //   date: '2018-04-09', // lunes 9 de abril de 2018
  //   pyp: [4, 5, 6, 7],
  // },
  // {
  //   date: '2018-05-16', // miércoles 16 de mayo de 2018
  //   pyp: [2, 3, 4, 5],
  // },
  // {
  //   date: '2018-08-03', // viernes 3 de agosto de 2018
  //   pyp: [0, 1, 2, 3],
  // },
  // {
  //   date: '2018-08-06', // lunes 6 de agosto de 2018
  //   pyp: [0, 1, 2, 3],
  // },
  // {
  //   date: '2018-09-12', // miércoles 12 de septiembre de 2018
  //   pyp: [8, 9, 0, 1],
  // },
  // {
  //   date: '2018-10-30', // martes 30 de octubre de 2018
  //   pyp: [4, 5, 6, 7],
  // },
  // {
  //   date: '2018-11-08', // jueves 8 de noviembre de 2018
  //   pyp: [2, 3, 4, 5],
  // },
  // {
  //   date: '2018-12-21', // viernes 21 de diembre de 2018
  //   pyp: [6, 7, 8, 9],
  // },
  // {
  //   date: '2019-01-31', // jueves 31 de enero de 2019
  //   pyp: [2, 3, 4, 5],
  // },
  // /* INICIO TEST AMBIENTAL */
  // {
  //   date: '2019-02-23',
  //   pyp: [1, 3, 5, 7, 9],
  // },
  // {
  //   date: '2019-03-09',
  //   pyp: [1, 3, 5, 7, 9],
  // },
  // {
  //   date: '2019-03-23',
  //   pyp: [1, 3, 5, 7, 9],
  // },
  // {
  //   date: '2019-03-02',
  //   pyp: [0, 2, 4, 6, 8],
  // },
  // {
  //   date: '2019-03-16',
  //   pyp: [0, 2, 4, 6, 8],
  // },
  // {
  //   date: '2019-03-30',
  //   pyp: [0, 2, 4, 6, 8],
  // },
  // /* FIN TEST AMBIENTAl */
  // {
  //   date: '2019-04-08',
  //   pyp: [6, 7, 8, 9],
  // },
]
testCases(category, dateCases)
testInfo(category)
