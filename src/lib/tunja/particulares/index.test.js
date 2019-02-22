const { testCases, testInfo } = require('../../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2019-01-15', // martes 15 de enero de 2019
    pyp: '5-6',
  },
]
testCases(city, dateCases)
testInfo(city)
