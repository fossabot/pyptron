const { testCases, testInfo } = require('../../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-01-01', // lunes
    pyp: '7-8',
  },
  {
    date: '2018-07-31', // martes
    pyp: '9-0',
  },
  {
    date: '2018-01-04', // jueves
    pyp: '3-4',
  },
  {
    date: '2018-01-05', // viernes
    pyp: '5-6',
  },
  {
    date: '2018-03-15', // jueves
    pyp: '3-4',
  },
  {
    date: '2018-08-01', // miércoles
    pyp: '3-4',
  },
  {
    date: '2018-08-02', // jueves
    pyp: '5-6',
  },
  {
    date: '2019-01-07', // lunes
    pyp: '9-0',
  },
]
testCases(city, dateCases)
testInfo(city)
