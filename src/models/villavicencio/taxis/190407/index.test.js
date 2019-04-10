const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-01-01', // lunes
    pyp: [1],
  },
  {
    date: '2018-07-31', // martes
    pyp: [],
  },
  {
    date: '2018-01-04', // jueves
    pyp: [4],
  },
  {
    date: '2018-01-05', // viernes
    pyp: [5],
  },
  {
    date: '2018-03-15', // jueves
    pyp: [5],
  },
  {
    date: '2018-08-01', // miércoles
    pyp: [1],
  },
  {
    date: '2018-08-02', // jueves
    pyp: [2],
  },
  {
    date: '2019-01-07', // lunes
    pyp: [7],
  },
]
testCases(category, dateCases)
testInfo(category)
