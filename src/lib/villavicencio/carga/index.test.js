const { testCases, testInfo } = require('../../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-01-01', // lunes
    pyp: '0-1-2-3-4-5-6-7-8-9',
  },
]
testCases(city, dateCases)
testInfo(city)
