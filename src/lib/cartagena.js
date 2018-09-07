import * as pypFuncs from "../utils/funcs";

export default {
  name: "Cartagena",
  categories: {
    taxis: {
      info: {
        vehicleClasses: [
          "Vehículos de transporte público individual de pasajeros - Taxis"
        ],
        decrees: [
          {
            name: "Decreto 1659 de diciembre de 2017",
            url:
              "https://cdn.pyphoy.com/cartagena/decreto-1659-de-diciembre-de-2017.pdf"
          }
        ],
        days: [
          "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["6:00 - 6:00 del día siguiente"],
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
    },
    particulares: {
      info: {
        vehicleClasses: ["Vehículos automotores de servicio particular"],
        decrees: [
          {
            name: "Decreto 1550 del 30 de noviembre de 2017",
            url:
              "https://cdn.pyphoy.com/cartagena/decreto-1550-del-30-de-noviembre-de-2017.pdf"
          }
        ],
        days: [
          "Lunes a viernes (No se aplicará en los días festivos establecidos por la Ley)"
        ],
        hours: ["7:00 - 9:00", "12:00 - 14:00", "17:00 - 19:30"],
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
  }
};
