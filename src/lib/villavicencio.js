const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Villavicencio",
  categories: {
    particulares: [
      {
        from: "2017-08-01",
        info: {
          vehicleClasses: ["Vehículos automotores de servicio particular"],
          decrees: [
            {
              name: "Decreto 222 de 2018",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-222-del-25-de-julio-de-2018.pdf"
              )
            },
            {
              name: "Decreto 245 de 2017",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-245-del-26-de-julio-de-2017.pdf"
              )
            }
          ],
          days: ["Lunes a viernes"],
          hours: [
            {
              comment: "",
              hours: [["6:30", "19:30"]],
              days: []
            }
          ],
          scheme:
            "La prohibición a la circulación de vehículos automotores particulares se realizará según el último dígito de la placa única nacional y acorde con el día calendario hábil.",
          observations: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10W9kwMwYeJfueGAuk2eqXD982kOfLG-8" width="100%" height="480"></iframe>`,
          exceptions: `<ul>
          <li>Automotores destinados o contratados para el transporte y/o disposición de residuos y/o desechos hospitalarios, siempre y cuando cuenten con plena y pública identificación, consistente en los logos de la empresa contratante pintados o adheridos en la carrocería.</li>
          <li>Los vehículos que presten el servicio de transporte a diez (10) o más empleados, estudiantes y/o pacientes, que sean propiedad de las empresas, instituciones o entidades para las cuales preseten el servicio.</li>
          <li>Caravana presidencial. Grupo de vehículos que circula junto con el esquema de seguridad de la Presidencia de la República.</li>
          <li>Vehículo de servicio diplomático o consular. Automotor identificado con placas especiales asignadas por el Ministro de Relaciones Exteriores.</li>
          <li>Carrozas fúnebres. Vehículos destinados y/o adecuados técnicamente para el traslado de féretros.</li>
          <li>Vehículos automotores de organismos de seguridad del Estado. Los automotores que pertenezcan o hagan parte de los cuerpos de seguridad del Estado, Fuerzas Militares, Policía Naciona y Cuerpo Técnico de Investigación de la Fiscalía General de la Nación y los que ejerzan fuenciones legales de Policía Judicial.</li>
          <li>Vehículos de emergencia. Automotores debidamente identificados e iluminados, dispuestos para movilizar personas afectadas en salud, prevenir o atender desastres y/o calamidades o actividades policiales, debidamente registrados como tal con las normas y características que exige la actividad para la cual se matricules y los automotores que realizan atención médica domiciliaria, debidamente identificados, cuando en ellos se desplace personal médico en servicio.</li>
          <li>Vehículos de personas con discapacidad. Automotores que transporten o sean conducidos por personas con discapacidad permanente, cuya condición motora, sensorial o mental limite su movilidad, siempre y cuando cumplan las normas establecidas para la conducción de vehículos y previa autorización de la Secretaría de Movilidad.</li>
          <li>Vehículos de empresas de servicio públicos domiciliarios. Automotores destinados o contratados por las Empresas de Servicios Público Domiciliarios para el mantinimiento, instalación y reparación de las redes de servicios públicos, siempre y cuando cuenten con plena y pública identificación, consistente en los logos de la empresa prestadora o contratante pintados o adheridos de forma permanente.</li>
          <li>Vehículos destinados al control del tráfico y grúas. Automotores tipo grúa y aquellos destinados al control del tráfico de la Secretaría de Movilidad del Municipio de Villavicencio.</li>
          <li>Vehículos blindados. Automotores con nivel tres (3) o supreiro de blindaje, inscritos como tales en el registro automotor y autorizado por ls Superintendencia de Vigilancia y Seguridad Privada.</li>
          <li>Vehículos escolta: Conducidos por personal armado autorizado y registrado ante la Superintendencia de Vigilancia y Seguridad Privada.</li>
          <li>Vehículos destinados a enseñanza para conductores: solo se eximen de la restricción a los vehículos que circules con el instructor y el alumno, plenamente identificados.</li>
          <li>Los vehículos de transporte de carga, tanto de servicio particulares como público, clase camión o camioneta clasificados en el Registro Automotor como estacas, furgón o panel, con capacidad de carga mayor o igual a una (1) tonelada y que posean cabina sencilla, no estarán cobijados por las restricciones contenidas en el presente Decreto.</li>
          <li>Vehículos eléctricos: Automotores propulsados exclusivamente por motores eléctricos.</li>
          <ul>`,
          map: pypFuncs.buildAssetPath(
            "villavicencio",
            "mapa-pico-y-placa-villavicencio.jpg"
          )
        },
        name: "Particulares",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, false, () => {
            const startDate = "2017-08-01";
            const startNums = "9-0";
            const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
            return pypFuncs.rotateBy(
              date,
              startDate,
              startNums,
              pypNums,
              "years",
              true
            );
          });
        }
      }
    ],
    motos: [
      {
        from: "2017-08-01",
        info: {
          vehicleClasses: ["Motocicletas y motocarros de servicio particular"],
          decrees: [
            {
              name: "Decreto 222 de 2018",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-222-del-25-de-julio-de-2018.pdf"
              )
            },
            {
              name: "Decreto 245 de 2017",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-245-del-26-de-julio-de-2017.pdf"
              )
            }
          ],
          days: ["Lunes a viernes"],
          hours: [
            {
              comment: "",
              hours: [["6:30", "19:30"]],
              days: []
            }
          ],
          scheme:
            "La prohibición a la circulación de vehículos automotores particulares se realizará según el último dígito de la placa única nacional y acorde con el día calendario hábil.",
          observations: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10W9kwMwYeJfueGAuk2eqXD982kOfLG-8" width="100%" height="680"></iframe>`,
          exceptions: `<ul>
          <li>Motocicletas que pertenezcan o estén contratadas por las empresas dedicadas a los servicio de seguridad vigilancia privada o de escoltas, siempre y cuando estén prestando el servicio y plenamente identificados.</li>
          <li>Motocicletas cuya propiead pertenezca a las Fuerzas Armadas, a la Policía Nacional, Rama Judicial y a la Fiscalía.</li>
          <li>Motocicletas dedicadas al control y vigilancia del tránsito y transporte, durante la prestación del servicio.</li>
          <li>Motocicletas pertenecientes a los organismos de socorro y de atención de emergencias, plenamente identificadas.</li>
          <li>Motocicletas en las que por necesidad en la prestación de un servicio sean autorizadas por la Secretaría de Movilidad, dependencia que definirá las condiciones necesarías para la solicitud e inscripción de los vehículos que requieren excepción, los cuales deben pertenecer a la persona natural o jurídica en quien concurran las condiciones de excepción.</li>
          <li>Motocicletas vinculadas a establecimientos de comercio o empresas que realicen actividades de mensajería, domicilios, reparto de mercancías o cobranzas debidamente identificadas con logos y/o distintivos pintados o adheridos de forma permanente al vehículos y/o en los cuales los conductores se encuentren debidamente uniformados e identificados como personal de los establecimeintos mencionados, previa autorización de la Secretaría de Movilidad.</li>
          <li>Motocicletas de empresas de servicios públicos domiciliarios. Motocicletas destinadas o contratadas porl as Empresas de Servicios Públicos Domiciliarios para el mantenimientos, instalación, y reparación de las redes de servicios públicos, siempre y cuando cuenten con plena y pública identificación, consistente en los logos de la empresa contratante pintados o adheridos de forma permanente, previa autorización de la Secretaría de Movilidad.</li>
          <li>Motocicletas eléctricas. Motocicletas propulsadas exclusivamente por motores eléctricos.</li>
          <ul>`,
          map: pypFuncs.buildAssetPath(
            "villavicencio",
            "mapa-pico-y-placa-villavicencio.jpg"
          )
        },
        name: "Motos",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, false, () => {
            const startDate = "2017-08-01";
            const startNums = "9-0";
            const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
            return pypFuncs.rotateBy(
              date,
              startDate,
              startNums,
              pypNums,
              "years",
              true
            );
          });
        }
      }
    ],
    taxis: [
      {
        from: "2017-08-01",
        info: {
          vehicleClasses: [
            "Vehículos automotores de servicio público de transporte terrestre individual de pasajeros en vehículos tipo taxi"
          ],
          decrees: [
            {
              name: "Decreto 222 de 2018",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-222-del-25-de-julio-de-2018.pdf"
              )
            },
            {
              name: "Decreto 245 de 2017",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-245-del-26-de-julio-de-2017.pdf"
              )
            },
            {
              name: "Decreto 010 de 2017",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-010-del-24-de-enero-de-2017.pdf"
              )
            },
            {
              name: "Decreto 131 de 2016",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-131-del-26-de-enero-de-2016.pdf"
              )
            }
          ],
          days: ["Lunes a viernes"],
          hours: [
            {
              comment: "",
              hours: [["6:00", "24:00"]],
              days: []
            }
          ],
          scheme:
            "Según el último dígito de la placa única nacional y acorde con el día hábil de cada mes.",
          observations: `Los vehículos de servicio público de transporte terrestre automotor individual de pasajeros tipo taxi, que tengan restricción de circulación según el último dígito de la placa única nacional, podrán circular entre las 6:00 y las 7:00 horas y entre las 16:00 y las 17:00, solo por efectos de mantenimiento del vehículo y deberán cumplir las siguientes condiciones: <ul>
          <li>Portar en el vidrio delantero (lugar del pasajero) y en el vidrio trasero, un aviso que diga "FUERA DE SERVICIO", escrito en letra Arial de diez (10) centímetros de altura.</li>
          <li>En el vehículo solo se podrá movilizar el conductor.</li>
          <li>El vehículo deberá transitar sin la silla trasera o en su defecto solo se permitirá el espaldar de la silla.</li>
          </ul>`,
          exceptions: `La restricción de vehículos automotores de servicio público de transporte terrestre automotor individual de pasajeros en vehículos tipo taxi, se dará en la jurisdicción del Municipio de Villavicencio, y tendrá como límites los siguientes puntos sobre los corredores de acceso y salida de la ciudad: <ul>
          <li>Vía Puerto López a la altura del Puente sobre el Río Ocoa.</li>
          <li>Vía Acacías a la altura del sector de Ciudad Porfía (incluido Porfía).</li>
          <li>Vía Restrepo a la altura del monumento de las Arpas (Glorieta de Vanguardia).</li>
          <li>Vía antigua Restrepo a la altura del puente sobre el Caño Seco, contiguo al CAI Caudal.</li>
          <li>Vía antigua a Bogotá a la altura del sector de Súper Gas.</li>
          <li>Vía nueva a Bogotá a la altura del sector de Buenavista entrada al túnel (Misael Pastrana Borrero) sentido Bogotá - Villavicencio.</li>
          <li>Vía Catama a la altura del sector de la Reliquia (incluido la Reliquia).</li>
          </ul>`
        },
        name: "Taxis",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, false, () => {
            const dateObject = new Date(date);
            const datesDate = dateObject.getDate();
            if (datesDate === 31) {
              return "NA";
            }
            return (datesDate % 10).toString(10);
          });
        }
      }
    ],
    carga: [
      {
        from: "2017-08-01",
        info: {
          vehicleClasses: [
            "Vehículos automotores con capacidad de carga de treinta (30) toneladas o superior"
          ],
          decrees: [
            {
              name: "Decreto 222 de 2018",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-222-del-25-de-julio-de-2018.pdf"
              )
            },
            {
              name: "Decreto 245 de 2017",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-245-del-26-de-julio-de-2017.pdf"
              )
            },
            {
              name: "Decreto 010 de 2017",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-010-del-24-de-enero-de-2017.pdf"
              )
            },
            {
              name: "Decreto 131 de 2016",
              url: pypFuncs.buildAssetPath(
                "villavicencio",
                "decreto-131-del-26-de-enero-de-2016.pdf"
              )
            }
          ],
          days: ["Lunes a viernes"],
          hours: [
            {
              comment: "",
              hours: [["6:00", "8:00"], ["17:00", "19:30"]],
              days: []
            }
          ],
          scheme:
            "Prohíbase el tránsito de vehículos automotores con capacidad de carga de treinta (30) toneladas o superior por las vías públicas del perímetro urbano de la ciudad de Villavicencio de lunes a viernes entre las 6:00 y las 8:00 horas y desde las 17:00 hasta las 19:30 horas.",
          observations: `A partir de los siguientes sectores: <ul>
          <li>Vía a Puerto López a la altura de puente sobre el Rio Ocoa.</li>
          <li>Vía a Acacias a la altura del Sector Porfía (inclido Ciudad Porfía).</li>
          <li>Vía a Restrepo a la altura del monumento a las Arpas (Glorieta Vanguardia).</li>
          <li>Vían antigua a Restrepo a la altura del Ranchón del Maporal.</li>
          <li>Vía antigua a Bogotá a la altura del sector Súper Gas.</li>
          <li>Vía nueva a Bogotá a la altura del sector Buenavista entrada túnel sentido Bogotá - Villavicencio.</li>
          </ul>`,
          exceptions: `La anterior restricción no aplica para la producción agrícola, ganadera, de alientos perecederos, vehículos de emergencia, los que transporten valores, oxígeno hospitalario, los de las fuerzas militares o de policía y de las empresas de servicio públicos domiciliarios.`
        },
        name: "Transporte de Carga",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(
            date,
            this.na,
            false,
            () => "0-1-2-3-4-5-6-7-8-9"
          );
        }
      }
    ]
  }
};
