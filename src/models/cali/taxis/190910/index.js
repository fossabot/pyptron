const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')
const pyp190801 = require('../190801')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2019-09-10',
  decrees: [
    {
      name: 'Decreto 0570 del 10 de septiembre de 2019',
      url:
        'https://serviciosdetransito.com/images/documentos/2019/Decreto-0570-de-2019-pico-y-placa-taxis.pdf',
    },
    ...pyp190801.decrees,
  ],
})
