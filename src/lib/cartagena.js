const pypFuncs = require("../utils/funcs");

module.exports = {
  name: "Cartagena",
  categories: {
    taxis: [
      {
        from: "2018-01-02",
        info: {
          vehicleClasses: [
            "Vehículos de transporte público individual de pasajeros - Taxis"
          ],
          decrees: [
            {
              name: "Decreto 1659 de diciembre de 2017",
              url: pypFuncs.buildAssetPath(
                "cartagena",
                "decreto-1659-de-diciembre-de-2017.pdf"
              )
            }
          ],
          days: [
            "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
          ],
          hours: [
            {
              comment: "",
              hours: [["6:00", "6:00"]],
              days: []
            }
          ],
          scheme: "Último dígito del número de la placa",
          observations: ""
        },
        name: "Taxis",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, true, () => {
            switch (pypFuncs.formatDate(date, "YYYY-MM-DD")) {
              case "2018-02-02":
                return "3-4";
              case "2018-03-02":
                return "1-2";
              case "2018-04-30":
                return "7-8";
              case "2018-10-01":
                return "7-8";
              default:
                break;
            }
            const startDate = "2018-01-02";
            const startNums = "7-8";
            const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
            return pypFuncs.rotateByMonth(date, startDate, startNums, pypNums);
          });
        }
      }
    ],
    particulares: [
      {
        from: "2018-12-03",
        info: {
          vehicleClasses: ["Vehículos automotores de servicio particular"],
          decrees: [
            {
              name: "Decreto 1361 del 29 de noviembre de 2018",
              url: pypFuncs.buildAssetPath(
                "cartagena",
                "decreto-1361-del-29-de-noviembre-de-2018.pdf"
              )
            },
            {
              name: "Decreto 1550 del 30 de noviembre de 2017",
              url: pypFuncs.buildAssetPath(
                "cartagena",
                "decreto-1550-del-30-de-noviembre-de-2017.pdf"
              )
            }
          ],
          days: [
            "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
          ],
          hours: [
            {
              comment: "",
              hours: [["7:00", "10:00"], ["17:00", "20:00"]],
              days: []
            }
          ],
          scheme: "Último dígito del número de la placa",
          observations: `Se aplica en las siguientes vías del Distrito Turístico y Cultural de Cartagena de Indias:
        <ul>
          <li>Transversal 54: desde la intersección con la Calle 30 hasta la glorieta del Pozón sobre la Variante a Cartagena.</li>
          <li>Avenida Pedro de Heredia: tramo comprendido entre la intersección con la avenida Luis Carlos López y la Avenida Rafael Núñez (sector India Catalina), hasta la intersecicón con la Transversal 54 (Sector de la Bomba el Amparo).</li>
          <li>Troncal del Occidente: desde la intersección con la Transversal 54 (Sector de la Bomba el Amparo), hasta los límites de ls ciduad con el municipio de Turbaco (Tubo Caribe).</li>
          <li>Avenida Santander: desde la entrada del Puente del Túnel de Crespo hasta la Calle 10 (Hotel Decamerón).</li>
          <li>Avenida San Martín: Calle 10 A Blockbuste, hasta la intersección de la Avenida Santander (antigua Glorieta Santander) y la Avenida Blas de Lezo.</li>
          <li>Avenida Pedro Romero (Calle 31 D): tramo comprendido entre la carrera 30 (Glorieta de la Esperanza), hasta la intersección con la Transversal 54. (Y de Olaya - Caño Chaplundun).</li>
          <li>Carrera 30 (La Esperanza): en el tramo comprendido entre la intersección con la Avenida Pedro Romero hasta la intersección con la Avenida Pedro de Heredia.</li>
          <li>Diagonal 32 (Carrera antigua de Turbaco): Tramo comprendido entre la intersección con la Avenida Pedro Romero (CAI de Olaya) hasta la intersección con la Troncal del Occidente (Bomba Terpel de Ternera - Cárcel de Ternera).</li>
          <li>Carrera 71: <ul>
            <li>Desde la intersección con la calle 30 (frente Biblioteca Jorge Artel) hasta la Troncal del Occidente en ambos sentido viables.</li>
            <li>Desde la intersección con la Troncal del Occidente hasta la Diagonal 32 (El Biffi).</li>
          </ul></li>
          <li>Avenida Blas de Lezo: En el tramo comprendido desde la intersección con la Avenida San Martín (carrera 2a) y carrera 1a (Avenida Santander), hasta la avenida Venezuela y carrera 8A.</li>
          <li>Avenida Rafael Núñez: En el tramo comprendido desde la intersección con la carrera 1a (Avenida Santander - Tenazas) hasta la intesección con la avenida Pedro de Heredia (India Catalina), en ambos sentidos viales.</li>
          <li>Avenida Luis Carlos López: En el tramo comprendido entre la intesección de la Avenida Pedro de Heredia (India Catalina) hasta la intersección con la Calle 30 (Calle de la Media Luna - Antiguas Botas Viejas), en ambos sentidos.</li>
          <li>Calle 30 que la conforman los siguientes tramos:
            <ul>
              <li>Tramo (calle de la Media Luna), comprendido entre la intersección con la carrera 8a (Camellón de los mártires), hasta la intersección con la Avenida Playa del Pedregal.</li>
              <li>Tramo comprendido en la intersección con la playa del pedregal hasta la intersección con la carrera 20 (Calle Mompox), en ambos sentidos vehiculares.</li>
              <li>Tramo comprendido desde la intersección con la calle 20 (Calle Mompox - Colegio La Candelaria) hasta la intersección con la Avenida Pedro de Heredia (Texaco No. 3).</li>
              <li>Tramo comprendido desde la intersección con la Avenida Pedro de Heredia hasta la intersección con la carrera 38 (Iglesia María Auxiliadora) y carrera 48 (Amberes - Piedra de Bolivar).</li>
              <li>Tramo comprendido entre la intersección de la carrera 48 (Piedra de Bolivar) hasta la Transversal 54 (Clínica Blas de Lezo), denominado Avenida del Consulado.</li>
              <li>Tramo comprendido entre la intersección con la Transversal 54 (Clínica Blas de Lezo) hasta la carrera 71 (frente Biblioteca Jorge Artel).</li>
            </ul>
          </li>
          <li>Avenida del Lago: Tramo comprendido entre la intersección con carrera 17 (El Universal - Puente las Palmas), hasta la intersección con la transversla 38 (frente al Barrio El Bosque sector la Cuchilla).</li>
          <li>Corredor de Carga: Desde la Glorieta del Fondo Rotatorio hasta la entrada del barrio Mnaga (Peaje Manga) en ambas calzaderas entre:
            <ul>
              <li>Avenida Crisanto Luque desde la Transversal 38 (bBomba Michelin) hasta la Transversal 54 (La Purina).</li>
              <li>Diagonal 21 (Carretera del Bosque).</li>
              <li>Tramo de la Transversla 54 desde la Diagonal 21 (Frente a Gaseosas Postobón) hasta el CAI de Ceballos.</li>
              <li>Carrera 56 (vía hacia Pasacaballos), desde el CAI de Ceballos hasta la Glorieta del Fondo Rotatorio.</li>
            </ul>
          </li>
          <li>Avenida Crisanto Luque: En el tramo comprendido desde la transversal 38 hasta la Avenida Pedro de Heredia (Mercado de Bazurto).</li>
          <li>Puente Román.</li>
          <li>Vías internas de la ciudad Amurallada: en consencuencia no se podría ingresar a las vías internas de la ciudad amurallada, en especial por los boquetes de acceso. Las vías del centro amurallado afectadas con la medida son las siguientes:
            <ul>
              <li>Sector Centro Amurallado: Calle 39, calle 39 A, calle 38, calle 37, calle 36, calle 35, calle 34, calle 32, calle 31.</li>
              <li>Sector Centro Amurallado: Carrera 11, carrera 10, carrera 9, carrera 8, carrera 7, carrera 6, carrera 4, carrera 3, carrera 2 (vía perimetral de la muralla).</li>
              <li>Sector Getsemaní: Calle 32 (Avenida Daniel Lemaitre), calle 25 (calle Larga), calle 24 (Calle del Arsenal) y todas las vías que conforman el sector.</li>
              <li>Sector Barrio la Matuna: Carrera 10 y carrera 12.</li>
            </ul>
          </li>
          </ul>`,
          exceptions: `Exceptuar de las restricciones por Pico y Placa, las siguientes categorías de vehículos:<ul>
        <li>Vehículos automotores impulsados exclusivamente por motores eléctricos.</li>
        <li>Caravanas presidenciales, es decir el grup de vehículos que circulan con el esquema de seguridad de la Presidencia de la República.</li>
        <li>Vehículos del servicio diplamático o consular. Automotores identificados con placas especiales por el Ministerio de Relaciones Exteriores.</li>
        <li>Vehículos al servicio de organismo de seguridad del Estado. Los automotores que pertenezcan o hagan parte del cuerpo de seguridad del Estado, Fuerzas Militares, Armada Nacional, Policía Nacioneal, y Cuerpo Técnico de Investigación de la Fiscalía General de la Nación y los que ejerzan funciones legalres de Policía Nacional.</li>
        <li>Vehículos asignados al Gobernador de Bolivar y al Alcalde Mayor de Cartagena de Indias.</li>
        <li>Vehículos de uso exclusivamente de Alcaldes Locales, Secretarios de Despacho, Directores de Departamento Administrativos, Jefes de Oficina y autoridades de tránsito, del orden Distrital y Departamental.</li>
        <li>Vehículos al servicio de autoridades judiciales. Automotores de uso exclusivo de jueces y magistrados/as con jurisdicción y asiento permanente en la ciudad.</li>
        <li>Vehículos al servicio de Senadores y Representantes de la Cámara.</li>
        <li>Vehículos de uso exclusivo de Concejales del Distrito de Cartagena, Diputados del Departamento de Bolivar y miembros de Junta Administradoras Locales del Distrito.</li>
        <li>Vehículos al servicio de organismos de control: Procuraduría (REgional y Provincial), Contraloría (Departamental y Distrital), y Personería Distrital de Cartagena.</li>
        <li>Vehículos fúnebres. Vehículos destinados y/o adecuados técnicamente para el traslado de féretros.</li>
        <li>Vehículos de emergencia. Automotores debidamente identificados e iluminados, dispuestos para movilizar personas afectadas en la salud, para prevenir o atender desastres y/o calamidades o actividades policiales, debidamente registrados como tales con las normas y características que exige la actividad para la cual se matricules y los automotores que realizan atención médica domiciliaria, debidamente identificados, cuando e ellos se desplace personal médico en servicio.</li>
        <li>Vehículos al servicio de personas con discapacidad. Automotores que transporten o sean conducidos por personas con discapacidad permanente cuya condición motora, sensorial o mental limiten su movilidad, siempre y cuando cumplan con las normas establecidas para la conducción de vehículos.</li>
        <li>Vehículos al servicio de las empresas de servicios públicos domiciliarios. Automotores destinados o contratados por las empresas de servicios públicos domiciliarios para el mantenimiento, instalación y reparación de las redes de servicio público, siempre y cuando cuentes con plena pública identificación consistente en los logos de las empresas contratantes pintados o adheridos en la carrocería.</li>
        <li>Vehículos destinados al control de tráfico y grúas. Automotores tipo grúas y aquellos destinados al control de tráfico en el Distrito de Cartagena.</li>
        <li>Vehículos que transportan residuos hospitalarios.</li>
        <li>Vehículos de control de emisiones y vertimientos. Vehículos utilizados por organismos ambientales (EPA Y CARDIQUE), o quien haga sus veces para la revisión, atención y prevención de emisiones y vertimientos contaminantes, siempre y cuando tengan los logos pintados o adheridos a las carrocerías.</li>
        <li>Vehículos blindados. Automotores con nivel 3 o superior de blindaje inscrito como tales en el registro distrital automotor y autorizado el blindaje por la Superintendencia de Vigilancia y Seguridad Privada.</li>
        <li>Vehículos escolta: conducidos por personal armado autorizado y registrado ante la Superintendencia de Vigilancia y Seguridad Privada. Vehículos de vigilancia y seguridad privada.</li>
        <li>Vehículos de medios de comunicación. Automotores al servicio de los medios de comunicación, que porten pintados o adheridos en las carrocerías en forma visible los distintivos del medio de comunicación y que transporten personal o equipos técnicos de comunicación para el desarrollo de la labor periodística.</li>
        <li>Vehículos particulares de propiedad de las empresas prestadora de servicio turístico.</li>
        <li>Vehículos escolares de propiead de los colegios e instituciones educativas que operan en el Distrito.</li>
        <li>Vehículos de propiedad de los médicos en ejercicio de sus funciones.</li>
        <li>Vehículos que distribuyan medicamentos y alimentos.</li>
        <li>Vehículos de transporte de valores externamente identificados.</li>
        </ul>`
        },
        name: "Particulares",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, true, () => {
            switch (pypFuncs.formatDate(date, "YYYY-MM-DD")) {
              case "2018-03-02":
                return "9-0";
              default:
                break;
            }
            const startDate = "2017-12-02";
            const startNums = "1-2";
            const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
            return pypFuncs.rotateByMonth(
              date,
              startDate,
              startNums,
              pypNums,
              true,
              3
            );
          });
        }
      },
      {
        from: "2017-12-02",
        info: {
          vehicleClasses: ["Vehículos automotores de servicio particular"],
          decrees: [
            {
              name: "Decreto 1550 del 30 de noviembre de 2017",
              url: pypFuncs.buildAssetPath(
                "cartagena",
                "decreto-1550-del-30-de-noviembre-de-2017.pdf"
              )
            },
            {
              name: "Decreto 1361 del 29 de noviembre de 2018",
              url: pypFuncs.buildAssetPath(
                "cartagena",
                "decreo-1361-del-29-de-noviembre-de-2018.pdf"
              )
            }
          ],
          days: [
            "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
          ],
          hours: [
            {
              comment: "",
              hours: [["7:00", "9:00"], ["12:00", "14:00"], ["17:00", "19:30"]],
              days: []
            }
          ],
          scheme: "Último dígito del número de la placa",
          observations: `Se aplica en las siguientes vías del Distrito Turístico y Cultural de Cartagena de Indias:
        <ul>
          <li>Avenida Pedro de Heredia: tramo comprendido entre la intersección con la avenida Luis Carlos López y la Avenida Rafael Nuñez (Sector India Catalina), hasta la intersección con la transversal 54 (Sector de la Bomba el Amparo).</li>
          <li>Troncal del Occidente: Desde la intersección con la Transversal 54 (Sector de la Bomba el Amparo), hasta los límites de la ciudad con el municipio de Turbaco (Tubo Caribe).</li>
          <li>Avenida Santander: Desde la entrada del Puente del Túnel de Crespo hasta la calle 10 (Hotel Decameron).</li>
          <li>Avenida San Martín: Calle 10 A Blockbustes, hasta la intersección de la Avenida Santander (antigua Glorieta Santander) y la Avenida Blas de Lezo.</li>
          <li>Avenida Pedro Romero (Calle 31 D): tramo comprendido entre la carrera 30 (Glorieta de la Esperanza), hasta la intersección con la Transversal 54. (Y de Olaya - Caño Chaplundun)</li>
          <li>Carrera 30 (La Esperanza): en el tramo comprendido entre la intersección con Avenida Pedro Romero hasta la intersección con la Avenida Pedro de Heredia.</li>
          <li>Diagonal 32 (Carretera antigua de Turbaco): Tramo comprendido entre la intersección con la Avenida Pedro Romero (CAI de Olaya) hasta la Intersección con la Troncal de Occidente (Bomba Terpel de Ternera - Cárcel de Ternera).</li>
          <li>Carrera 71: Desde la intersección con la Diagonal 32 (El Biffi) hasta la Calle 30 (frente Biblioteca Jorge Artel).</li>
          <li>Avenida Blas de Lezo: En el tramo comprendido desde la intersección con la Avenida San Martón (carrera 2) y Carrera 1 (Avenida Santander), hasta la avenida Venezuela y carrera 8 A.</li>
          <li>Avenida Rafael Nuñez: En el tramo comprendido desde la intersección con la carrera 1 (Avenida Santander - Tenazas hasta la intersección con la avenida Pedro de Heredia (India Catalina) en ambos sentidos viales.</li>
          <li>Avenida Luis Carlos López: en el tamo comprendido entre la intersección de la Avenida Pedro de Heredia (India Catalina) hasta la intersección con la calle 30 (Calle de la Media Luna - Antiguas Botas Viejas).</li>
          <li>Calle 30 que la conforman los siguientes tramos:
            <ul>
              <li>Tramo (Calle de la Media Luna), comprendido entre la intersección con la carrera 8 (Camellón de los mártires), hasta la intersección con la Avenida Playa del Pedregal.</li>
              <li>Tramo comprendido en la intersección con la playa del pedregal hasta la intersección con la carrera 20 (Calle Mompox).</li>
              <li>Tramo comprendido desde la intersección con la calle 20 (Calle Mompox) (Colego La Candelaria) hasta la intersección con la Avenida Pedro de Heredia (Texaco N 3).</li>
              <li>Tramo comprendido desde la intersección con la Avenida Pedro de Heredia hasta la intersección con la carrera 38 (Iglesia María Auxiliadora) y carrera 48 (Amberes - Piedra de Bolivar).</li>
              <li>Tramo comprendido entre la intersección de la carrera 48 (Piedra de Bolivar) hasta la Transversal 54 (Clínica Blas de Lezo), denominado Avenida del Consulado.</li>
              <li>Tramo comprendido entre la intersección con la Transversal 54 (Clínica Blas de Lezo) hasta la carrera 71 (frente Biblioteca Jorge Artel).</li>
            </ul>
          </li>
          <li>Avenida del Lago: Tramo comprendido entre la intersección con carrera 17 (El Universal - Puente las Palmas), hasta la intersección con la transversal 38 (frente al Barrio El Bosque sector la Cuchilla)</li>
          <li>Corredor de carga: Desde la Glorieta del Fondo Rotatorio hasta la entrada del barrio Manga (Peaje Manga) en ambas calzadas entra:
            <ul>
            <li>Avenida Crisanto Luque Desde la Transversal 38 (Bomba Michelin) hasta la Transversal 54. (La Purina)</li>
            <li>Diagonal 21 (Carretera del Bosque)</li>
            <li>Tramo de la Transversal 54 desde la Diagonal 21 (Fente a Gaseosas Postobón) hasta el CAI de Ceballos</li>
            <li>Carrera 56 (vía hacia Pasacaballos), desde CAI de Ceballos hasta la Glorieta del Fondo Rotatorio.</li>
            </ul>
          </li>
          <li>Avenida Crisanto Luque: En el tramo comprendido desde la transversal 38 hasta la Avenida Pedro de Heredia. (Mercado de Bazurto)</li>
          <li>Puente Román</li>
          <li>Vías internas de la ciudad Amurallada: en consecuencia no se podrá ingresar a las vías internas de la ciudad amurallada, en especial por los boquetes de acceso. Las vías del centro amurallado afectadas con la medida son las siguientes:
          Sector Centro Amurallado:
            <ul>
              <li>Calle 39, calle 39 A, calle 38, calle 37, calle 35, calle 34, calle 32, calle 31.</li>
              <li>Carrera 11, carrera 10, carrera 9, carrera 8, carrera 7, carrera 6, carrera 4, carrera 3, carrera 2 (vía perimetral de la muralla)</li>
            </ul>
          Sector Getsemani:
            <ul>
              <li>Calle 32 (Avenida Daniel Lemaitre), calle 25 (calle Larga), calle 24 (Calle del Arsenal) y todas las vías que conforman el sector.</li>
            </ul>
          Sector Barrio la Matuna:
          <ul>
            <li>Carrera 10 y carrera 12</li>
          </ul>
          </li>
        </ul>`,
          exceptions: `Exceptuar de las restricciones por Pico y Placa, las siguientes categorías de vehículos:<ul>
        <li>Vehículos automotores impulsados exclusivamente por motores eléctricos.</li>
        <li>Caravanas presidenciales, es decir el grup de vehículos que circulan con el esquema de seguridad de la Presidencia de la República.</li>
        <li>Vehículos del servicio diplamático o consular. Automotores identificados con placas especiales por el Ministerio de Relaciones Exteriores.</li>
        <li>Vehículos al servicio de organismo de seguridad del Estado. Los automotores que pertenezcan o hagan parte del cuerpo de seguridad del Estado, Fuerzas Militares, Armada Nacional, Policía Nacioneal, y Cuerpo Técnico de Investigación de la Fiscalía General de la Nación y los que ejerzan funciones legalres de Policía Nacional.</li>
        <li>Vehículos asignados al Gobernador de Bolivar y al Alcalde Mayor de Cartagena de Indias.</li>
        <li>Vehículos de uso exclusivamente de Alcaldes Locales, Secretarios de Despacho, Directores de Departamento Administrativos, Jefes de Oficina y autoridades de tránsito, del orden Distrital y Departamental.</li>
        <li>Vehículos al servicio de autoridades judiciales. Automotores de uso exclusivo de jueces y magistrados/as con jurisdicción y asiento permanente en la ciudad.</li>
        <li>Vehículos al servicio de Senadores y Representantes de la Cámara.</li>
        <li>Vehículos de uso exclusivo de Concejales del Distrito de Cartagena, Diputados del Departamento de Bolivar y miembros de Junta Administradoras Locales del Distrito.</li>
        <li>Vehículos al servicio de organismos de control: Procuraduría (REgional y Provincial), Contraloría (Departamental y Distrital), y Personería Distrital de Cartagena.</li>
        <li>Vehículos fúnebres. Vehículos destinados y/o adecuados técnicamente para el traslado de féretros.</li>
        <li>Vehículos de emergencia. Automotores debidamente identificados e iluminados, dispuestos para movilizar personas afectadas en la salud, para prevenir o atender desastres y/o calamidades o actividades policiales, debidamente registrados como tales con las normas y características que exige la actividad para la cual se matricules y los automotores que realizan atención médica domiciliaria, debidamente identificados, cuando e ellos se desplace personal médico en servicio.</li>
        <li>Vehículos al servicio de personas con discapacidad. Automotores que transporten o sean conducidos por personas con discapacidad permanente cuya condición motora, sensorial o mental limiten su movilidad, siempre y cuando cumplan con las normas establecidas para la conducción de vehículos.</li>
        <li>Vehículos al servicio de las empresas de servicios públicos domiciliarios. Automotores destinados o contratados por las empresas de servicios públicos domiciliarios para el mantenimiento, instalación y reparación de las redes de servicio público, siempre y cuando cuentes con plena pública identificación consistente en los logos de las empresas contratantes pintados o adheridos en la carrocería.</li>
        <li>Vehículos destinados al control de tráfico y grúas. Automotores tipo grúas y aquellos destinados al control de tráfico en el Distrito de Cartagena.</li>
        <li>Vehículos que transportan residuos hospitalarios.</li>
        <li>Vehículos de control de emisiones y vertimientos. Vehículos utilizados por organismos ambientales (EPA Y CARDIQUE), o quien haga sus veces para la revisión, atención y prevención de emisiones y vertimientos contaminantes, siempre y cuando tengan los logos pintados o adheridos a las carrocerías.</li>
        <li>Vehículos blindados. Automotores con nivel 3 o superior de blindaje inscrito como tales en el registro distrital automotor y autorizado el blindaje por la Superintendencia de Vigilancia y Seguridad Privada.</li>
        <li>Vehículos escolta: conducidos por personal armado autorizado y registrado ante la Superintendencia de Vigilancia y Seguridad Privada. Vehículos de vigilancia y seguridad privada.</li>
        <li>Vehículos de medios de comunicación. Automotores al servicio de los medios de comunicación, que porten pintados o adheridos en las carrocerías en forma visible los distintivos del medio de comunicación y que transporten personal o equipos técnicos de comunicación para el desarrollo de la labor periodística.</li>
        <li>Vehículos particulares de propiedad de las empresas prestadora de servicio turístico.</li>
        <li>Vehículos escolares de propiead de los colegios e instituciones educativas que operan en el Distrito.</li>
        <li>Vehículos de propiedad de los médicos en ejercicio de sus funciones.</li>
        <li>Vehículos que distribuyan medicamentos y alimentos.</li>
        <li>Vehículos de transporte de valores externamente identificados.</li>
        </ul>`
        },
        name: "Particulares",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, true, () => {
            switch (pypFuncs.formatDate(date, "YYYY-MM-DD")) {
              case "2018-03-02":
                return "9-0";
              default:
                break;
            }
            const startDate = "2017-12-02";
            const startNums = "1-2";
            const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
            return pypFuncs.rotateByMonth(
              date,
              startDate,
              startNums,
              pypNums,
              true,
              3
            );
          });
        }
      }
    ],
    motos: [
      {
        from: "2018-09-03",
        info: {
          vehicleClasses: [
            "Vehículos tipo motocicleta de cualquier modalidad y cilindraje, incluyendo cuatrimotos, tricimotos, motocarros y bicicletas con pedalea asistido con motor."
          ],
          decrees: [
            {
              name: "Decreto 1035 del 5 de septiembre de 2018",
              url: pypFuncs.buildAssetPath(
                "cartagena",
                "decreto-1035-del-5-de-septiembre-de-2018.pdf"
              )
            }
          ],
          days: ["Lunes a viernes."],
          hours: [
            {
              comment: "",
              hours: [["5:00", "23:00"]],
              days: []
            }
          ],
          scheme: `<ol>
          <li>Restringir en todo el territorio del Distrito Turístico y Cultural de Cartagena de Indias la circulación de los vehículos tipo motocicleta de cualquier modalidad y cilindraje, incluyendo las cuatrimotos, tricimotos, motocarros y bicicletas con pedaleo asistido con motor, mediante la implementación de la medida de Pico y Placa que operará así: <ul><li>Los días pares solo circularán motocicletas cuyas placas terminen en números pares, incluyendo el 0.</li><li>Los días impares solo circularán motocicletas cuyas placas terminen en números impares.</li></ul>
          Se exceptúan de esta medida: <ul>
          <li>Las motocicletas de organismo de seguridad del Estado, Fuerzas Militares, Armada Nacional, Policía Nacional, y Cuerpo Técnico de Investigación de la Fiscalía General de la Nación, y los que ejerzan funciones legales de Policía Nacional.</li>
          <li>Las moticicletas de autoridades de tránsito.</li>
          <li>Las motocicletas del personal de organismos de socorro.</li>
          <li>Las motocicletas de escoltas, supervisores, vigilantes y coordinadores adscritos a emrpesas de vigilancia en ejercicio de sus funciones.</li>
          <li>Las motocicletas de propiedad y al servicio de las empresas de servicios públicos domiciliario.</li>
          <li>Las motocicletas de mensajeros y domiciliarios de restaurantes y droguerías para reparto de alimentos y medicamentos.</li>
          </ul></li>
          <li>Restringir temporalmente en todo el territorio del Destrito Turístico y Cultural de Cartagena de Indias el segundo y último viernes de cada mes la circulación de vehículos tipo motocicleta de cualquier modalidad y cilindraje, incluyendo cuatrimotos, tricimotos, motocarros y cibicletas con pedaleo asistido con motor.
          Se exceptúan de esta medida: <ul>
          <li>Las motocicletas de organismo de seguridad del EStado, Fuerzas Militares, Armada NAcional, Policía Nacional, y Cuerpo Técnico de Investigación de la Fiscalía General de la Nación y los que ejerzan funciones legales de Policía Nacional.</li>
          <li>Las motocicletas de autoridades de tránsito.</li>
          <li>Las motocicletas de notificadores de juzgados y tribunales.</li>
          <li>Las motocicletas de personal de las entidades estatales que ejerzan fucniones de mensajería.</li>
          <li>Las motocicletas del personal de organismos de socorro.</li>
          <li>Las motocicletas de escoltas, supervisores, vigilantes y coordinadores adscritos a empresas de vigilancia en ejercicio de sus funciones.</li>
          <li>Las motocicletas de domiciliarios de droguería para el reparto de medicamentos.</li>
          </ul>
          </li>
          <li>Restringir el ingreso y la circulación de los vehículos automotores denominados motocicletas de cualquier modalidad y cilindraje, incluyendo cuatrimotos, tricimotos, motocarros y bicicletas con pedaleo asistido con motor, en el centro amurallado de la ciudad de cartagena de INdias y en el barrio Getsemaní.
          Se exceptúan de esta medida: <ul>
          <li>Las motocicletas de organismos de seguridad del Estado, Fuerzas Militares, Armada Nacional, Policía Nacional, y Cuerpo Técnico de investigación de la fiscalía General de la Nación y los que ejerzan funciones legales de Policía Nacional.</li>
          <li>Las motocicletas de autoridades de tránsito.</li>
          <li>Las motocicletas de notificadores de juzgados y tribunales.</li>
          <li>Las motocicletas del personal de las entidades estatales que ejerzan funciones de mensajería.</li>
          <li>Las motocicletas del personal de organismos de socorro.</li>
          <li>Las motocicletas de escoltas, supervisores, vigilantes y coordinadores adscritos a empresas de vigilancia en ejercicio de sus funciones.</li>
          <li>Las motocicletas de propiedad y al servicio de las empresas de servicios públicos domiciliario.</li>
          </ul>
          </li>
          </ol>`
        },
        name: "Motos",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, false, () => {
            const dateObject = new Date(date);
            if (dateObject.getDay() === 5) {
              const year = dateObject.getFullYear();
              const month = dateObject.getMonth();
              const secondFriday = pypFuncs.getNthDayOfMonth(year, month, 5, 1);
              if (
                pypFuncs.formatDate(dateObject, "YYMMDD") ===
                pypFuncs.formatDate(secondFriday, "YYMMDD")
              ) {
                return "0-1-2-3-4-5-6-7-8-9";
              }
              const lastFriday = pypFuncs.getNthDayOfMonth(year, month, 5, -1);
              if (
                pypFuncs.formatDate(dateObject, "YYMMDD") ===
                pypFuncs.formatDate(lastFriday, "YYMMDD")
              ) {
                return "0-1-2-3-4-5-6-7-8-9";
              }
            }
            const pyp = ["1-3-5-7-9", "0-2-4-6-8"];
            return pyp[pypFuncs.getDate(date) % 2];
          });
        }
      }
    ]
  }
};
