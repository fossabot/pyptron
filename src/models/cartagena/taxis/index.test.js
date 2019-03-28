const { testCases, testInfo } = require('../../../helpers/testsHelpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-03-04', // Lunes
    pyp: [3, 4],
  },
  {
    date: '2019-03-06', // Miércoles
    pyp: [7, 8],
  },
]
testCases(category, dateCases)
testInfo(category)
