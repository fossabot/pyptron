const { testCases, testInfo } = require('../../../helpers/testsHelpers')

const category = require('./index')

const dateCases = [
  {
    date: '2018-02-02', // lunes
    pyp: 'NA',
  },
]
testCases(category, dateCases)
testInfo(category)
