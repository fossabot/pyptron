const pypFuncs = require('../utils/funcs')

module.exports = {
  name: 'Medellín',
  categories: {
    particulares: {
      info: {
        vehicleClasses: ['Vehículos particulares y oficiales'],
        decrees: [
          {
            name: 'Decreto 0116 de 2018',
            url:
              'https://www.medellin.gov.co/movilidad/jdownloads/Normas/Normatividad/Decretos%20Municipales/2018/decreto_0116_de_2018.pdf',
          },
        ],
        days: ['Días hábiles de la semana - lunes a viernes.'],
        hours: [
          {
            comment: '',
            hours: [['7:00', '8:30'], ['17:30', '19:00']],
            days: [],
          },
        ],
        scheme:
          'Restringe la circulación de vehículos particulares y oficiales',
        observations:
          'La rotación de la medida de “Pico y placa” para toda la ciudad de Medellín, que restringe la circulación de vehículos particules y oficiales, quedará rigiendo durante los periodos comprendidos entre las 07:00 y las 08:30 horas y entre las 17:30 y las 19:00 horas, durante los días hábiles de la semana por grupos de vehículos, según el último número de su placa, a partir del lunes 5 de febrero de 2018.',
        exceptions: `<ul>
        <li>Vehículos de emergencia (ambulancias incluidas las veterinarias, bomberos y todos aquellos que transporten equipo y material logístico para atención de emergencias, así como los que prestan atención médica personalizada) y los vehículos requeridos para la atención de siniestros, siempre que se encuentren demarcados con identificación permanente trasera.</li>
        <li>Los vehículos particulares y oficiales que usen gas natural vehicular en vez de combustible, previa inscripción ante la Secretaría de Movilidad de Medellín; exención que será válida a partir del momento en que el peticionario reciba la comunicación de la Secretaria de Movilidad, aprobando esta situación. En el momento de ser requerido por la autoridad en la vía pública será igualmente exento, siempre y cuando lo acredite con la última certificación anual para el uso de gas natural vehicular vigente. Para aquellos vehículos que formalicen en la licencia de tránsito el cambio de combustible a gas natural vehicular y pertenezcan al parque automotor, matriculado en este Organismo de Tránsito, quedarán automáticamente exentos de la medida. Para la inscripción ante la Secretaria de Movilidad de Medellín, deberá aportarse la solicitud respectiva acompañada con la copia del documento de identificación del propietario del automotor y copia de la licencia de tránsito, en la cual conste el cambio de combustible o copia de la última certificación anual vigente para el uso de gas natural vehicular.</li>
        <li>Vehículos eléctricos que pertenezcan al parque automotor matriculado en esta Secretaría de Movilidad, quedarán automáticamente exentos de la medida. Para aquellos vehículos eléctricos que pertenezcan a otros organismos de tránsito, previa inscripción ante la Secretaría de Movilidad de Medellín; exención que será válida a partir del momento en que el peticionario reciba la comunicación de la Secretaría de Movilidad, aprobando esta situación. En el momento de ser requerido por la autoridad en la vía pública será igualmente exento, siempre y cuando lo acredite con la licencia de tránsito. Para la inscripción ante la Secretaría de Movilidad de Medellín, deberá aportarse la solicitud respectiva acompañada con la copia del documento de identificación del propietario del automotor y copia de la licencia de tránsito.</li>
        <li>Vehículos de servicio de transporte terrestre automotor especial, demarcados con identificación permanente trasera; así como los vehículos colectivos tipo bus, buseta y/o microbus de servicio particular de propiedad de las empresas destinadas al transporte de su personal.</li>
        <li>Vehículos destinados al transporte de alimentos y/o elementos perecederos, debidamente acreditados y vinculados a la actividad comercial, ante la Secretaría de Movilidad de Medellín, los cuales deberán contar con identificación permanente trasera e inscripción previa ante este Organismo de Tránsito.</li>
        <li>Los vehículos con capacidad de carga en cuya licencia de tránsito se establezca una capacidad de pasajeros no superior a dos (2) personas y que cuenten con capacidad equivalente a 3.5 toneladas o más. Así mismo, los vehículos de servicio público de transporte terrestre automotor, cualquiera sea su capacidad de carga, en ambos casos estarán exentos de la presente medida. Seguirán vigentes las restricciones establecidas para el transporte de carga en el artículo 2do del Decreto Municipal 514 de 9 de abril de 2015.</li>
        <li>Vehículos dotados tecnológicamente para el mantenimiento de redes de servicios públicos esenciales (energía, semaforización, telefonía, acueducto y alcantarillado, gas, Sistema de Transporte Masivo), así como los vehículos de las empresas de servicios públicos domiciliarios; los cuales deberán contar con demarcación e identificación permanente trasera; igualmente los vehículos recolectores de basura con identificación visual externa.</li>
        <li>Vehículos de propiedad de medios de comunicación debidamente identificados; así como los vehículos contratados y acreditados, mientras estén al servicio de los medios de comunicación; además, aquellos que estén dotados de equipos que no permitan que sean reemplazados por otro vehículo. En cualquiero caso deberán tener identificación visual externa.</li>
        <li>Vehículos pertenecientes a las Fuerzas Militares, Policía Nacional e INPEC.</li>
        <li>Vehículos destinados al control del tránsito, las grúas, carros talleres, los de asistencia técnica y/o jurídica, debidamente identificados en forma visual externa.</li>
        <li>Vehículos particulares y oficiales destinados al transporte de personas en situación de discapacidad o pacientes y/o personal médico, que se desplacen en ellos en razón de tratamientos médicos que por su complejidad y frecuencia lo requieran, durante el tiempo que dure el tratamiento o que por las características del paciente no pueda transportarse por sí mismo. En todo caso, deberá acreditarse dicho tratamiento y duración por el médico tratante o a través de la historia clínica o certificación emitida por éste.</li>
        <li>Vehículos acreditados para transporte de valores, los cuales requerirán marcación permanente en la parte trasera.</li>
        <li>Vehículos de transporte público colectivo.</li>
        <li>Vehículos con blindaje igual o superio a nivel 3 y que esté registrado en la respectiva licencia de tránsito del vehículo, previa inscripción ante la Secretaría de Movilidad de Medellín. Para esta inscripción deberá aportar copia de la cédula de ciudadanía del propietario, copia de la licencia de tránsito.</li>
        <li>Coches funerarios, más no el cortejo fúnebre, siempre que se esté portando el logo de la funeraria a la cual pertence el vehículo de manera permanente.</li>
        <li>Vehículos pertenecientes a empresas privadas de vigilancia, siempre que porten identificación visual externa permanente.</li>
        <li>Vehículos oficiales de representación debidamente acreditados, entendiéndose éstos como aquellos vehículos de propiedad de entidades públicas destinados al desplazamiento de sus servidores públicos.</li>
        <li>Vehículos consulares con placa de color azul asignada y en los cuales se desplace personal consular debidamente acreditado; así mismo los cónsules honorarios podrán inscribir un solo vehículo por cónsul para circular en el mismo, siempre que éste figure como propietario del automotor y realice previa inscripción.</li>
        <li>Vehículos particulares y oficiales en los que se tranporten Magistrados de los diferentes Tribunales, Jueces, Fuscales, Defensores Públicos y de Familia, Procuradores, Inspectores Urbanos de Policía de Primera Categoría, Comisarios de Familia, Corregidores, Obispos, Arzobispos y presbíteros, Concejales, Personeros, Contralores y Vice Contralores, Registrador Municipal y/o Especial, Departamental del Estado Civil. Lo anterior aplica para el personal perteneciente a los municipios que confirman el Área Metropilitana del Valle de Aburrá. Así mismo, para los vehículos particulares u oficiales en que se transporten Diputados, Congresistas y personal de la Agencia Nacional de Protección.</li>
        <li>Los vehículos con placas de municipios de otros departamenteos, siempre y cuando su conductor demuestre la calidad de turista con la exhibición del tiquete del primer peaje de ingreso al departamento de Antioquia, el cual será válido como medio de prueba ante la autoridad competente y solo para el primer día de estadía en el Municipio.</li>
        <li>Los demás casos en los que por estricta y justificada necesidad, sean autorizados de manera temportal por la Secretaría de Movilidad.</li>
        </ul>`,
      },
      name: 'Particulares',
      pyp(date) {
        return pypFuncs.pyp({
          date,
          excludedDays: [0, 6],
          skipHolidays: true,
          processingFunction() {
            const startDate = '2018-02-05'
            const pypNums = [
              '4-5-6-7', // lunes
              '8-9-0-1', // martes
              '2-3-4-5', // miércoles
              '6-7-8-9', // jueves
              '0-1-2-3', // viernes
            ]
            const lapse = pypFuncs.monthsDiff(startDate, date, 6)
            const newPypNums = pypFuncs.arrRotate(pypNums, lapse)
            return newPypNums[pypFuncs.getDay(date) - 1]
          },
        })
      },
    },
    motos: {
      info: {
        vehicleClasses: ['Motos de dos tiempos'],
        decrees: [
          {
            name: 'Decreto 0116 de 2018',
            url:
              'https://www.medellin.gov.co/movilidad/jdownloads/Normas/Normatividad/Decretos%20Municipales/2018/decreto_0116_de_2018.pdf',
          },
        ],
        days: ['Días hábiles de la semana - lunes a viernes.'],
        hours: [
          {
            comment: '',
            hours: [['7:00', '8:30'], ['17:30', '19:00']],
            days: [],
          },
        ],
        scheme:
          'Restringe la circulación de motos de dos tiempos según el primer número de su placa',
        observations:
          'La rotación de la medida de “Pico y placa” para motos de dos tiempos, quedará rigiendo entre las 07:00 y las 08:30 y entre las 17:30 y las 19:00 horas, durante los días hábiles de la semana, según el primer número de su placa, a partir del lunes 05 de febrero de 2018.',
        exceptions: `<ul>
          <li>Vehículos de emergencia (ambulancias incluidas las veterinarias, bomberos y todos aquellos que transporten equipo y material logístico para atención de emergencias, así como los que prestan atención médica personalizada) y los vehículos requeridos para la atención de siniestros, siempre que se encuentren demarcados con identificación permanente trasera.</li>
          <li>Los vehículos particulares y oficiales que usen gas natural vehicular en vez de combustible, previa inscripción ante la Secretaría de Movilidad de Medellín; exención que será válida a partir del momento en que el peticionario reciba la comunicación de la Secretaria de Movilidad, aprobando esta situación. En el momento de ser requerido por la autoridad en la vía pública será igualmente exento, siempre y cuando lo acredite con la última certificación anual para el uso de gas natural vehicular vigente. Para aquellos vehículos que formalicen en la licencia de tránsito el cambio de combustible a gas natural vehicular y pertenezcan al parque automotor, matriculado en este Organismo de Tránsito, quedarán automáticamente exentos de la medida. Para la inscripción ante la Secretaria de Movilidad de Medellín, deberá aportarse la solicitud respectiva acompañada con la copia del documento de identificación del propietario del automotor y copia de la licencia de tránsito, en la cual conste el cambio de combustible o copia de la última certificación anual vigente para el uso de gas natural vehicular.</li>
          <li>Vehículos eléctricos que pertenezcan al parque automotor matriculado en esta Secretaría de Movilidad, quedarán automáticamente exentos de la medida. Para aquellos vehículos eléctricos que pertenezcan a otros organismos de tránsito, previa inscripción ante la Secretaría de Movilidad de Medellín; exención que será válida a partir del momento en que el peticionario reciba la comunicación de la Secretaría de Movilidad, aprobando esta situación. En el momento de ser requerido por la autoridad en la vía pública será igualmente exento, siempre y cuando lo acredite con la licencia de tránsito. Para la inscripción ante la Secretaría de Movilidad de Medellín, deberá aportarse la solicitud respectiva acompañada con la copia del documento de identificación del propietario del automotor y copia de la licencia de tránsito.</li>
          <li>Vehículos de servicio de transporte terrestre automotor especial, demarcados con identificación permanente trasera; así como los vehículos colectivos tipo bus, buseta y/o microbus de servicio particular de propiedad de las empresas destinadas al transporte de su personal.</li>
          <li>Vehículos destinados al transporte de alimentos y/o elementos perecederos, debidamente acreditados y vinculados a la actividad comercial, ante la Secretaría de Movilidad de Medellín, los cuales deberán contar con identificación permanente trasera e inscripción previa ante este Organismo de Tránsito.</li>
          <li>Los vehículos con capacidad de carga en cuya licencia de tránsito se establezca una capacidad de pasajeros no superior a dos (2) personas y que cuenten con capacidad equivalente a 3.5 toneladas o más. Así mismo, los vehículos de servicio público de transporte terrestre automotor, cualquiera sea su capacidad de carga, en ambos casos estarán exentos de la presente medida. Seguirán vigentes las restricciones establecidas para el transporte de carga en el artículo 2do del Decreto Municipal 514 de 9 de abril de 2015.</li>
          <li>Vehículos dotados tecnológicamente para el mantenimiento de redes de servicios públicos esenciales (energía, semaforización, telefonía, acueducto y alcantarillado, gas, Sistema de Transporte Masivo), así como los vehículos de las empresas de servicios públicos domiciliarios; los cuales deberán contar con demarcación e identificación permanente trasera; igualmente los vehículos recolectores de basura con identificación visual externa.</li>
          <li>Vehículos de propiedad de medios de comunicación debidamente identificados; así como los vehículos contratados y acreditados, mientras estén al servicio de los medios de comunicación; además, aquellos que estén dotados de equipos que no permitan que sean reemplazados por otro vehículo. En cualquiero caso deberán tener identificación visual externa.</li>
          <li>Vehículos pertenecientes a las Fuerzas Militares, Policía Nacional e INPEC.</li>
          <li>Vehículos destinados al control del tránsito, las grúas, carros talleres, los de asistencia técnica y/o jurídica, debidamente identificados en forma visual externa.</li>
          <li>Vehículos particulares y oficiales destinados al transporte de personas en situación de discapacidad o pacientes y/o personal médico, que se desplacen en ellos en razón de tratamientos médicos que por su complejidad y frecuencia lo requieran, durante el tiempo que dure el tratamiento o que por las características del paciente no pueda transportarse por sí mismo. En todo caso, deberá acreditarse dicho tratamiento y duración por el médico tratante o a través de la historia clínica o certificación emitida por éste.</li>
          <li>Vehículos acreditados para transporte de valores, los cuales requerirán marcación permanente en la parte trasera.</li>
          <li>Vehículos de transporte público colectivo.</li>
          <li>Vehículos con blindaje igual o superio a nivel 3 y que esté registrado en la respectiva licencia de tránsito del vehículo, previa inscripción ante la Secretaría de Movilidad de Medellín. Para esta inscripción deberá aportar copia de la cédula de ciudadanía del propietario, copia de la licencia de tránsito.</li>
          <li>Coches funerarios, más no el cortejo fúnebre, siempre que se esté portando el logo de la funeraria a la cual pertence el vehículo de manera permanente.</li>
          <li>Vehículos pertenecientes a empresas privadas de vigilancia, siempre que porten identificación visual externa permanente.</li>
          <li>Vehículos oficiales de representación debidamente acreditados, entendiéndose éstos como aquellos vehículos de propiedad de entidades públicas destinados al desplazamiento de sus servidores públicos.</li>
          <li>Vehículos consulares con placa de color azul asignada y en los cuales se desplace personal consular debidamente acreditado; así mismo los cónsules honorarios podrán inscribir un solo vehículo por cónsul para circular en el mismo, siempre que éste figure como propietario del automotor y realice previa inscripción.</li>
          <li>Vehículos particulares y oficiales en los que se tranporten Magistrados de los diferentes Tribunales, Jueces, Fuscales, Defensores Públicos y de Familia, Procuradores, Inspectores Urbanos de Policía de Primera Categoría, Comisarios de Familia, Corregidores, Obispos, Arzobispos y presbíteros, Concejales, Personeros, Contralores y Vice Contralores, Registrador Municipal y/o Especial, Departamental del Estado Civil. Lo anterior aplica para el personal perteneciente a los municipios que confirman el Área Metropilitana del Valle de Aburrá. Así mismo, para los vehículos particulares u oficiales en que se transporten Diputados, Congresistas y personal de la Agencia Nacional de Protección.</li>
          <li>Los vehículos con placas de municipios de otros departamenteos, siempre y cuando su conductor demuestre la calidad de turista con la exhibición del tiquete del primer peaje de ingreso al departamento de Antioquia, el cual será válido como medio de prueba ante la autoridad competente y solo para el primer día de estadía en el Municipio.</li>
          <li>Los demás casos en los que por estricta y justificada necesidad, sean autorizados de manera temportal por la Secretaría de Movilidad.</li>
          </ul>`,
      },
      name: 'Motos',
      pyp(date) {
        return pypFuncs.pyp({
          date,
          excludedDays: [0, 6],
          skipHolidays: true,
          processingFunction() {
            const startDate = '2018-02-05'
            const pypNums = [
              '8-9', // lunes
              '0-1', // martes
              '2-3', // miércoles
              '4-5', // jueves
              '6-7', // viernes
            ]
            const lapse = pypFuncs.monthsDiff(startDate, date, 6)
            const newPypNums = pypFuncs.arrRotate(pypNums, lapse)
            return newPypNums[pypFuncs.getDay(date) - 1]
          },
        })
      },
    },
    taxis: {
      info: {
        vehicleClasses: ['Transporte público individual - taxis'],
        decrees: [
          {
            name: 'Decreto 0116 de 2018',
            url:
              'https://www.medellin.gov.co/movilidad/jdownloads/Normas/Normatividad/Decretos%20Municipales/2018/decreto_0116_de_2018.pdf',
          },
        ],
        days: ['Días hábiles de la semana - lunes a viernes.'],
        hours: [
          {
            comment: '',
            hours: [['6:00', '20:00']],
            days: [],
          },
        ],
        scheme: 'De acuerdo con el último número de la placa del vehículo',
        observations:
          'La rotación de la medida de “Pico y placa” para el transporte público individual (taxis) que circulen en la Jurisdicción de Medellín, seguirá siendo cada dos semanas en el horario comprendido enre las 06:00 y las 20:00 horas durante los días hábiles de la semana por grupos de vehículos, según el último número de su placa, a partir del jueves 1 de febrero de 2018.',
      },
      name: 'Taxis',
      pyp(date) {
        return pypFuncs.pyp({
          date,
          excludedDays: [0, 6],
          skipHolidays: true,
          processingFunction() {
            const dateObject = new Date(date)
            const startDate = new Date('2018-01-01T05:00:00.000Z')
            const millisecondsPerDay = 1000 * 60 * 60 * 24
            const millisecondsDiff = dateObject - startDate
            const daysDiff = millisecondsDiff / millisecondsPerDay
            const weeksOffset = Math.ceil((daysDiff + 1) / 7)
            let pypNums = [
              ['5', '0'],
              ['6', '1'],
              ['7', '2'],
              ['3', '8'],
              ['4', '9'],
            ]
            if (dateObject >= new Date('2018-05-07T05:00:00.000Z')) {
              pypNums[2] = ['2', '7']
              pypNums[3] = ['8', '3']
            }
            if (dateObject >= new Date('2019-01-08T05:00:00.000Z')) {
              pypNums[0] = ['0', '5']
              pypNums[4] = ['9', '4']
            }
            const monthsDiff = dateObject.getMonth() - startDate.getMonth()
            const yearsDiff = dateObject.getFullYear() - startDate.getFullYear()
            const monthsDiffAccu = monthsDiff + yearsDiff * 12
            const datesWeekDay = dateObject.getDay()
            const datesDate = dateObject.getDate()
            const weekOfMonth = Math.floor((datesDate - datesWeekDay) / 7)
            const offset = monthsDiffAccu - (weekOfMonth < 0 ? 1 : 0)
            pypNums = pypFuncs.arrRotate(pypNums, offset < 0 ? 0 : offset)

            return pypNums[datesWeekDay - 1][(weeksOffset + 1) % 2]
          },
        })
      },
    },
  },
}
