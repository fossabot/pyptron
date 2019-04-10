const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-01-15', // martes 15 de enero de 2019
    pyp: [5, 6],
  },
]
testCases(category, dateCases)
testInfo(category)
