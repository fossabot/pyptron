import bogota from "../bogota";

const times = ["T00:00:00.0000-05:00", "T23:59:59.999-05:00"];

describe("Specific cases", () => {
  const dateCases = [
    {
      date: "2018-04-07", // sábado 7 de abril de 2018
      pypCases: {
        ambiental: "1",
        taxis: "3-4",
        especial: "3-4",
        tpc: "1-2"
      }
    },
    {
      date: "2018-04-09", // lunes 9 de abril de 2018
      pypCases: {
        ambiental: "2",
        taxis: "5-6",
        especial: "5-6",
        tpc: "3-4",
        particulares: "1-3-5-7-9"
      }
    },
    {
      date: "2018-05-16", // miércoles 16 de mayo de 2018
      pypCases: {
        ambiental: "4",
        taxis: "9-0",
        especial: "9-0",
        tpc: "7-8",
        particulares: "0-2-4-6-8"
      }
    }
  ];
  // Los tests son un array de objetos que contienen la fecha que se va a evaluar y un objecto con
  // cada caso para cada fecha. Por ello comenzamos recorriendo cada uno de los objetos que vamos en
  // evaluar para cada uno de los test, tomando como referente la fecha.
  dateCases.forEach(dateCase => {
    // Ahora recorremos cada uno de los casos que hay para cada fecha.
    Object.keys(dateCase.pypCases).forEach(pypCase => {
      // Este es el valor esperado para cada uno caso de los casos que vamos a evaluar.
      const pypNum = dateCase.pypCases[pypCase];
      // Por último, vamos a evaluar cada caso de cada fecha en distintas horas para verificar que
      // da el resultado esperado independiente de la hora para comprobar que no estamos teniendo
      // saltos de fecha por zona horaria.
      it(`should return '${pypNum}' for '${pypCase}' @${dateCase.date}`, () => {
        times.forEach(time => {
          const pypDate = dateCase.date + time;
          const result = bogota.categories[pypCase].pyp(pypDate);
          expect(result).toBe(pypNum);
        });
      });
    });
  });
});
