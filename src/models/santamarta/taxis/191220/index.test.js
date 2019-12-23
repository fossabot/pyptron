const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./')

const dateCases = [
  {
    date: '2019-12-20',
    pyp: [],
  },
]
testCases(category, dateCases)
testInfo(category)
