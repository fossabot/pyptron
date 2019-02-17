const pypFuncs = require('../utils/funcs')

module.exports = {
  name: 'Cali',
  categories: {
    particulares: {
      info: {
        vehicleClasses: ['Vehículos automotores de servicio particular.'],
        decrees: [
          {
            name: 'Decreto 0801 de 2018',
            url:
              'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=32835',
          },
          {
            name: 'Decreto 4112.010.20.0318-28/06/2018 del 28 de junio de 2018',
            url:
              'http://www.cali.gov.co/aplicaciones/boletin_publicaciones/imagenes_documentos/documentoId11660.pdf',
          },
          {
            name: 'Decreto 0001 del 4 de enero de 2018',
            url:
              'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496',
          },
        ],
        days: [
          'Lunes a viernes hábiles (no aplica sábados, domingos y feriados establecidos por la ley o cuando excepcionalmente lo establezca la autoridad competente).',
        ],
        hours: [
          {
            comment: '',
            hours: [['6:00', '10:00'], ['16:00', '20:00']],
            days: [],
          },
        ],
        scheme: 'Se toma como referencia el último dígito de la placa',
        observations:
          'Restringe la circulación de vehículos de servicio particular, servicio oficial y público solo en la modalidad especial, esta última para los vehículos de clase automovil, campero y camioneta hsta de cinco (5) sillas o puestos, es decir, el conductor más cuatro (4) pasajeros.',
        exceptions: `<ul>
          <li>Vehículos que conformen caravanas presidenciales y demás miembros del nivel ejecutivo nacional, de alcaldes, gobernadores y del cuerpo diplómatico, debidamente acreditadas ante la autoridad competente en el Municipio de Santiago de Calí. Las caravanas presidenciales incluyen, además del Departamento Administrativo de la Presidencia de la República, la Vicepresidencia, los Ministros, Los Directores de Departamentos Administrativos y Superintendentes, los cuales por su transitoriedad, tendrán permiso especial.</li>
          <li>Vehículos adscritos al Ministerio de Defensa Nacional y a la Fuerza Pública en los términos del artículo 216 de la Constitución, Instituto Nacional Penitenciario y Carcelario cuyos vehículos sean operativos destinados al traslado de detenidos, Migración Colombia, debidamente identificados como tales y acreditados ante la autoridad competente en el Municipio de Santiago de Cali.</li>
          <li>Vehículosde Emergencia (Bomberos, Defensa Civil Colombiana, Cruz Roja, equipos logísticos para la atenciójn de desastres, rescates y siniestro) con identificación permanente no removible y Vehículos tipo ambulancia debidamente habilitados ante la Secretaría de Salud de Santiago de Cali y acreditados ante la autoridad competente en el Municipio de Santiago de Cali.</li>
          <li>Los vehículos tipo ambulancia que se encuentren habilitados o acreditados en otros municipios y que transitoriamente curculen por el municipio de Santiago de Cali, deberán presentar ante la autoridad competente en el Municipio de Santiago de Cali su habilitación o acreditación por el organismo competente en su jurisdicción.</li>
          <li>Vehículos dotados tecnológicamente que transporten elementos, equipos y/o herramientas especializadas para el mantenimiento de servicios públicos esenciales (energía, acueducto, alcantarillado, recolección de basuras y gas) con identificación permanente no removible y debidamente acreditadas ante la autoridad competente en el Municipio de Santiago de Cali.</li>
          <li>Vehículos destinados al sistema de control vigilancia y apoyo a la Secretaría de Movilidad debidamente acreditados ante la autoridad competente en el Municipio de Santiago de Calí.</li>
          <li>Vehículos destinados al transporte de Personas con Movilidad Reducida, debidamente acreditados ante la autoridad competente en el Municipio de Santiago de Calí.</li>
          <li>Vehículos de propiedad de medios de comunicación que porten equipos fijos de transmisión con identificación permanente no removible, debidamente registrados ante la autoridad competente en el Municipio de Santiago de Cali.</li>
          <li>Vehículos propulsados por motor eléctrico debidamente acreditados en la Licencia de Tránsito.</li>
          <li>Los vehículos que acrediten pertenecer a esquemas de seguridad de personas protegidas por el estado, certificados por el Ministerio del Interio y Justicia.</li>
          <li>Vehículos de carga con capacidad mayor o igual a 5 toneladas debidamente acreditada en la Licencia de Tránsito.</li>
          <li>Los vehículos de propiedad de los establecimientos educaticos que presten el servicio de transporte escolar.</li>
          <li>Los vehículos contemplados en el artículo segundo del Decreto 0001 del 4 de enero de 2018, cuyos propietarios paguen la Tasa por Confestión o Contaminación establecida mediante Acuerdo Municipal</li>
        </ul>`,
      },
      name: 'Particulares',
      pyp(date) {
        return pypFuncs.pyp({
          date,
          excludedDays: [0, 6],
          skipHolidays: true,
          processingFunction() {
            const startDate = '2018-01-01'
            const pypNums = ['3-4', '5-6', '7-8', '9-0', '1-2']
            const lapse = pypFuncs.monthsDiff(startDate, date, 6)
            const newPypNums = pypFuncs.arrRotate(pypNums, lapse)
            return newPypNums[pypFuncs.getDay(date) - 1]
          },
        })
      },
    },
    taxis: {
      info: {
        vehicleClasses: [
          'Vehículos de transporte público individual de pasajeros - Taxis.',
        ],
        decrees: [
          {
            name: 'Decreto 0801 de 2018',
            url:
              'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=32835',
          },
          {
            name: 'Decreto 4112.010.20.0318-28/06/2018 del 28 de junio de 2018',
            url:
              'http://www.cali.gov.co/aplicaciones/boletin_publicaciones/imagenes_documentos/documentoId11660.pdf',
          },
          {
            name: 'Decreto 0001 del 4 de enero de 2018',
            url:
              'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496',
          },
        ],
        days: ['Lunes a domingo'],
        hours: [
          {
            comment: '',
            hours: [['06:00', '05:00']],
            days: [],
          },
        ],
        scheme:
          'Rotación de acuerdo con el último dígito del número de la placa',
        observations: '',
      },
      name: 'Taxis',
      pyp(date) {
        return pypFuncs.pyp({
          date,
          excludedDays: [],
          skipHolidays: false,
          processingFunction() {
            const startDate = '2018-01-01'
            const startNums = '7-8'
            const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
            return pypFuncs.rotateByDay(date, startDate, startNums, pypNums, [])
          },
        })
      },
    },
    tpc: {
      info: {
        vehicleClasses: [
          'Vehículos de Transporte de Servicio Público Colectivo',
        ],
        decrees: [
          {
            name: 'Decreto 0001 del 4 de enero de 2018',
            url:
              'http://www.cali.gov.co/movilidad/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=25496',
          },
        ],
        days: ['Lunes a domingo'],
        hours: [
          {
            comment: '',
            hours: [['05:00', '22:00']],
            days: [],
          },
        ],
        scheme:
          'Rotación de acuerdo con el último dígito del número de la placa',
        observations: '',
      },
      name: 'Transporte Público Colectivo',
      pyp(date) {
        return pypFuncs.pyp({
          date,
          excludedDays: [],
          skipHolidays: false,
          processingFunction() {
            const startDate = '2018-01-01'
            const startNums = '6-7'
            const pypNums = ['0-1', '2-3', '4-5', '6-7', '8-9']
            return pypFuncs.rotateByDay(date, startDate, startNums, pypNums, [])
          },
        })
      },
    },
  },
}
