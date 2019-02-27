const { testCases, testInfo } = require('../../../helpers/testsHelpers')

const category = require('./index')

const dateCases = [
  {
    date: '2019-01-07', // Inicio del nuevo decreto
    pyp: '7',
  },
  {
    date: '2019-01-11', // Segundo viernes de enero
    pyp: 'NA',
  },
  {
    date: '2019-03-08', // Segundo viernes de marzo
    pyp: 'NA',
  },
  {
    date: '2019-03-29', // Último viernes de mayo
    pyp: 'NA',
  },
  {
    date: '2019-05-10', // Segundo viernes de mayo
    pyp: 'NA',
  },
  {
    date: '2019-05-24', // Penúltimo viernes de mayo
    pyp: '4',
  },
  {
    date: '2019-05-31', // Viernes
    pyp: 'NA',
  },
  {
    date: '2019-06-23', // Domingo
    pyp: '3',
  },
]
testCases(category, dateCases)
testInfo(category)
