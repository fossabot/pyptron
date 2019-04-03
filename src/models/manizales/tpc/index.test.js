const { testCases, testInfo } = require('../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-01-06', // Sábado
    pyp: ['A'],
  },
  {
    date: '2018-01-13', // Sábado
    pyp: ['G'],
  },
  {
    date: '2018-04-07', // sábado
    pyp: ['B'],
  },
  {
    date: '2018-04-09', // lunes
    pyp: ['C'],
  },
  {
    date: '2018-05-16', // miércoles
    pyp: ['F'],
  },
  {
    date: '2018-06-14', // jueves
    pyp: ['B'],
  },
  {
    date: '2018-06-09', // sábado
    pyp: ['H'],
  },
  {
    date: '2018-12-29', // sábado
    pyp: ['G'],
  },
]
testCases(category, dateCases)
testInfo(category)
