const PypData = require('../../../../classes/pyp-data')
const pyp190407 = require('../190407')

module.exports = new PypData({
  ...pyp190407,
  startDate: '2019-08-01',
  skipHolidays: true,
  hours: [
    {
      comment: '',
      hours: [['6:30', '8:30'], ['11:00', '14:30'], ['17:00', '19:00']],
      days: [],
    },
  ],
  decrees: [
    {
      name: 'Decreto 347 de 2019',
      url:
        'http://www.transitodevillavicencio.gov.co/Normatividad/Documentos/Decreto%20No%20347%20de%2024%20julio%202019.pdf',
    },
    { name: 'Decreto 222 del 25 de julio de 2018', url: 'cdn:pdf' },
    { name: 'Decreto 245 del 26 de julio de 2017', url: 'cdn:pdf' },
  ],
})
