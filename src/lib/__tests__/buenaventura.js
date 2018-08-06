import buenaventura from "../buenaventura";

const times = ["T00:00:00.0000-05:00", "T23:59:59.999-05:00"];

describe("Test cases for Buenaventura", () => {
  const dateCases = [
    {
      date: "2018-04-09", // lunes 9 de abril de 2018
      pypCases: {
        particulares: "3-4",
        tpc: "3-4",
        taxis: "3-4"
      }
    },
    {
      date: "2018-05-16", // miércoles 16 de mayo de 2018
      pypCases: {
        particulares: "7-8",
        tpc: "7-8",
        taxis: "7-8"
      }
    },
    {
      date: "2018-03-12", // miércoles 16 de mayo de 2018
      pypCases: {
        particulares: "3-4",
        tpc: "3-4",
        taxis: "3-4"
      }
    },
    {
      date: "2018-07-09", // miércoles 16 de mayo de 2018
      pypCases: {
        particulares: "1-2",
        tpc: "1-2",
        taxis: "1-2"
      }
    },
    {
      date: "2018-11-13", // miércoles 16 de mayo de 2018
      pypCases: {
        particulares: "3-4",
        tpc: "3-4",
        taxis: "3-4"
      }
    },
    {
      date: "2019-01-14", // miércoles 16 de mayo de 2018
      pypCases: {
        particulares: "9-0",
        tpc: "9-0",
        taxis: "9-0"
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
          const result = buenaventura.categories[pypCase].pyp(pypDate);
          expect(result).toBe(pypNum);
        });
      });
    });
  });
});
