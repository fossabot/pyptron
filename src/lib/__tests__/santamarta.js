import santamarta from "../santamarta";

const times = ["T00:00:00.0000-05:00", "T23:59:59.999-05:00"];

describe("Specific cases", () => {
  const dateCases = [
    {
      date: "2018-01-01", // lunes festivo: Año Nuevo
      pypCases: {
        particulares: "NA",
        motos: "NA",
        taxis: "NA"
      }
    },
    {
      date: "2018-03-19", // lunes festivo: San José
      pypCases: {
        particulares: "NA",
        motos: "NA",
        taxis: "NA"
      }
    },
    {
      date: "2018-04-07", // sábado 7 de abril de 2018
      pypCases: {
        particulares: "NA",
        motos: "NA",
        taxis: "NA"
      }
    },
    {
      date: "2018-02-04", // domingo 4 de febrero de 2018
      pypCases: {
        particulares: "NA",
        motos: "NA",
        taxis: "NA"
      }
    },
    {
      date: "2018-03-12", // viernes 12 de marzo de 2018
      pypCases: {
        taxis: "8-9"
      }
    },
    {
      date: "2018-04-06", // viernes 6 de abril de 2018
      pypCases: {
        taxis: "0-1"
      }
    },
    {
      date: "2018-08-13", // lunes 13 de agosto de 2018
      pypCases: {
        taxis: "4-5"
      }
    },
    {
      date: "2018-04-09", // lunes 9 de abril de 2018
      pypCases: {
        particulares: "8-9",
        motos: "1-2-3-4",
        taxis: "0-1"
      }
    },
    {
      date: "2018-05-16", // miércoles 16 de mayo de 2018
      pypCases: {
        particulares: "2-3",
        motos: "9-0-1-2",
        taxis: "4-5"
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
          const result = santamarta.categories[pypCase].pyp(pypDate);
          expect(result).toBe(pypNum);
        });
      });
    });
  });
});
