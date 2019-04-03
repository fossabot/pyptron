const { testCases, testInfo } = require('../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-03-01', // Viernes
    pyp: [4],
  },
  {
    date: '2019-04-11', // Jueves
    pyp: [5],
  },
  {
    date: '2019-05-29', // miércoles
    pyp: [1],
  },
]
testCases(category, dateCases)
testInfo(category)
