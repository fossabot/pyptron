const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./')

const dateCases = [
  {
    date: '2020-01-14',
    pyp: [1],
  },
  {
    date: '2020-01-21',
    pyp: [6],
  },
  {
    date: '2020-10-20',
    pyp: [9],
  },
  {
    date: '2020-10-22',
    pyp: [1],
  },
  {
    date: '2020-11-05',
    pyp: [0],
  },
]
testCases(category, dateCases)
testInfo(category)
