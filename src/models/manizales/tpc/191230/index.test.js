const { testCases, testInfo } = require('../../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-12-30',
    pyp: ['A'],
  },
  {
    date: '2020-01-02',
    pyp: ['C'],
  },
  {
    date: '2020-03-16',
    pyp: ['E'],
  },
  {
    date: '2020-03-28',
    pyp: ['E'],
  },
  {
    date: '2020-04-08',
    pyp: ['D'],
  },
  {
    date: '2020-04-11',
    pyp: ['E'],
  },
  {
    date: '2020-12-28',
    pyp: ['E'],
  },
  {
    date: '2021-01-02',
    pyp: ['I'],
  },
]
testCases(category, dateCases)
testInfo(category)
