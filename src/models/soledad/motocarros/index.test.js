const { testCases, testInfo } = require('../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-01-01', // Año Nuevo
    pyp: [1, 3, 5, 7, 9],
  },
  {
    date: '2018-03-19', // lunes festivo: San José
    pyp: [1, 3, 5, 7, 9],
  },
  {
    date: '2018-04-07', // sábado 7 de abril de 2018
    pyp: [1, 3, 5, 7, 9],
  },
  {
    date: '2018-02-04', // domingo 4 de febrero de 2018
    pyp: [0, 2, 4, 6, 8],
  },
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pyp: [1, 3, 5, 7, 9],
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pyp: [0, 2, 4, 6, 8],
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: '2018-01-31',
    pyp: [0, 2, 4, 6, 8],
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: '2018-03-31',
    pyp: [1, 3, 5, 7, 9],
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: '2018-07-31',
    pyp: [0, 2, 4, 6, 8],
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: '2018-08-31',
    pyp: [1, 3, 5, 7, 9],
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: '2018-10-31',
    pyp: [0, 2, 4, 6, 8],
  },
  {
    // Excepción según el parágrafo 3 del decreto
    date: '2018-12-31',
    pyp: [1, 3, 5, 7, 9],
  },
]
testCases(category, dateCases)
testInfo(category)
