const { testCases, testInfo } = require('../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-01-01', // lunes
    pypCases: {
      particulares: '7-8',
      motos: '7-8',
      taxis: '1',
      carga: '0-1-2-3-4-5-6-7-8-9',
    },
  },
  {
    date: '2018-07-31', // martes
    pypCases: {
      particulares: '9-0',
      motos: '9-0',
      taxis: 'NA',
    },
  },
  {
    date: '2018-01-04', // jueves
    pypCases: {
      particulares: '3-4',
      motos: '3-4',
      taxis: '4',
    },
  },
  {
    date: '2018-01-05', // viernes
    pypCases: {
      particulares: '5-6',
      motos: '5-6',
      taxis: '5',
    },
  },
  {
    date: '2018-03-15', // jueves
    pypCases: {
      particulares: '3-4',
      motos: '3-4',
      taxis: '5',
    },
  },
  {
    date: '2018-08-01', // miércoles
    pypCases: {
      particulares: '3-4',
      motos: '3-4',
      taxis: '1',
    },
  },
  {
    date: '2018-08-02', // jueves
    pypCases: {
      particulares: '5-6',
      motos: '5-6',
      taxis: '2',
    },
  },
  {
    date: '2019-01-07', // lunes
    pypCases: {
      particulares: '9-0',
      motos: '9-0',
      taxis: '7',
    },
  },
]
testCases(city, dateCases)
testInfo(city)
