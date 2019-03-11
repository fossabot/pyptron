const info = require('./info')

module.exports = {
  info,
  excludedDays: [],
  skipHolidays: true,
  messages: [
    {
      message:
        'No hay medidas de restricción por Pico y placa para motos en Bogotá.',
    },
  ],
  pypFunction() {
    return 'NA'
  },
}
