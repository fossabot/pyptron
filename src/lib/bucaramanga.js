const pypFuncs = require('../utils/funcs')

module.exports = {
  name: 'Bucaramanga',
  categories: {
    particulares: [
      {
        from: '2018-01-06',
        info: {
          vehicleClasses: [
            'Vehículos de toda clase de servicio particular y público (excepto servicio tipo taxi)',
          ],
          decrees: [
            {
              name: 'Resolución 108 de 2018',
              url:
                'http://transitobucaramanga.gov.co/resolucion/archivos/108-03-2018.pdf',
            },
            {
              name: 'Resolución 435 de 2017',
              url:
                'http://transitobucaramanga.gov.co/resolucion/archivos/435-08-2017.pdf',
            },
            {
              name: 'Resolución 782 de 2017',
              url:
                'http://transitobucaramanga.gov.co/resolucion/archivos/782-12-2017.pdf',
            },
            {
              name: 'Resolución 783 de 2017',
              url:
                'http://transitobucaramanga.gov.co/resolucion/archivos/783-12-2017.pdf',
            },
          ],
          days: ['Lunes a sábado hábiles'],
          hours: [
            {
              comment: 'Lunes a viernes',
              hours: [['6:00', '20:00']],
              days: [1, 2, 3, 4, 5],
            },
            {
              comment: 'Sábados',
              hours: [['9:00', '13:00']],
              days: [6],
            },
          ],
          scheme: 'Según el último dígito del número de la placa',
          observations:
            'Rige para vehículos de toda clase de servicio particular y público (excepto servicio tipo taxi), oficial, diplomático, consular y vehículos de importanción temporal y/o matricula extranjera.',
          exceptions: `Los vehículos que se encuentren cumpliendo las actividades enunciadas a continuación, los cuales, siempre y cuando estén plenamente identificados, no rquieren de acreditación de la empresa o institución, ni autorización de la Dirección de Tránsito de Bucaramanga para la circulación en vías con restricción vehicular:
        <ul>
          <li>Transporte Público urbano de pasajeros del Sistema de Transporte Masivo y colectivo.</li>
          <li>Transporte Público de pasajeros de radio de acción interminucipal, departamental, nacional y anillos viales, de acuerdo con la REsolución 608 de 2013, por la cual se adoptaron las medidas de control ordenadas por los Acuerdos Metropolitanos 016 de agosto de 2013 y 023 de octubre de 2013.</li>
          <li>Los vehículos que conformen las caravanas presidenciales, vehículos oficiales, vehículos diplomáticos, vehícuolos de Bomberos, Cruz Roja, Defensa Civil y recolectores de basura.</li>
          <li>Los vehículos que ingresen a la ciudad de Bucaramanga provenientes de Lebrija contarán con dos horas de excepción a la medida de restricción después de impreso el ticket acreditando el recibo del peaje actualizado con fecha de ingreso del mismo día.</li>
          <li>Los vehículos que ingresen a la ciudad de Bucaramanga provientes de otros municipios ajenos al Área Metropolitana contarán con excepción a la medida de restricción, acreditando el último ticket del peaje actualizado con fecha del mismo día.</li>
          <li>Los vehículos de propiedad de las Fuerzas Militares, Policía Nacional, Criminalística, Unidad Nacional de Protección, INPEC y Fiscalía, destinados al transporte de sus funcionarios o del personal detenido y en general, los de propiedad de los organismos de seguridad del Estado, plenamente identificados.</li>
          <li>Autoridades de Tránsito y Control.</li>
          <li>Los vehículos conducidos o que transporten persona con discapacidad de manera habitual, de conformidad con el Artículo 15 Numeral 6 de la Ley 1618 de 2013, reglamentado por la Resolución 4575 de 2013 del Ministerio de Transporte, siempre que acrediten las condiciones del artículo 2 de la citada resolución y se inscriban en la base de datos de personas con discapacidad de la entidad.</li>
          <li>Los vehículos ocupados por los presidentes de las Juntas Administradoras Locales y Presidentes de las JUntas de Acción Comunal, Concejales del Municipio de Bucaramanga y Diputados de las Asamblea de Santander.</li>
          <li>Los vehículos de servicios de asistencia médica especializada identificados externamente, los de emergencia en salud demarcado con identificación permanente (ambulancias, transporte de materiales logísticos), los conducidos por médicos o paramédicos que cumplan labores de urgencia, demarcados con identificación permanente de propiedad de las empresas.</li>
          <li>Los vehículos destinados a carrozas fúnebres y de asistencia a funerarias.</li>
          <li>Los vehículos automotores propulsados por motores eléctricos debidamente matriculados.</li>
          <li>Los vehículos dotados de quipos que no permitan ser reemplazados por otro vehículo automotor, destinados al mantenimiento de redes de servicios públicos esenciales (energía, telefonía, acueducto, alcantarillado, gas, semaforización y señalización) demarcados con identificación permanente de propiedad de las empresas.</li>
          <li>Los vehículos que estén ocupados por Magistrados, Jueces, Procuradores, Investigadores, Fiscales, Contralor del Municipio de Bucaramanga, Personer, Defensor del Pueblo, Registrador del Estado Civil y miembros de la Organización Electral debidamente autorizados (estos últimos únicamente en época elctoral), deben portar la identificación vigente que así lo acredite.</li>
          <li>Los vehículos conducidos por los miembros activos de la Policía Cívia, para lo cual deben portar la identificacón correspondiente.</li>
          <li>Los vehículos de servicio especial destinados al transporte de estudiantes, asalariados, turistas "prestadores de servicios turísticos", vinculados a una empresa legalmente constituida y debidamente habilitada en esta modalidad.</li>
          <li></li>
        </ul>
        Los vehículos enunciados a continuación están sujetos al pago del permiso de circulación registrada, previa autorización de la Dirección de Tránsito de Bucaramanga:
        <ul>
          <li>Los vehículos dotados de equipos que no permitan ser reemplazados por otro vehículo automotor, destinados al mantenimiento de redes de servicios públicos esenciales (energía, telefonía, acueducto, alcantarillado, gas, semaforización y señalización) demarcados con identificación permanente y vinculados mediante contrato, con empresas que presten dichos servicios públicos.</li>
          <li>Los vehículos destinados al transporte de valores, blindados y acondicionados de acuerdo con las normas de seguridad.</li>
          <li>Los vehículos y motocicletas de los Centros de Enseñanza Automovilística (CEA) que se encuentren debidamente identificados con sus respectivos logotipos, siempre y cuando estén ocupados por el instructor y aprendiz, o porten la planilla de trabajo debidamente diligenciada; los de directivos de Centros de Reconocimiento de Conductores (CRC) o asosores de concesionarias que adelante trámites ante la Dirección de Tránsito de Bucaramanga.</li>
          <li>Los vehículos que presten protección y seguridad a las personas previa certificación de los organismos de seguridad del Estado que requieran de este servicio.</li>
          <li>Los vehículos de prieba (test drive) de las concesionarias.</li>
          <li>Los vehículos que tengan blindaje igual o superior a nivel tres (3).</li>
          <li>Los vehículos relacionados con la asistencia técnica: grúas, carros talleres y similares.</li>
          <li>Los vehículos que sean de propiedad de las empresas de vigilancia y seguridad privada.</li>
          <li>Los vehículos conducidos por personal que cumpla labores de logística con entidades del Estado.</li>
          <li>Los vehículos conducidos por mensajeros, mercaderistas, preventistas, impulsadores y promotores de propiedad de las empresas o que estén vinculados mediante contrato de conformidad con los requisitos de Ley, deben acreditar víncylo laboral mediante carta labora, contrato de trabajo, y afiliación a seguridad social; los vehículos tipo motocicleta deberán transitar únicamente con el conductor de estos servicios.</li>
          <li>Los vehículos de servicio de asistencia médica especializada identificados externamente, los de emergencias de salud demarcados con identificación permanente "ambulancias, transporte de materiales logísticos", los condicudos por médicos o paramédicos que cumplan labores de urgencia, demarcados con identificación permanente que estén vinculados mediante contrato debidamente certificado y vigente.</li>
          <li>Los vehículos de propiedad de las empresas procesadoras o distribuidoras que repartan y lleven consigo alimentos perecederos de consumo humano, los cuales deberán estar demarcados con identificación permanente de propiedad de las empresas y/o que estén vinculados mediante contrato debidamente certificado y vigente.</li>
          <li>Se entenderá como alimento perecedero, el alimento que debido a su composición, características físico - químicas y biológicas, pueda experimentar alteración de diversa naturaleza en un tiempo determinado y que por lo tanto, exige condiciones especiales de proceso, conservación, almacenamiento, transporte y expendio.</li>
        </ul>`,
        },
        name: 'Particulares',
        na: [0],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, true, () => {
            if (pypFuncs.getDay(date) === 6) {
              const startNums = '3-4'
              const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
              const startDate = '2018-01-06'
              return pypFuncs.rotateByWeek(
                date,
                startDate,
                startNums,
                pypNums,
                true
              )
            }
            const startNums = '3-4'
            const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
            const startDate = '2018-01-01'
            return pypFuncs.rotateByMonth(
              date,
              startDate,
              startNums,
              pypNums,
              true,
              3
            )
          })
        },
      },
    ],
    motos: [
      {
        from: '2018-01-06',
        info: {
          vehicleClasses: ['Vehículos tipo motocicletas'],
          decrees: [
            {
              name: 'Resolución 108 de 2018',
              url:
                'http://transitobucaramanga.gov.co/resolucion/archivos/108-03-2018.pdf',
            },
            {
              name: 'Resolución 435 de 2017',
              url:
                'http://transitobucaramanga.gov.co/resolucion/archivos/435-08-2017.pdf',
            },
            {
              name: 'Resolución 782 de 2017',
              url:
                'http://transitobucaramanga.gov.co/resolucion/archivos/782-12-2017.pdf',
            },
            {
              name: 'Resolución 783 de 2017',
              url:
                'http://transitobucaramanga.gov.co/resolucion/archivos/783-12-2017.pdf',
            },
          ],
          days: ['Lunes a sábado hábiles'],
          hours: [
            {
              comment: 'Lunes a viernes',
              hours: [['6:00', '20:00']],
              days: [1, 2, 3, 4, 5],
            },
            {
              comment: 'Sábados',
              hours: [['9:00', '13:00']],
              days: [6],
            },
          ],
          scheme:
            'Último dígito numérico de la placa según el esquema sin tener en cuenta la letra o letras finales',
          observations:
            'Rige para vehículos de toda clase de servicio particular y público (excepto servicio tipo taxi), oficial, diplomático, consular y vehículos de importanción temporal y/o matricula extranjera.',
          exceptions: `Los vehículos que se encuentren cumpliendo las actividades enunciadas a continuación, los cuales, siempre y cuando estén plenamente identificados, no rquieren de acreditación de la empresa o institución, ni autorización de la Dirección de Tránsito de Bucaramanga para la circulación en vías con restricción vehicular:
          <ul>
            <li>Transporte Público urbano de pasajeros del Sistema de Transporte Masivo y colectivo.</li>
            <li>Transporte Público de pasajeros de radio de acción interminucipal, departamental, nacional y anillos viales, de acuerdo con la REsolución 608 de 2013, por la cual se adoptaron las medidas de control ordenadas por los Acuerdos Metropolitanos 016 de agosto de 2013 y 023 de octubre de 2013.</li>
            <li>Los vehículos que conformen las caravanas presidenciales, vehículos oficiales, vehículos diplomáticos, vehícuolos de Bomberos, Cruz Roja, Defensa Civil y recolectores de basura.</li>
            <li>Los vehículos que ingresen a la ciudad de Bucaramanga provenientes de Lebrija contarán con dos horas de excepción a la medida de restricción después de impreso el ticket acreditando el recibo del peaje actualizado con fecha de ingreso del mismo día.</li>
            <li>Los vehículos que ingresen a la ciudad de Bucaramanga provientes de otros municipios ajenos al Área Metropolitana contarán con excepción a la medida de restricción, acreditando el último ticket del peaje actualizado con fecha del mismo día.</li>
            <li>Los vehículos de propiedad de las Fuerzas Militares, Policía Nacional, Criminalística, Unidad Nacional de Protección, INPEC y Fiscalía, destinados al transporte de sus funcionarios o del personal detenido y en general, los de propiedad de los organismos de seguridad del Estado, plenamente identificados.</li>
            <li>Autoridades de Tránsito y Control.</li>
            <li>Los vehículos conducidos o que transporten persona con discapacidad de manera habitual, de conformidad con el Artículo 15 Numeral 6 de la Ley 1618 de 2013, reglamentado por la Resolución 4575 de 2013 del Ministerio de Transporte, siempre que acrediten las condiciones del artículo 2 de la citada resolución y se inscriban en la base de datos de personas con discapacidad de la entidad.</li>
            <li>Los vehículos ocupados por los presidentes de las Juntas Administradoras Locales y Presidentes de las JUntas de Acción Comunal, Concejales del Municipio de Bucaramanga y Diputados de las Asamblea de Santander.</li>
            <li>Los vehículos de servicios de asistencia médica especializada identificados externamente, los de emergencia en salud demarcado con identificación permanente (ambulancias, transporte de materiales logísticos), los conducidos por médicos o paramédicos que cumplan labores de urgencia, demarcados con identificación permanente de propiedad de las empresas.</li>
            <li>Los vehículos destinados a carrozas fúnebres y de asistencia a funerarias.</li>
            <li>Los vehículos automotores propulsados por motores eléctricos debidamente matriculados.</li>
            <li>Los vehículos dotados de quipos que no permitan ser reemplazados por otro vehículo automotor, destinados al mantenimiento de redes de servicios públicos esenciales (energía, telefonía, acueducto, alcantarillado, gas, semaforización y señalización) demarcados con identificación permanente de propiedad de las empresas.</li>
            <li>Los vehículos que estén ocupados por Magistrados, Jueces, Procuradores, Investigadores, Fiscales, Contralor del Municipio de Bucaramanga, Personer, Defensor del Pueblo, Registrador del Estado Civil y miembros de la Organización Electral debidamente autorizados (estos últimos únicamente en época elctoral), deben portar la identificación vigente que así lo acredite.</li>
            <li>Los vehículos conducidos por los miembros activos de la Policía Cívia, para lo cual deben portar la identificacón correspondiente.</li>
            <li>Los vehículos de servicio especial destinados al transporte de estudiantes, asalariados, turistas "prestadores de servicios turísticos", vinculados a una empresa legalmente constituida y debidamente habilitada en esta modalidad.</li>
          </ul>
          Los vehículos enunciados a continuación están sujetos al pago del permiso de circulación registrada, previa autorización de la Dirección de Tránsito de Bucaramanga:
          <ul>
            <li>Los vehículos dotados de equipos que no permitan ser reemplazados por otro vehículo automotor, destinados al mantenimiento de redes de servicios públicos esenciales (energía, telefonía, acueducto, alcantarillado, gas, semaforización y señalización) demarcados con identificación permanente y vinculados mediante contrato, con empresas que presten dichos servicios públicos.</li>
            <li>Los vehículos destinados al transporte de valores, blindados y acondicionados de acuerdo con las normas de seguridad.</li>
            <li>Los vehículos y motocicletas de los Centros de Enseñanza Automovilística (CEA) que se encuentren debidamente identificados con sus respectivos logotipos, siempre y cuando estén ocupados por el instructor y aprendiz, o porten la planilla de trabajo debidamente diligenciada; los de directivos de Centros de Reconocimiento de Conductores (CRC) o asosores de concesionarias que adelante trámites ante la Dirección de Tránsito de Bucaramanga.</li>
            <li>Los vehículos que presten protección y seguridad a las personas previa certificación de los organismos de seguridad del Estado que requieran de este servicio.</li>
            <li>Los vehículos de prieba (test drive) de las concesionarias.</li>
            <li>Los vehículos que tengan blindaje igual o superior a nivel tres (3).</li>
            <li>Los vehículos relacionados con la asistencia técnica: grúas, carros talleres y similares.</li>
            <li>Los vehículos que sean de propiedad de las empresas de vigilancia y seguridad privada.</li>
            <li>Los vehículos conducidos por personal que cumpla labores de logística con entidades del Estado.</li>
            <li>Los vehículos conducidos por mensajeros, mercaderistas, preventistas, impulsadores y promotores de propiedad de las empresas o que estén vinculados mediante contrato de conformidad con los requisitos de Ley, deben acreditar víncylo laboral mediante carta labora, contrato de trabajo, y afiliación a seguridad social; los vehículos tipo motocicleta deberán transitar únicamente con el conductor de estos servicios.</li>
            <li>Los vehículos de servicio de asistencia médica especializada identificados externamente, los de emergencias de salud demarcados con identificación permanente "ambulancias, transporte de materiales logísticos", los condicudos por médicos o paramédicos que cumplan labores de urgencia, demarcados con identificación permanente que estén vinculados mediante contrato debidamente certificado y vigente.</li>
            <li>Los vehículos de propiedad de las empresas procesadoras o distribuidoras que repartan y lleven consigo alimentos perecederos de consumo humano, los cuales deberán estar demarcados con identificación permanente de propiedad de las empresas y/o que estén vinculados mediante contrato debidamente certificado y vigente.</li>
            <li>Se entenderá como alimento perecedero, el alimento que debido a su composición, características físico - químicas y biológicas, pueda experimentar alteración de diversa naturaleza en un tiempo determinado y que por lo tanto, exige condiciones especiales de proceso, conservación, almacenamiento, transporte y expendio.</li>
          </ul>`,
        },
        name: 'Motos',
        na: [0],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, true, () => {
            if (pypFuncs.getDay(date) === 6) {
              const startDate = '2018-01-06'
              const startNums = '3-4'
              const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
              return pypFuncs.rotateByWeek(
                date,
                startDate,
                startNums,
                pypNums,
                true
              )
            }
            const startNums = '3-4'
            const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
            const startDate = '2018-01-01'
            return pypFuncs.rotateByMonth(
              date,
              startDate,
              startNums,
              pypNums,
              true,
              3
            )
          })
        },
      },
    ],
    taxis: [
      {
        from: '2018-01-08',
        info: {
          vehicleClasses: ['Vehículos de servicio público individual - taxis'],
          decrees: [
            {
              name: 'Resolución 277 del 27 de Abril de 2006',
              url: '',
            },
            {
              name: 'Resolución 475 del 23 de Junio de 2006',
              url: '',
            },
            {
              name: 'Resolución 487 del 30 de Junio de 2006',
              url: '',
            },
          ],
          days: ['Lunes a sábado hábiles'],
          hours: [
            {
              comment: '',
              hours: [['7:00', '21:00']],
              days: [],
            },
          ],
          scheme: 'Último dígito numérico de la placa según el esquema',
          observations: '',
        },
        name: 'Taxis',
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, true, () => {
            const startDate = '2018-01-08'
            const startNums = '1-2'
            const pypNums = ['1-2', '3-4', '5-6', '7-8', '9-0']
            return pypFuncs.rotateByWeek(
              date,
              startDate,
              startNums,
              pypNums,
              true
            )
          })
        },
      },
    ],
  },
}
