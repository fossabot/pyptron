const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./')

const dateCases = [
  {
    date: '2019-12-26',
    pyp: [6, 7],
  },
  {
    date: '2019-11-29',
    pyp: [8, 9],
  },
]
testCases(category, dateCases)
testInfo(category)
