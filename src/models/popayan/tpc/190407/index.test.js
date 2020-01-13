const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-02-02',
    pyp: [],
  },
  {
    date: '2020-01-14',
    pyp: [],
  },
]
testCases(category, dateCases)
testInfo(category)
