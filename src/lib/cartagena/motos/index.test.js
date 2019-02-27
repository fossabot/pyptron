const { testCases, testInfo } = require('../../../helpers/testsHelpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-10-01', // lunes 1 de octubre
    pyp: '0-2-4-6-8',
  },
  {
    date: '2018-10-02', // martes 2 de octubre
    pyp: '1-3-5-7-9',
  },
  {
    date: '2018-09-03', // lunes 3 de septiembre
    pyp: '0-2-4-6-8',
  },
  {
    date: '2018-09-14', // Segundo viernes del mes
    pyp: '0-1-2-3-4-5-6-7-8-9',
  },
  {
    date: '2018-11-30', // Último viernes del mes
    pyp: '0-1-2-3-4-5-6-7-8-9',
  },
]
testCases(category, dateCases)
testInfo(category)
