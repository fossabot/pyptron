import * as pypFuncs from "../utils/funcs";

export default {
  name: "Ocaña",
  categories: {
    particulares: [
      {
        from: "2018-10-22",
        info: {
          vehicleClasses: [
            "Vehículos particulares no matriculados en el municipio de Ocaña"
          ],
          decrees: [
            {
              name: "Decreto 60 del 22 de octubre de 2018",
              url:
                "https://cdn.pyphoy.com/ocana/decreto-60-del-22-de-octubre-de-2018.pdf"
            },
            {
              name: "Estudio de tráfico pico y placa",
              url:
                "https://cdn.pyphoy.com/ocana/estudio-de-trafico-pico-y-placa-ocana-enero-2018.pdf"
            }
          ],
          days: [
            "Lunes a viernes (no se aplicará en los días festivos establecidos por la Ley)"
          ],
          hours: [{ comment: "", hours: [["7:00", "19:00"]] }],
          scheme:
            "Cíclico de acuerdo con el último número de la placa del vehículo",
          observations: `La medida de Pico y Placa rige en toda la jurisdicción urbana del municipio de Ocaña, (con excepción de la vía nacional) bajo los siguientes parámetros:
            <ol>
            <li>La aplicación de la medida de reducción de vehículos, se hará de lunes a viernes (días hábilies) desde las 7:00am a 7:00pm para vehículos particulares.</li>
            <li>La forma de aplicación en el modelo de pico y placa será definada por el último número de la placa para VEHÍCULOS PARTICULARES de la siguiente forma: LUNES 0-1, MARTES 2-3, MIÉRCOLES 4-5, JUEVES 6-7 Y VIERNES 8-9.</li>
            </ol>`,
          exceptions: `Se exceptúan de la presente medida, en consideración a las necesidades de la ciudad, los siguientes vehículos los matriculados en Ocaña:
          <ul>
            <li>Vehículos de emergencia (ambulancias, incluidas las veterinarias, bomberos, y todos aquellos que transporten equipo y material logístico, así como los que prestan atención médica personalizada) y los vehículos requeridos para la atención de siniestros siempre que se encuentresn demarcados con identificación permanente.</li>
            <li>Los vehículos particulares y oficiales que usen gas natural vehicular demarcados con identificación permanente.</li>
            <li>Vehículos de transporte escolar debiadamente acreditados ante la autoridad competente, demarcados con identificación permanente.</li>
            <li>Vehículos para el transporte de alimentos perecederos debidamente acreditados ante la autoridad competente, y con identificación permanente.</li>
            <li>Vehículos dotados tecnológicamente para el mantenimiento de redes de servicios públicos esenciales (energía, semaforización, telefonía, acueducto y alcantarillado, gas), demarcados con identificación permanente.</li>
            <li>Vehículos operativos de las empresas de servicios públicos domiciliarios, debidamente legalizados y con identificación permanente.</li>
            <li>Vehículos de propiedad de medios de comunicación y los vehículos contratados y acreditados, mientras están al servicio de alguno de los mencionados medios; además, los que estén dotados de equipos que no permitan que sea reemplazado por otro vehículos. En cualquier caso deberán tener identificación visual externa. Para el sistema de foto detección se requiere acreditación ante la secretaría de Movilidad.</li>
            <li>Vehículos pertenecientes a las Fuerzas Militares, Policia Nacional, INPEC que sean especialmente destinados para el transporte de personal detenido.</li>
            <li>Vehículos destinados al control de tránsito, las grúas y carros talleres o de austencia técnica debidamente identificados en forma visual externa.</li>
            <li>Para la exención de vehículos particulares y oficiales para el transporte de personas discapacitadas o pacientes y personal médico, que se desplacen en razón de tratamientos vitales como radioterapias, quimioterapías, diálisis o similares, siempre y cuando el o los discapacitados o pacientes estén ocupando el vehículo.</li>
            <li>Vehículos acreditados para el transporte de valores.</li>
            <li>Vehículos de transporte público colectivo.</li>
            <li>Vehículos colectivos tipo bus, busetas y/o microbus de servicio particular de propiedad de las empresas destinadas al transporte de sus personal.</li>
            <li>Vehículos recolectores de basura, debidamente acreditados y con identificación externa.</li>
            <li>Vehículos de carga, incluyendo aquellos en cuya matrícula se establezca una capacidad de pasajeros no superior a dos personas. En todo caso, segurián vigentes las restricciones establecidas para el transporte de carga.</li>
            <li>Vehículos de servicio de transporte terrestre automotor especial.</li>
            <li>Vehículos con blindaje igual o superior a nivel 3, previa inscripción ante la Secretaría de Movilidad.</li>
            <li>Coches funerarios, más no el cortejo fúnebre.</li>
            <li>Vehículos pertenecientes a empresas privadas de vigilancia, con identificación visual externa permanente, previa acreditación de tal calidad ante la Secretaría de Movilidad.</li>
            <li>Vehículos oficiales de representación debidamente acreditado y para los cónsules honorarios solo un vehículo y que figure como propietario el mismo.</li>
            <li>Vehículos particulares y oficiales en los que transportan magistrados de los diferentes tribunales, jueces, fiscales, defensores públicos, procuradores judiciales, inspectores urbanos de policía de primera categoría y comisarios de familia, Arzobispo, y Arzobispos Auxiliares, siempre y cuando estén ocupando el vehículo y se acredite como tal, con el cané expedido por la respectiva Entidad, cuando sea requerido por la autoridad en la vía pública. Para las infracciones generadas por foto detección esta exclusión  o exención solo operará frente a los vehículos previamente registrados ante la Secretaría de Movilidad o la entidad que aquella designe.</li>
            <li>Vehículos particulares u oficiales en que se transporte el Personero, Registrados Municipal y Departamental del Estado Civil, vehículos asigandos por la Agencia Nacional de Protección, siempre uqe dichos personajes se encuentren dentro del vehículo y ostenten dicha calidad, la cual deberá acreditarse en el momento en que sea rquerido por la autoridad de tránsito en la vía pública.</li>
            <li>Vehículos con placas de municipios de otros departamentos, siempre y cuando su conductor demuestre la calidad de turista con la exhibición del tiquete del primer peaje de ingreso al Municipio de Ocaña, Norte de Santander el cual será válido como medio de prueba ante la autoridad competente y solo para el primer día. </li>
            <li>Aquellos casos en los que por las necesidades en la prestación de un servicio sean autorizados por la Secretaría de Movilidad.</li>
          </ul>`
        },
        name: "Particulares",
        na: [0, 6],
        pyp(date) {
          return pypFuncs.pyp(date, this.na, true, () => {
            const pyp = [
              "0-1", // lunes
              "2-3", // martes
              "4-5", // miércoles
              "6-7", // jueves
              "8-9" // viernes
            ];
            return pyp[pypFuncs.getDay(date) - 1];
          });
        }
      }
    ]
  }
};
