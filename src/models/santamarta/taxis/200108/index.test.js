const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./')

const dateCases = [
  {
    date: '2020-01-08',
    pyp: [2, 3],
  },
]
testCases(category, dateCases)
testInfo(category)
