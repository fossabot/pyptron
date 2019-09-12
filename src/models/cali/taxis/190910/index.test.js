const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-09-10', // Año Nuevo
    pyp: [1, 2],
  },
  {
    date: '2019-09-18', // Año Nuevo
    pyp: [7, 8],
  },
  {
    date: '2019-10-30', // Año Nuevo
    pyp: [1, 2],
  },
]

testCases(category, dateCases)
testInfo(category)
