const medellinTaxis = require('../../medellin/taxis')

module.exports = {
  info: {
    vehicleClasses: medellinTaxis.info.vehicleClasses,
    decrees: [
      {
        name: 'Decreto 067 del 31 de enero de 2018',
        url:
          'https://www.transitoitagui.gov.co/wp-content/uploads/2018/02/DECRETO-067-DEL-31-1-2018-DECRETO-PICO-Y-PLACA.pdf',
      },
    ],
    days: medellinTaxis.info.days,
    hours: medellinTaxis.info.hours,
    scheme: medellinTaxis.info.scheme,
    observations: medellinTaxis.info.observations.replace('Medellín', 'Itagüí'),
  },
  name: medellinTaxis.name,
  pyp: medellinTaxis.pyp,
}
