const exceptions = require('./exceptions')
const observations = require('./observations')
const scheme = require('./scheme')

module.exports = {
  days: ['Días hábiles de la semana - lunes a viernes.'],
  decrees: [
    {
      name: 'Decreto pico y placa enero de 2017',
      url:
        'http://www.bello.gov.co/index.php/component/k2/item/download/219_e570e9fbf71412d35ba571a0635ba25b',
    },
    {
      name: 'Decreto pico y placa febrero de 2018',
      url:
        'http://www.bello.gov.co/index.php/component/k2/item/download/941_94bced8a97224f77da7427d07b1da1b1',
    },
  ],
  exceptions,
  hours: [
    { comment: '', hours: [['7:00', '8:30'], ['17:30', '19:00']], days: [] },
  ],
  maps: [],
  observations,
  scheme,
  vehicleClasses: ['Vehículos particulares y oficiales'],
}
