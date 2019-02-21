const { testCases, testInfo } = require('../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  {
    date: '2018-04-09', // lunes 9 de abril de 2018
    pypCases: {
      particulares: '3-4',
    },
  },
  {
    date: '2018-05-16', // miércoles 16 de mayo de 2018
    pypCases: {
      particulares: '7-8',
    },
  },
  {
    date: '2018-06-14', // jueves 14 de junio de 2018
    pypCases: {
      particulares: '1-2',
    },
  },
  {
    date: '2018-02-01', // jueves 1 de febrero
    pypCases: {
      particulares: '7-8',
    },
  },
  {
    date: '2018-02-02', // viernes 2 de febrero
    pypCases: {
      particulares: '9-0',
    },
  },
  {
    date: '2018-02-05', // lunes 5 de febrero
    pypCases: {
      particulares: '1-2',
    },
  },
  {
    date: '2018-03-02', // viernes 2 de marzo
    pypCases: {
      particulares: '9-0',
    },
  },
  {
    date: '2018-03-05', // lunes 5 de marzo
    pypCases: {
      particulares: '3-4',
    },
  },
  {
    date: '2018-04-30', // lunes 30 de abril
    pypCases: {
      particulares: '3-4',
    },
  },
  {
    date: '2018-06-01', // viernes 1 de junio
    pypCases: {
      particulares: '1-2',
    },
  },
  {
    date: '2018-10-01', // lunes 1 de octubre
    pypCases: {
      particulares: '7-8',
      motos: '0-2-4-6-8',
    },
  },
  {
    date: '2018-10-02', // martes 2 de octubre
    pypCases: {
      particulares: '9-0',
      motos: '1-3-5-7-9',
    },
  },
  {
    date: '2018-04-04', // miércoles 2 de abril
    pypCases: {
      particulares: '7-8',
    },
  },
  {
    date: '2018-09-03', // lunes 3 de septiembre
    pypCases: {
      particulares: '7-8',
      motos: '0-2-4-6-8',
    },
  },
  {
    date: '2018-09-14', // Segundo viernes del mes
    pypCases: {
      motos: '0-1-2-3-4-5-6-7-8-9',
    },
  },
  {
    date: '2018-11-30', // Último viernes del mes
    pypCases: {
      motos: '0-1-2-3-4-5-6-7-8-9',
    },
  },
  {
    date: '2019-01-07', // Inicio del nuevo decreto
    pypCases: {
      taxis: '7',
    },
  },
  {
    date: '2019-01-11', // Segundo viernes de enero
    pypCases: {
      taxis: 'NA',
    },
  },
  {
    date: '2019-03-08', // Segundo viernes de marzo
    pypCases: {
      taxis: 'NA',
    },
  },
  {
    date: '2019-03-29', // Último viernes de mayo
    pypCases: {
      taxis: 'NA',
    },
  },
  {
    date: '2019-05-10', // Segundo viernes de mayo
    pypCases: {
      taxis: 'NA',
    },
  },
  {
    date: '2019-05-24', // Penúltimo viernes de mayo
    pypCases: {
      taxis: '4',
    },
  },
  {
    date: '2019-05-31', // Viernes
    pypCases: {
      taxis: 'NA',
    },
  },
  {
    date: '2019-06-23', // Domingo
    pypCases: {
      taxis: '3',
    },
  },
]
testCases(city, dateCases)
testInfo(city)