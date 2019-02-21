const { testCases, testInfo } = require('../../utils/testsWrapper')

const city = require('./index')

const dateCases = [
  // {
  //   date: '2018-04-09', // lunes 9 de abril de 2018
  //   pypCases: {
  //     particulares: '4-5-6-7',
  //     motos: '8-9',
  //     taxis: '7',
  //   },
  // },
  // {
  //   date: '2018-05-16', // miércoles 16 de mayo de 2018
  //   pypCases: {
  //     particulares: '2-3-4-5',
  //     motos: '2-3',
  //     taxis: '3',
  //   },
  // },
  // {
  //   date: '2018-08-03', // viernes 3 de agosto de 2018
  //   pypCases: {
  //     particulares: '0-1-2-3',
  //     motos: '6-7',
  //     taxis: '8',
  //   },
  // },
  // {
  //   date: '2018-08-06', // lunes 6 de agosto de 2018
  //   pypCases: {
  //     particulares: '0-1-2-3',
  //     motos: '6-7',
  //     taxis: '3',
  //   },
  // },
  // {
  //   date: '2018-09-12', // miércoles 12 de septiembre de 2018
  //   pypCases: {
  //     particulares: '8-9-0-1',
  //     motos: '0-1',
  //     taxis: '4',
  //   },
  // },
  // {
  //   date: '2018-10-30', // martes 30 de octubre de 2018
  //   pypCases: {
  //     particulares: '4-5-6-7',
  //     motos: '8-9',
  //     taxis: '7',
  //   },
  // },
  // {
  //   date: '2018-11-08', // jueves 8 de noviembre de 2018
  //   pypCases: {
  //     particulares: '2-3-4-5',
  //     motos: '2-3',
  //     taxis: '8',
  //   },
  // },
  // {
  //   date: '2018-12-21', // viernes 21 de diembre de 2018
  //   pypCases: {
  //     particulares: '6-7-8-9',
  //     motos: '4-5',
  //     taxis: '8',
  //   },
  // },
  // {
  //   date: '2019-01-31', // jueves 31 de enero de 2019
  //   pypCases: {
  //     particulares: '2-3-4-5',
  //     motos: '2-3',
  //     taxis: '6',
  //   },
  // },
  /* INICIO TEST AMBIENTAL */
  {
    date: '2019-02-23',
    pypCases: {
      particulares: '1-3-5-7-9',
      motos: '1-3-5-7-9',
    },
  },
  {
    date: '2019-03-09',
    pypCases: {
      particulares: '1-3-5-7-9',
      motos: '1-3-5-7-9',
    },
  },
  {
    date: '2019-03-23',
    pypCases: {
      particulares: '1-3-5-7-9',
      motos: '1-3-5-7-9',
    },
  },
  {
    date: '2019-03-02',
    pypCases: {
      particulares: '0-2-4-6-8',
      motos: '0-2-4-6-8',
    },
  },
  {
    date: '2019-03-16',
    pypCases: {
      particulares: '0-2-4-6-8',
      motos: '0-2-4-6-8',
    },
  },
  {
    date: '2019-03-30',
    pypCases: {
      particulares: '0-2-4-6-8',
      motos: '0-2-4-6-8',
    },
  },
  /* FIN TEST AMBIENTAl */
  {
    date: '2018-02-01',
    pypCases: {
      taxis: '3',
    },
  },
  {
    date: '2018-02-06',
    pypCases: {
      taxis: '0',
    },
  },
  {
    date: '2018-03-01',
    pypCases: {
      taxis: '7',
    },
  },
  {
    date: '2018-03-14',
    pypCases: {
      taxis: '5',
    },
  },
  {
    date: '2018-04-06',
    pypCases: {
      taxis: '1',
    },
  },
  {
    date: '2018-04-30',
    pypCases: {
      taxis: '2',
    },
  },
  {
    date: '2018-05-02',
    pypCases: {
      taxis: '9',
    },
  },
  {
    date: '2018-05-08',
    pypCases: {
      taxis: '2',
    },
  },
  {
    date: '2018-05-09',
    pypCases: {
      taxis: '8',
    },
  },
  {
    date: '2018-05-10',
    pypCases: {
      taxis: '4',
    },
  },
  {
    date: '2018-05-31',
    pypCases: {
      taxis: '9',
    },
  },
  {
    date: '2018-06-28',
    pypCases: {
      taxis: '3',
    },
  },
  {
    date: '2018-07-04',
    pypCases: {
      taxis: '6',
    },
  },
  {
    date: '2018-07-30',
    pypCases: {
      taxis: '4',
    },
  },
  {
    date: '2018-08-03',
    pypCases: {
      taxis: '8',
    },
  },
  {
    date: '2018-08-29',
    pypCases: {
      taxis: '5',
    },
  },
  {
    date: '2018-09-04',
    pypCases: {
      taxis: '3',
    },
  },
  {
    date: '2018-09-20',
    pypCases: {
      taxis: '0',
    },
  },
  {
    date: '2018-09-28',
    pypCases: {
      taxis: '6',
    },
  },
  {
    date: '2018-10-03',
    pypCases: {
      taxis: '3',
    },
  },
  {
    date: '2018-10-05',
    pypCases: {
      taxis: '0',
    },
  },
  {
    date: '2018-10-29',
    pypCases: {
      taxis: '1',
    },
  },
  {
    date: '2018-10-30',
    pypCases: {
      taxis: '7',
    },
  },
  {
    date: '2018-11-01',
    pypCases: {
      taxis: '9',
    },
  },
  {
    date: '2018-11-09',
    pypCases: {
      taxis: '4',
    },
  },
  {
    date: '2018-11-27',
    pypCases: {
      taxis: '1',
    },
  },
  {
    date: '2018-12-03',
    pypCases: {
      taxis: '4',
    },
  },
  {
    date: '2018-12-06',
    pypCases: {
      taxis: '2',
    },
  },
  {
    date: '2018-12-10',
    pypCases: {
      taxis: '9',
    },
  },
  {
    date: '2018-12-11',
    pypCases: {
      taxis: '0',
    },
  },
  {
    date: '2018-12-12',
    pypCases: {
      taxis: '1',
    },
  },
  {
    date: '2018-12-13',
    pypCases: {
      taxis: '7',
    },
  },
  {
    date: '2018-12-11',
    pypCases: {
      taxis: '0',
    },
  },
  {
    date: '2018-12-19',
    pypCases: {
      taxis: '6',
    },
  },
  {
    date: '2018-12-28',
    pypCases: {
      taxis: '3',
    },
  },
  {
    date: '2019-01-03',
    pypCases: {
      taxis: '2',
    },
  },
  {
    date: '2019-01-04',
    pypCases: {
      taxis: '8',
    },
  },
  {
    date: '2019-01-08',
    pypCases: {
      taxis: '4',
    },
  },
  {
    date: '2019-01-09',
    pypCases: {
      taxis: '5',
    },
  },
  {
    date: '2019-01-10',
    pypCases: {
      taxis: '1',
    },
  },
  {
    date: '2019-01-11',
    pypCases: {
      taxis: '7',
    },
  },
  {
    date: '2019-01-14',
    pypCases: {
      taxis: '8',
    },
  },
  {
    date: '2019-01-15',
    pypCases: {
      taxis: '9',
    },
  },
  {
    date: '2019-01-16',
    pypCases: {
      taxis: '0',
    },
  },
  {
    date: '2019-01-16',
    pypCases: {
      taxis: '0',
    },
  },
  {
    date: '2019-01-17',
    pypCases: {
      taxis: '6',
    },
  },
  {
    date: '2019-01-18',
    pypCases: {
      taxis: '2',
    },
  },
  {
    date: '2019-01-21',
    pypCases: {
      taxis: '3',
    },
  },
  {
    date: '2019-01-22',
    pypCases: {
      taxis: '4',
    },
  },
  {
    date: '2019-01-23',
    pypCases: {
      taxis: '5',
    },
  },
  {
    date: '2019-01-24',
    pypCases: {
      taxis: '1',
    },
  },
  {
    date: '2019-01-25',
    pypCases: {
      taxis: '7',
    },
  },
  {
    date: '2019-01-28',
    pypCases: {
      taxis: '8',
    },
  },
  {
    date: '2019-01-29',
    pypCases: {
      taxis: '9',
    },
  },
  {
    date: '2019-01-30',
    pypCases: {
      taxis: '0',
    },
  },
  {
    date: '2019-01-31',
    pypCases: {
      taxis: '6',
    },
  },
]
testCases(city, dateCases)
testInfo(city)