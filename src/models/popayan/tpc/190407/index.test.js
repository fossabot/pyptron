const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-02-02', // lunes
    pyp: [],
  },
]
testCases(category, dateCases)
testInfo(category)
