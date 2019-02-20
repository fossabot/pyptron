const pypFuncs = require('../../../utils/funcs')

module.exports = {
  info: {
    vehicleClasses: [
      'Vehículos de transporte público individual de pasajeros - Taxis',
    ],
    decrees: [
      {
        name: 'decreto 068 de 2018',
        url: 'cdn:pdf',
      },
    ],
    days: ['Lunes a sábado'],
    hours: [
      {
        comment: '',
        hours: [['7:00', '21:00']],
        days: [],
      },
    ],
    scheme: 'Último dígito del número de la placa según el esquema',
    observations:
      'Se permitirá excepcionalmente la ciruculación de los vehículos de servicio de transporte público individual (tipo taxi) en su día de Pico y placa solo para efectos de reparación y mantenimiento: Solo podrá transitar en los horarios que comprendan entre las 06:00 y las 08:00 horas y desde las 15:00 hasta las 17:00 horas además de hacerlo con los vidrios laterales abajo, la silla lateral derecha reclinada, sin la silla trasera, sin ocupantes y solo podrá ir ocupado por el conductor. Parágrafo: Se permitirá excepcionalmente la circulación de los vehículos automotores de servicio público individual tipo taxi en su día de Pico y placa el día 20 de cada mes, lo anterior en relación a que ese día opera la restricción de cirtulación de motocicletas, motociclos, mototriciclos, motocarros y cuatrimotos en el Distrito.',
  },
  name: 'Taxis',
  pyp(date) {
    const options = {
      excludedDays: [0, 6],
      skipHolidays: true,
    }
    const pypFunction = () => {
      const startDate = '2018-03-05'
      const startNums = '0-1'
      const pypNums = ['0-1', '2-3', '4-5', '6-7', '8-9']
      return pypFuncs.rotateByWeek(date, startDate, startNums, pypNums)
    }
    return pypFuncs.pyp(date, pypFunction, options)
  },
}
