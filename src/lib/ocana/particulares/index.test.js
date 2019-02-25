const { testCases, testInfo } = require('../../../utils/testsWrapper')

const category = require('./index')

const dateCases = [
  {
    date: '2018-11-19', // lunes 19 de noviembre de 2018
    pyp: '0-1',
  },
  {
    date: '2018-11-22', // jueves 22 de noviembre de 2018
    pyp: '6-7',
  },
]
testCases(category, dateCases)
testInfo(category)
