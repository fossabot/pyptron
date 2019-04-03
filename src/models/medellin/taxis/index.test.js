const { testCases, testInfo } = require('../../../helpers/tests-helpers')

const category = require('./index')

const dateCases = [
  // {
  //   date: '2018-04-09', // lunes 9 de abril de 2018
  //     particulares: '4-5-6-7',
  //     motos: '8-9',
  //     pyp: [7],
  //   },
  // },
  // {
  //   date: '2018-05-16', // miércoles 16 de mayo de 2018
  //     particulares: '2-3-4-5',
  //     motos: '2-3',
  //     pyp: [3],
  //   },
  // },
  // {
  //   date: '2018-08-03', // viernes 3 de agosto de 2018
  //     particulares: '0-1-2-3',
  //     motos: '6-7',
  //     pyp: [8],
  //   },
  // },
  // {
  //   date: '2018-08-06', // lunes 6 de agosto de 2018
  //     particulares: '0-1-2-3',
  //     motos: '6-7',
  //     pyp: [3],
  //   },
  // },
  // {
  //   date: '2018-09-12', // miércoles 12 de septiembre de 2018
  //     particulares: '8-9-0-1',
  //     motos: '0-1',
  //     pyp: [4],
  //   },
  // },
  // {
  //   date: '2018-10-30', // martes 30 de octubre de 2018
  //     particulares: '4-5-6-7',
  //     motos: '8-9',
  //     pyp: [7],
  //   },
  // },
  // {
  //   date: '2018-11-08', // jueves 8 de noviembre de 2018
  //     particulares: '2-3-4-5',
  //     motos: '2-3',
  //     pyp: [8],
  //   },
  // },
  // {
  //   date: '2018-12-21', // viernes 21 de diembre de 2018
  //     particulares: '6-7-8-9',
  //     motos: '4-5',
  //     pyp: [8],
  //   },
  // },
  // {
  //   date: '2019-01-31', // jueves 31 de enero de 2019
  //     particulares: '2-3-4-5',
  //     motos: '2-3',
  //     pyp: [6],
  //   },
  // },
  /* INICIO TEST AMBIENTAL */
  /* FIN TEST AMBIENTAl */
  {
    date: '2018-02-01',
    pyp: [3],
  },
  {
    date: '2018-02-06',
    pyp: [0],
  },
  {
    date: '2018-03-01',
    pyp: [7],
  },
  {
    date: '2018-03-14',
    pyp: [5],
  },
  {
    date: '2018-04-06',
    pyp: [1],
  },
  {
    date: '2018-04-30',
    pyp: [2],
  },
  {
    date: '2018-05-02',
    pyp: [9],
  },
  {
    date: '2018-05-08',
    pyp: [2],
  },
  {
    date: '2018-05-09',
    pyp: [8],
  },
  {
    date: '2018-05-10',
    pyp: [4],
  },
  {
    date: '2018-05-31',
    pyp: [9],
  },
  {
    date: '2018-06-28',
    pyp: [3],
  },
  {
    date: '2018-07-04',
    pyp: [6],
  },
  {
    date: '2018-07-30',
    pyp: [4],
  },
  {
    date: '2018-08-03',
    pyp: [8],
  },
  {
    date: '2018-08-29',
    pyp: [5],
  },
  {
    date: '2018-09-04',
    pyp: [3],
  },
  {
    date: '2018-09-20',
    pyp: [0],
  },
  {
    date: '2018-09-28',
    pyp: [6],
  },
  {
    date: '2018-10-03',
    pyp: [3],
  },
  {
    date: '2018-10-05',
    pyp: [0],
  },
  {
    date: '2018-10-29',
    pyp: [1],
  },
  {
    date: '2018-10-30',
    pyp: [7],
  },
  {
    date: '2018-11-01',
    pyp: [9],
  },
  {
    date: '2018-11-09',
    pyp: [4],
  },
  {
    date: '2018-11-27',
    pyp: [1],
  },
  {
    date: '2018-12-03',
    pyp: [4],
  },
  {
    date: '2018-12-06',
    pyp: [2],
  },
  {
    date: '2018-12-10',
    pyp: [9],
  },
  {
    date: '2018-12-11',
    pyp: [0],
  },
  {
    date: '2018-12-12',
    pyp: [1],
  },
  {
    date: '2018-12-13',
    pyp: [7],
  },
  {
    date: '2018-12-11',
    pyp: [0],
  },
  {
    date: '2018-12-19',
    pyp: [6],
  },
  {
    date: '2018-12-28',
    pyp: [3],
  },
  {
    date: '2019-01-03',
    pyp: [2],
  },
  {
    date: '2019-01-04',
    pyp: [8],
  },
  {
    date: '2019-01-08',
    pyp: [4],
  },
  {
    date: '2019-01-09',
    pyp: [5],
  },
  {
    date: '2019-01-10',
    pyp: [1],
  },
  {
    date: '2019-01-11',
    pyp: [7],
  },
  {
    date: '2019-01-14',
    pyp: [8],
  },
  {
    date: '2019-01-15',
    pyp: [9],
  },
  {
    date: '2019-01-16',
    pyp: [0],
  },
  {
    date: '2019-01-16',
    pyp: [0],
  },
  {
    date: '2019-01-17',
    pyp: [6],
  },
  {
    date: '2019-01-18',
    pyp: [2],
  },
  {
    date: '2019-01-21',
    pyp: [3],
  },
  {
    date: '2019-01-22',
    pyp: [4],
  },
  {
    date: '2019-01-23',
    pyp: [5],
  },
  {
    date: '2019-01-24',
    pyp: [1],
  },
  {
    date: '2019-01-25',
    pyp: [7],
  },
  {
    date: '2019-01-28',
    pyp: [8],
  },
  {
    date: '2019-01-29',
    pyp: [9],
  },
  {
    date: '2019-01-30',
    pyp: [0],
  },
  {
    date: '2019-01-31',
    pyp: [6],
  },
]
testCases(category, dateCases)
testInfo(category)
